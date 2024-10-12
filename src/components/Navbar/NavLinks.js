import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 title text-gray-500 hover:text-orange-500" smooth to="/about">
                About
            </HashLink>
            <HashLink className="px-4 title text-gray-500 hover:text-orange-500" smooth to="/#services">
                Services
            </HashLink>
            <HashLink className="px-4 title text-gray-500 hover:text-orange-500" to="/">
                Portfolio
            </HashLink>
            {/* <HashLink className="px-4 title text-gray-500 hover:text-orange-500" to="/contact#contact">
                Contact Us
            </HashLink> */}
            <HashLink className="text-white bg-orange-500 hover:bg-orange-400 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/contact#contact">
                Contact Us
            </HashLink>
        </>
    )
}

export default NavLinks;
