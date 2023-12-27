// Header.js
import React from "react";

function Header() {
  const backgroundImage = "url('/images/background.png')";
  return (
    <div
      style={{
        backgroundImage: backgroundImage,
      }}
      className="relative min-h-screen bg-center bg-cover bg-fixed rounded-b-[24px]"
    >
      {/* navbar */}
      <nav className="absolute top-0 left-0 right-0 p-2 flex items-center justify-between">
        <img src="/images/logo.png" alt="logo" className="h-[70px] w-[70px]" />
        <a href="#">
          <button className="p-3 bg-blue-500 font-bold rounded-lg text-white">
            Join Community
          </button>
        </a>
      </nav>
      {/* header body */}
      <div className="text-center min-h-screen flex flex-col items-center justify-center p-3">
        <div className="bg:blur bg-black/50 p-2 shadow-xl rounded-lg">
          <h2 className="text-3xl lg:text-6xl font-bold text-balance text-white rounded-lg">
            Welcome to{" "}
            <span className="text-transparent bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text">
              Opengenerative
            </span>{" "}
            AI Community!
          </h2>
          <p className="text-center mt-2 font-medium text-white">
            A collective of projects united by a common vision and goal.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
