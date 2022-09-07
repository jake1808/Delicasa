import Image from 'next/image';
import {AiOutlineMenu} from 'react-icons/ai'
import Link from 'next/link'

function Nav(){
    return(
        <div className="navbar bg-white">
        <div className="navbar-start">
         <Image src='/logo.webp' width={50} height={50} alt="logo"/>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ">
            <li><a>Home</a></li>
            <li><a>Featured products</a></li>
          </ul>
        </div>
        <div className='navbar-end '>
        <div className='dropdown'>
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <AiOutlineMenu/>
        </label>
        <ul tabIndex={0} className="menu menu-compact">

        </ul>
        </div>
        </div>
      </div>
    ); 
}

export default Nav;