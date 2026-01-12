import React from "react";
import CustomButton from "../common/CustomButton";
import useAuth from "@/hooks/useAuth";
import Logo from "@/assets/logo.png";

const AppNavbar = () => {
  const { logout } = useAuth();

  return (
    <header className="flex justify-between items-center px-20 py-4 border-b border-gray-300 shadow-md">
      {/* Left Navbar */}

      <div className="flex items-center">
        <img className="w-25 h-25 -mt-5 -mb-5 -ml-14" src={Logo} alt="logo" />

        <h2 className="text-4xl font-semibold">Wanderwise</h2>
      </div>
      {/* Right Navbar */}
      <div className="flex items-center gap-10">
        <nav className="flex gap-6 [&>a]:text-2xl [&>a]:font-medium [&>a]:hover:text-red-600 [&>a]:hover:underline">
          <a href="/dashboard">Dashboard</a>
          <a href="/trips">Trips</a>
          <a href="/itineraries">Itineraries</a>
          <a href="/baggage">Baggage</a>
        </nav>
        <div>
          <CustomButton text="Log out" onClick={logout} />
        </div>
      </div>
    </header>
  );
};

export default AppNavbar;
