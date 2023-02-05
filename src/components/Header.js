import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const showMenu = () => {
    setToggleMenu(true);
  };

  const closeMenu = () => {
    setToggleMenu(false);
  };
  return (
    <>
      <div className="h-36 flex flex-row items-center pr-6 pl-6">
        <h1 className="text-[32px] w-full font-body">
          SAMFÄLLIGHETEN STENBOCKEN
        </h1>

        <nav className="w-full hidden md:hidden lg:block ">
          <ul className="flex justify-evenly">
            <li className="text-xl font-body hover:underline">
              <Link to="/">Hem</Link>
            </li>
            <li className="text-xl font-body hover:underline">
              <Link to="/rundanbladet">Rundan Bladet</Link>
            </li>
            <li className="text-xl font-body hover:underline">
              <Link to="/nyinflyttad">Nyinflyttad</Link>
            </li>
            <li className="text-xl font-body hover:underline">
              <Link to="/dokument">Dokument</Link>
            </li>
            <li className="text-xl font-body hover:underline">
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </nav>
        <div className="flex w-full justify-end lg:hidden ">
          <button onClick={showMenu} type="button">
            <AiOutlineMenu className="w-9 h-9"></AiOutlineMenu>
          </button>
        </div>
      </div>

      {toggleMenu && (
        <nav className="fixed top-0 right-0 bottom-0 left-0 backdrop:-blur-sm z-10">
          <ul className="absolute top-0 right-0 bottom-0 w-6/12 lg:w-1/6  md:w-1/4  py-4 bg-white drop-shadow-2xl z-10">
            <button onClick={closeMenu} className="block p-4">
              <AiOutlineClose className="h-6 w-6 absolute top-2 left-2" />
            </button>
            <li className="border-b border-inherit">
              <Link
                to="/"
                className="p-4 flex items-center font-body gap-2.5 hover:bg-slate-300"
                onClick={closeMenu}
              >
                Hem
              </Link>
            </li>
            <li className="border-b border-inherit hover:bg-slate-300">
              <Link
                to="/rundanbladet"
                className="block p-4 font-body"
                onClick={closeMenu}
              >
                Rundan bladet
              </Link>
            </li>
            <li className="border-b border-inherit hover:bg-slate-300">
              <Link
                to="/nyinflyttad"
                className="block p-4 font-body"
                onClick={closeMenu}
              >
                Nyinflyttad
              </Link>
            </li>
            <li className="border-b border-inherit hover:bg-slate-300">
              <Link
                to="/dokument"
                className="block p-4 font-body"
                onClick={closeMenu}
              >
                Dokument
              </Link>
            </li>
            <li className="border-b border-inherit hover:bg-slate-300">
              <Link
                to="/kontakt"
                className="block p-4 font-body"
                onClick={closeMenu}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};
