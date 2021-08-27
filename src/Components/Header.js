import React, { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
// import Menu from './Menu';
//import Cart from './Cart'
import { Link } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/outline'
// import { ShoppingCartIcon } from '@heroicons/react/outline'

export default function Header(props) {
  const { toggleMenu } = useContext(MenuContext);
  const {countCartItems} = props;

  return (
    <div   className="header-container border-b-4 border-vinylyellow h-28 bg-white flex justify-between items-center p-5 mb-12">
      <MenuIcon onClick={toggleMenu} className="w-10"/>
      <h1 className="relative inline text-2xl font-bold tracking-widest"><Link to="/">VinyLaloca</Link></h1>
      <div className="flex flex-row items-center">
      <p className="font-bold">{countCartItems}</p>
      <Link to ="/cart"><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
</Link>
</div>
      
    </div>
  )
}