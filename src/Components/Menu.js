import React, { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import { XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

export default function Menu() {
  const { closeMenu } = useContext(MenuContext);
    return (
      <div className="  test menu-container p-8 w-screen h-screen h-screen relative">
        <Link onClick={closeMenu} exact to="/"><XIcon className="text-vinylyellow text-5xl font-bold w-14 inline"/></Link>
        {/* <button className="text-vinylyellow text-5xl font-bold">X</button> */}
        <nav onClick={closeMenu} >
        <ul className="mt-20">
          <li className="text-vinylpurple font-bold uppercase text-3xl leading-10 tracking-wide">
            <Link to="/">home</Link>
          </li>
          <li className="text-vinylpurple font-bold uppercase text-3xl leading-10 mt-2 tracking-wide">
            <Link to="/profile">profile</Link>
          </li>
          <li className="text-vinylpurple font-bold uppercase text-3xl leading-10 mt-2 tracking-wide">
            <Link to="/cart">cart</Link>
          </li>
          <li className="text-vinylpurple font-bold uppercase text-3xl leading-10 mt-2 tracking-wide">
            <Link to="/contact">contact</Link>
          </li>
        </ul>
        </nav>
      </div>
    )
  }