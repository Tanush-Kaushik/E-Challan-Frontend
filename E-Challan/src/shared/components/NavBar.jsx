import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav class="bg-white bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 border-gray-600">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Ticket Tracer</span>
                </a>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  bg-gray-800 md: bg-gray-900  border-gray-700">
 
                        <li>
                            <Link to='/ticket' class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md: hover:text-blue-500  text-white  hover:bg-gray-700  hover:text-white md: hover:bg-transparent  border-gray-700">Check Ticket</Link>
                        </li>
                        <li>
                            <Link to='/' class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md: hover:text-blue-500  text-white  hover:bg-gray-700  hover:text-white md: hover:bg-transparent  border-gray-700">Pay Ticket</Link>
                        </li>
                        <li>
                            <Link to='/contactUs' class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md: hover:text-blue-500  text-white  hover:bg-gray-700  hover:text-white md: hover:bg-transparent  border-gray-700">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;