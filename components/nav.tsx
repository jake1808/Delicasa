import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineHome} from 'react-icons/ai';
import {GrFavorite} from 'react-icons/gr';

function Nav(){
  // TODO: COME BACK AND DO ROUTING FOR FEATURED PRODUCTS
    return(
        <div className="navbar bg-white text-black p-0 shadow-xl fixed top-0 left-0 right-0 z-50">
        <div className="navbar-start pl-6">
         {/* <Image src='/logo.webp' width={80} height={80} alt="logo"/> */}
        </div>
        <div className="navbar-center  lg:flex">
        <Link href='/' scroll={true}>
        <Image src='/logo.webp' width={80} height={80} alt="logo"/>
        </Link>
          <ul  className="menu menu-horizontal ">
            <li className=''><a className='hidden active:bg-accent active:text-secondary rounded'>Home</a></li>
            <li><a className='hidden active:bg-accent active:text-secondary rounded'>Featured products</a></li>
          </ul>
        </div>
        <div className='navbar-end '>
        <div className='dropdown dropdown-end'>
        <label tabIndex={0} className="hidden btn btn-ghost lg:hidden">
            <AiOutlineMenu/>
        </label>
        <ul tabIndex={0} className=" menu menu-compact lg:menu-normal dropdown-content bg-white  w-[200px]  p-2">
          {/* TODO:PLEASE DO THE LINKS FOR THESE PAGES */}
          <li ><a className='active:bg-accent active:text-secondary rounded'><AiOutlineHome/> Home</a></li>
          <li ><a className='active:bg-accent active:text-secondary rounded'><GrFavorite/> Featured products</a></li>
        </ul>
        </div>
        </div>
      </div>
    ); 
}

export default Nav;