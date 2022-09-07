import Image from 'next/image';
import {AiOutlineMenu, AiOutlineHome} from 'react-icons/ai';
import {GrFavorite} from 'react-icons/gr'

import Link from 'next/link'

function Nav(){
    return(
        <div className="navbar bg-white text-black">
        <div className="navbar-start">
         <Image src='/logo.webp' width={50} height={50} alt="logo"/>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul  className="menu menu-horizontal ">
            <li><a>Home</a></li>
            <li><a>Featured products</a></li>
          </ul>
        </div>
        <div className='navbar-end '>
        <div className='dropdown dropdown-end'>
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <AiOutlineMenu/>
        </label>
        <ul tabIndex={0} className=" menu menu-compact lg:menu-normal dropdown-content bg-white  w-[200px]  p-2">
          {/* TODO:PLEASE DO THE LINKS FOR THESE PAGES */}
          <li className=''><a><AiOutlineHome/> Home</a></li>
          <li className=''><a><GrFavorite/> Featured products</a></li>
        </ul>
        </div>
        </div>
      </div>
    ); 
}

export default Nav;