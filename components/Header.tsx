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
        <header className='w-full absolute z-10 h-auto flex items-center justify-center p-4 '>
            <nav className='w-fit'>
                <Menu setActive={setActive} >
                    <MenuItem setActive={setActive} active={active} item="Home" >
                        <HoveredLink href="/">Home</HoveredLink>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="About" >
                        <HoveredLink href="/">About</HoveredLink>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Portofolio" >
                        <HoveredLink href="/">
                            <ProductItem title={'Gamers Lobby'} description={'A place where gamers can mark their favorite games'} href={'/'} src={GamersLobby} />
                            <ProductItem title={'Calculator App'} description={'A simple and easy-to-use calculator'} href={'/'} src={Calculator} />
                            <ProductItem title={'Weather App'} description={'Get the latest weather updates from every city of the world'} href={'/'} src={Weather_App} />
                            <ProductItem title={'World Wide Lens'} description={'Stay informed with the latest news from around the world'} href={'/'} src={World_Wide_Lens} />
                        </HoveredLink>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Resume" >
                        <HoveredLink href="/">Resume</HoveredLink>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Contact" >
                        <HoveredLink href="/">Contact</HoveredLink>
                    </MenuItem>
                </Menu>
            </nav>
        </header>
    )
}
