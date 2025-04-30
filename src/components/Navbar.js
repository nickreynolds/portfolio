import React, {useState} from 'react';
import Toggler from "./home/Toggler";
import {Link, useLocation} from "react-router-dom";
import {info} from "../info/Info";

const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'About Me',
        to: '/about',
        active: 'about'
    },
    {
        name: info.initials,
        type: 'initials',
        to: '/',
        active: 'home'
    },
    {
        name: 'Portfolio',
        to: '/portfolio',
        active: 'portfolio'
    }
]

export default function Navbar({darkMode, handleClick}) {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    return (
        <nav className="w-full">
            <ul className="flex justify-center items-center gap-8 md:gap-32 lowercase text-base">
                {links.map((link, index) => (
                    <li key={index} 
                         className={`${link.active === active && !link.type ? 'border-b-2 border-gradient' : ''}`}
                         style={{borderImageSource: info.gradient}}>
                        <Link to={link.to} 
                              onClick={() => setActive(link.active)} 
                              className="text-inherit no-underline hover:text-[#ff6b6b] transition-colors">
                            {!link.type && <p className="py-2">{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </li>
                ))}
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick}/>
                </li>
            </ul>
        </nav>
    )
}