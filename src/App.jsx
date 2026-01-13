import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import About from "./Pages/About";
import Register from "./Pages/Register";
import Signin from "./Pages/Signin";
import useAuth from "./hooks/useAuth";
import { jwtDecode } from "jwt-decode";
import Dashboard from "./Pages/Dashboard";
import TripsPages from "./Pages/trips/TripsPages";
import AppLayout from "./components/layouts/AppLayout";
import EditTripPage from "./Pages/trips/EditTripPage";
import AddTripPage from "./Pages/trips/AddTripPage";

function App() {
  const { token, logout } = useAuth();

  const decodedToken = token ? jwtDecode(token) : null;
  console.log(decodedToken);

  const ProtectedRoutes = ({}) => {
    try {
      const decodedToken = token ? jwtDecode(token) : null;
      const userId = decodedToken.userId;

      if (decodedToken && decodedToken?.exp) {
        const currentTime = Date.now(); // Current time in milliseconds
        if (decodedToken.exp < currentTime / 1000) {
          logout();
          return <Navigate to="/login" />;
        }
      }
      if (!userId) {
        logout();
        return <Navigate to="/login" />;
      }

      return <AppLayout />;
    } catch (error) {
      console.error(err);
      logout();
      return <Navigate to="/login" />;
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/trips" element={<TripsPages />} />
            <Route path="/trips/add" element={<AddTripPage />} />
            <Route path="/trips/edit/:id" element={<EditTripPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
