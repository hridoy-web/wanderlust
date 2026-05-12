"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";


const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="bg-base-200 border-b-2 px-4 md:px-8 lg:px-16 relative">

            <div className="flex items-center justify-between py-4 ">

                <ul className="hidden md:flex items-center gap-4">
                    <li>
                        <Link href={'/'} className="text-gray-600 font-semibold hover:text-blue-700 duration-200 transition-colors ">Home</Link>
                    </li>
                    <li>
                        <Link href={'/destinations'} className="text-gray-600 font-semibold hover:text-blue-700 duration-200 transition-colors ">Destinations</Link>
                    </li>
                    <li>
                        <Link href={'/my-bookings'} className="text-gray-600 font-semibold hover:text-blue-700 duration-200 transition-colors " >My Bookings</Link>
                    </li>
                   
                </ul>

                <Image
                    src={'/assets/Wanderlast.png'}
                    alt="logo"
                    height={200}
                    width={200}
                    className="w-28 md:w-40"
                />

                <ul className="flex items-center gap-3 md:gap-4">
                    <li>
                        <Link href={'/profile'} className="text-gray-600 text-sm md:text-base font-semibold hover:text-blue-700 duration-200 transition-colors ">Profile</Link>
                    </li>

                    <li>
                        <Link href={'/login'} className="text-gray-600 text-sm md:text-base font-semibold hover:text-blue-700 duration-200 transition-colors ">Login</Link>
                    </li>

                    <li>
                        <Link href={'/signup'} className="text-gray-600 text-sm md:text-base font-semibold hover:text-blue-700 duration-200 transition-colors ">SignUp</Link>
                    </li>
                </ul>

                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} >
                    {isMenuOpen === true ? <IoCloseSharp size={25} /> : <MdMenuOpen size={25} />}
                </button>

                {isMenuOpen && (
                    <ul className="md:hidden absolute top-full left-0 w-full  bg-white border rounded shadow-xl py-5 px-6 flex flex-col gap-2 animate-in slide-in-from-top duration-500 z-50">
                        <li>
                            <Link
                                href={'/'}
                                onClick={() => setIsMenuOpen(false)} 
                                className="text-gray-800 font-semibold hover:text-blue-700 transition-colors"
                            >
                                Home
                            </Link>
                        </li>
                        <hr />
                        <li>
                            <Link
                                href={'/destinations'}
                                onClick={() => setIsMenuOpen(false)} 
                                className="text-gray-800 font-semibold hover:text-blue-700 transition-colors"
                            >
                                Destinations
                            </Link>
                        </li>
                        <hr />
                        <li>
                            <Link
                                href={'/my-bookings'}
                                onClick={() => setIsMenuOpen(false)} 
                                className="text-gray-800 font-semibold hover:text-blue-700 transition-colors"
                            >
                                My Bookings
                            </Link>
                        </li>
                    </ul>
                )}

            </div>
        </nav>
    );
};

export default NavBar;