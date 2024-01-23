"use client";

import ButtonHeader from "../button/ButtonHeader";
import Logo from "../Logo/Logo";

export default function HeaderResponsive() {

  return (
    <div className="navbar bg-lilac-light">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost hover:bg-purple-medium hover:bg-opacity-50 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-beige rounded-box w-52"
          >
            <li>
              <a>Ver tu destino</a>
            </li>
            <li>
              <a>Mi cuenta</a>
              <ul className="p-2">
                <li>
                  <a>Crear mi cuenta</a>
                </li>
                <li>
                  <a>Mis lecturas de tarot</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Cómo jugar</a>
            </li>
          </ul>
        </div>
        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-semibold text-color text-base px-1">
          <li>
            <a>Crear mi cuenta</a>
          </li>
          <li>
            <a>Mis lecturas de tarot</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
          <ButtonHeader
            className="sm:px-2 md:px-5 lg:px-9"
            buttonColor="bg-purple-dark hover:bg-purple-medium"
            path1="/"
            path2="/instructions"
            buttonText1="Cómo jugar"
            buttonText2="Jugar"
          />
      </div>
    </div>
  );
}