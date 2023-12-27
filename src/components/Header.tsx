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
        <a href="https://twitter.com/OpenGenAI" target="_blank">
          <button className="flex items-center space-x-5 p-3 bg-blue-500 hover:bg-indigo-500 transition ease-in-out duration-200 delay-300 hover:rounded-full font-bold rounded-lg text-white">
            Join
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="h-5 w-5"
              viewBox="0,0,256,256"
            >
              <g
                fill="#ffffff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <g transform="scale(8.53333,8.53333)">
                  <path d="M26.37,26l-8.795,-12.822l0.015,0.012l7.93,-9.19h-2.65l-6.46,7.48l-5.13,-7.48h-6.95l8.211,11.971l-0.001,-0.001l-8.66,10.03h2.65l7.182,-8.322l5.708,8.322zM10.23,6l12.34,18h-2.1l-12.35,-18z"></path>
                </g>
              </g>
            </svg>
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
