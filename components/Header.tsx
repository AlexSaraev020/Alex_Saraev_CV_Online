"use client"
import GamersLobby from '@/public/images/projects/gamers_lobby/1.webp'
import Calculator from '@/public/images/projects/calculator/1.webp'
import Weather_App from '@/public/images/projects/weather_app/1.webp'
import World_Wide_Lens from '@/public/images/projects/world_wide_lens/1.webp'
import React, { use, useEffect, useState } from 'react'
import { Menu, MenuItem, HoveredLink, ProductItem } from './ui/navbar-menu'
import Hamburger from './ui/hamburger'
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState<string | null>(null)

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToAndClose = (id: string) => {
        setIsOpen(false);
        scrollTo(id);
    };

    useEffect(() => {
        document.documentElement.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    return (
        <header className='w-full absolute z-40 h-auto flex items-center font-mono justify-center p-4 '>
            <nav className='w-fit hidden md:block'>
                <Menu setActive={setActive} >
                    <MenuItem click={() => scrollTo('#home')} setActive={setActive} active={active} item="Home" >
                        <HoveredLink >Go to homepage</HoveredLink>
                    </MenuItem>
                    <MenuItem click={() => scrollTo('#about-me')} setActive={setActive} active={active} item="About" >
                        <HoveredLink>Find out who I am</HoveredLink>
                    </MenuItem>
                    <MenuItem click={() => scrollTo('#projects')} setActive={setActive} active={active} item="Portofolio" >
                        <div className="grid grid-cols-2 gap-10 p-4">
                            <ProductItem title={'Gamers Lobby'} description={'A place where gamers can mark their favorite games'} href={'/'} src={GamersLobby} />
                            <ProductItem title={'Calculator App'} description={'A simple and easy-to-use calculator'} href={'/'} src={Calculator} />
                            <ProductItem title={'Weather App'} description={'Get the latest weather updates from every city of the world'} href={'/'} src={Weather_App} />
                            <ProductItem title={'World Wide Lens'} description={'Stay informed with the latest news from around the world'} href={'/'} src={World_Wide_Lens} />
                        </div>
                    </MenuItem>
                        <HoveredLink href={'/download/Alex_Saraev_Resume.pdf'} download >Resume</HoveredLink>
                    <MenuItem click={() => scrollTo('#social')} setActive={setActive} active={active} item="Social" >
                        <HoveredLink >Contact Me</HoveredLink>
                    </MenuItem>
                </Menu>
            </nav>
            <div className='w-full z-20 flex justify-end items-center md:hidden fixed top-4 right-4'>
                <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            {isOpen &&
                <div className='h-screen fixed bg-black inset-0 z-10 animate-fadeIn '>
                    <ul className='w-full h-screen flex flex-col items-center justify-center gap-4 text-white'>
                        <li>
                            <button onClick={() => scrollToAndClose('#home')}>Home</button>
                        </li>
                        <li>
                            <button onClick={() => scrollToAndClose('#about-me')}>About</button>
                        </li>
                        <li>
                            <button onClick={() => scrollToAndClose('#projects')}>Projects</button>
                        </li>
                        <li>
                            <button>Resume</button>
                        </li>
                        <li>
                            <button onClick={() => scrollToAndClose('#social')}>Social</button>
                        </li>
                    </ul>
                </div>
            }
        </header>
    )
}
