'use client'; // if you're using Next.js app router and want client-side interactivity

import Image from "next/image";
import logo from '../../public/assets/icons/check.svg';
import Link from "next/link";

export default function Navbar() {
    const navLink = (
        <>
            <div className="flex items-center gap-4">
                <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
                <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
                <Link href="/services" className="text-gray-700 hover:text-gray-900">Service</Link>
                <Link href="/blog" className="text-gray-700 hover:text-gray-900">Blog</Link>
                <Link href="/product" className="text-gray-700 hover:text-gray-900">Product</Link>
            </div>
        </>
    );
    return (
        <div className="navbar bg-base-100 shadow-sm px-4 ">
            <div className="container w-10/12 mx-auto flex justify-between items-center">
                {/* Left side */}
                <div className="navbar-start">
                    {/* Mobile menu */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                        >
                            {navLink}
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link className="btn btn-ghost text-xl flex items-center gap-2" href="/">
                        <Image src={logo} alt="Logo" width={24} height={24} />
                        <span>CarDoctor</span>
                    </Link>
                </div>

                {/* Center - desktop menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>

                {/* Right side */}
                <div className="navbar-end space-x-4">
                    <Link href='/Login' className="btn" >Login</Link>
                    <Link className="btn" href="/Register">Register</Link>
                </div>
            </div>
        </div>
    );
}
