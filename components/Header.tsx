"use client";
import GamersLobby from "@/public/images/projects/gamers_lobby/1.webp";
import Calculator from "@/public/images/projects/calculator/1.webp";
import WeVibe from "@/public/images/projects/wevibe/1.webp";
import Weather_App from "@/public/images/projects/weather_app/1.webp";
import World_Wide_Lens from "@/public/images/projects/world_wide_lens/1.webp";
import React, { useEffect, useState } from "react";
import { Menu, MenuItem, HoveredLink, ProductItem } from "./ui/navbar-menu";
import Hamburger from "./ui/hamburger";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

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
    document.documentElement.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const projects = [
    {
      id: 1,
      title: "WeVibe",
      description:
        "A social media platform where users can share their thoughts",
      href: "/",
      src: WeVibe,
    },
    {
      id: 2,
      title: "Gamers Lobby",
      description: "A place where gamers can mark their favorite games",
      href: "/",
      src: GamersLobby,
    },
    {
      id: 3,
      title: "Calculator App",
      description:
        "A simple and easy-to-use calculator designed for quick and efficient calculations",
      href: "/",
      src: Calculator,
    },
    {
      id: 4,
      title: "Weather App",
      description:
        "A weather app that provides real-time weather information and forecasts",
      href: "/",
      src: Weather_App,
    },
    {
      id: 5,
      title: "World Wide Lens",
      description:
        "A travel app that allows users to plan and book trips to different destinations around the world",
      href: "/",
      src: World_Wide_Lens,
    },
  ];

  return (
    <header className="w-full absolute z-40 h-auto flex items-center font-mono justify-center p-4 ">
      <nav className="w-fit hidden md:block">
        <Menu setActive={setActive}>
          <MenuItem
            click={() => scrollTo("#home")}
            setActive={setActive}
            active={active}
            item="Home"
          >
            <HoveredLink>Go to homepage</HoveredLink>
          </MenuItem>
          <MenuItem
            click={() => scrollTo("#about-me")}
            setActive={setActive}
            active={active}
            item="About"
          >
            <HoveredLink>Find out who I am</HoveredLink>
          </MenuItem>
          <MenuItem
            click={() => scrollTo("#projects")}
            setActive={setActive}
            active={active}
            item="Portofolio"
          >
            <div className="grid grid-cols-2 gap-10 p-4">
              {projects.map((project) => (
                <ProductItem
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  href={project.href}
                  src={project.src}
                />
              ))}
            </div>
          </MenuItem>
          <HoveredLink href={"/download/Alex_Saraev_Resume.pdf"} download>
            Resume
          </HoveredLink>
          <MenuItem
            click={() => scrollTo("#social")}
            setActive={setActive}
            active={active}
            item="Social"
          >
            <HoveredLink>Contact Me</HoveredLink>
          </MenuItem>
        </Menu>
      </nav>
      <div className="w-full z-20 flex justify-end items-center md:hidden fixed top-4 right-4">
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      {isOpen && (
        <div className="h-screen fixed bg-black inset-0 z-10 animate-fadeIn ">
          <ul className="w-full h-screen flex flex-col items-center justify-center gap-4 text-white">
            <li>
              <button onClick={() => scrollToAndClose("#home")}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollToAndClose("#about-me")}>
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToAndClose("#projects")}>
                Projects
              </button>
            </li>
            <li>
              <button>Resume</button>
            </li>
            <li>
              <button onClick={() => scrollToAndClose("#social")}>
                Social
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
