import React from 'react'
import {Link,NavLink} from 'react-router-dom'
function Header() {
    return(
        <header className='shadow sticky z-50 top-0'>
            <nav className='bg-black border-gray-200 px-6  py-2.5'>
                <div className="flex flex-wrap justify-between items-center
                     mx-auto max-w-screen-xl">
                        <Link to="/" className='flex items-center'>
                            <img src="https://wallpapers.com/images/featured/red-batman-logo-tngejsmbolqy2di4.jpg" alt=""
                                        className="mr-3 h-12"/>
                        </Link>
                        <div className="navRight flex items-center lg:order-2">
                            <Link 
                                to="#"
                                className="text-[#970602] hover:bg-[#970602] hover:text-black focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ">
                                    Log In
                            </Link>
                            <Link 
                                to="#"
                                className="text-[#970602] hover:bg-[#970602] hover:text-black focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ">
                                    Get Started
                            </Link>  
                        </div>
                        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <NavLink
                                    to="/" className={({isActive})=>`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100  ${isActive ? "text-red-600" : "text-[#970602]" } lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`   
                             }>
                                Home
                             </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                    to="/about" className={({isActive})=>`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100  ${isActive ? "text-red-600" : "text-[#970602]" } lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`   
                             }>
                                About
                             </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                    to="/contact" className={({isActive})=>`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100  ${isActive ? "text-red-600" : "text-[#970602]" } lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`   
                             }>
                                Contact
                             </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                    to="/mission" className={({isActive})=>`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100  ${isActive ? "text-red-600" : "text-[#970602]" } lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`   
                             }>
                               Mission
                             </NavLink>
                                </li>
                                
                            </ul>
                        </div>
                </div>
                
            </nav>
        </header>
    )
}

export default Header