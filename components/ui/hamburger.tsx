"use client"
import React, { useState } from 'react'

interface HamburgerProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}
export default function Hamburger({ isOpen, setIsOpen }: HamburgerProps) {


    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <button
            onClick={handleToggle}
            className="relative w-10 h-10 flex items-center justify-center"
        >
            <div className={`absolute w-8 h-1 bg-gray-200 rounded-full transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45' : 'top-0'}`}/>
            <div className={`absolute w-8 h-1 bg-gray-200 rounded-full transition-transform duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'top-3'}`}/>
            <div className={`absolute w-8 h-1 bg-gray-200 rounded-full transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-[-45deg]' : 'bottom-3'}`}/>
        </button>
    );
}
