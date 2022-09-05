import Image from 'next/image';
import {AiOutlineMenu} from 'react-icons/ai'
import Link from 'next/link'

function Nav(){
    return(
        <div className="navbar">
            <div className="navbar-start pl-4">
              <Link href="../pages/index.tsx">
              <Image src="/logo.webp" width={80} height={80}  alt="logo"/>
              </Link>
            </div>
            <div className='navbar-middle '>
            <Link href="/pages/index.tsx" >
                <a className='mr-4 hover:text-red'>Home</a>
            </Link> 
             <Link href="/pages/index.tsx">
            <a className='hover:text-red'>Featured products</a>
            </Link>
            </div>
            <div className="navbar-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
             <AiOutlineMenu color='black' size={30}/>
            </label>
            </div>
        </div>
    ); 
}

export default Nav;