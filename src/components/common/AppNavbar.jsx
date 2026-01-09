import React from "react";
import CustomButton from "../common/CustomButton";
import logo from "../../assets/logo.png";
import useAuth from "@/hooks/useAuth";

const AppNavbar = () => {
    const {logout} = useAuth()

  return (
    <header className="flex justify-between items-center px-20 py-4">
      {/* Left Navbar */}

      <div className="flex items-center">
        <img className="w-25 h-25 -mt-5 -mb-5 -ml-14" src={logo} alt="logo" />

        <h2 className="text-4xl font-semibold">Wanderwise</h2>
      </div>
      {/* Right Navbar */}
      <div className="flex items-center gap-10">
        <nav className="flex gap-6 [&>a]:text-2xl [&>a]:font-medium [&>a]:hover:text-red-600 [&>a]:hover:underline">
          <a href="">Features</a>
          <a href="">About</a>
          <a href="">Famous Trips</a>
          <a href="">Contact</a>
          <a href="/itineraries">Itineraries</a>
          <a href="/baggage">Baggage</a>
        </nav>
        <div>
            <CustomButton text="Log out"  onClick={logout}/>
        </div>
      </div>
    </header>
  );
};

export default AppNavbar;
