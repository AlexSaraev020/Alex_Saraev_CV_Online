"use client"
import GamersLobby from '@/public/images/projects/gamers_lobby/1.webp'
import Calculator from '@/public/images/projects/calculator/1.webp'
import Weather_App from '@/public/images/projects/weather_app/1.webp'
import World_Wide_Lens from '@/public/images/projects/world_wide_lens/1.webp'
import React, { useState } from 'react'
import { Menu, MenuItem, HoveredLink, ProductItem } from './ui/navbar-menu'
export default function Header() {
    const [active, setActive] = useState<string | null>(null)
    return (
        <header className='w-full absolute z-40 h-auto flex items-center font-mono justify-center p-4 '>
            <nav className='w-auto'>
                <Menu setActive={setActive} >
                    <MenuItem setActive={setActive} active={active} item="Home" >
                        <HoveredLink href="/">Go to homepage</HoveredLink>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="About" >
                        <HoveredLink href="/">Find out who I am</HoveredLink>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Portofolio" >
                            <div className="grid grid-cols-2 gap-10 p-4">
                            <ProductItem title={'Gamers Lobby'} description={'A place where gamers can mark their favorite games'} href={'/'} src={GamersLobby} />
                            <ProductItem title={'Calculator App'} description={'A simple and easy-to-use calculator'} href={'/'} src={Calculator} />
                            <ProductItem title={'Weather App'} description={'Get the latest weather updates from every city of the world'} href={'/'} src={Weather_App} />
                            <ProductItem title={'World Wide Lens'} description={'Stay informed with the latest news from around the world'} href={'/'} src={World_Wide_Lens} />
                            </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Resume" >
                        <HoveredLink href="/">Download My Resume</HoveredLink>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Contact" >
                        <HoveredLink href="/">Send me a message</HoveredLink>
                    </MenuItem>
                </Menu>
            </nav>
        </header>
    )
}
