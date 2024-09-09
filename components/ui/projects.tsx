import React from "react";
import ProjectCarousel from "./project-carousel";
import RetroGrid from "./retro-grid";
export function Projects() {
    return (
        <div id="#projects" className="min-h-screen py-20 w-full flex-col bg-black relative flex items-center justify-start">
            <RetroGrid className="absolute inset-0" />
            <p className="text-5xl sm:text-7xl font-bold relative z-30 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">
                Projects
            </p>
            <ProjectCarousel />
        </div>
    );
}
