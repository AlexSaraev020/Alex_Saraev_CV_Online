"use client";
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import GithubIcon from '@/public/icons/github-142-svgrepo-com.svg'
import FacebookIcon from '@/public/icons/facebook.svg'
import InstagramIcon from '@/public/icons/instagram.svg'
import LinkedInIcon from '@/public/icons/linkedin.svg'
import MailIcon from '@/public/icons/mail.svg'
import CopyrightIcon from '@/public/icons/copyright.svg'

export default function Footer() {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer id='#social' className="bg-black text-white py-20 font-mono">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full md:w-1/3 mb-10">
                        <h2 className="text-4xl font-bold mb-2">Alex Saraev</h2>
                        <p className="mb-4">Web Developer</p>
                        <p className="text-sm">Building digital experiences that matter.</p>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
                        <ul className="flex flex-col text-xl space-y-2">
                            <li>
                                <button onClick={() => scrollTo('#home')}>Home</button>
                            </li>
                            <li>
                                <button onClick={() => scrollTo('#about-me')}>About</button>
                            </li>
                            <li>
                                <button onClick={() => scrollTo('#projects')}>Projects</button>
                            </li>
                            <li>
                                <button onClick={() => scrollTo('#resume')}>Resume</button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h3 className="text-2xl font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="https://github.com/AlexSaraev020?tab=repositories" target="_blank" rel="noopener noreferrer" className="transition-all duration-500 hover:scale-125">
                                <Image src={GithubIcon} alt={'Github'} className="h-8 w-8" />
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/saraev-alexandru-5a3baa265/" target="_blank" rel="noopener noreferrer" className="transition-all duration-500 hover:scale-125">
                                <Image src={LinkedInIcon} alt={'LinkedIn'} className="h-8 w-8" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a href="https://www.instagram.com/alexsaraev.15/" target="_blank" rel="noopener noreferrer" className="transition-all duration-500 hover:scale-125">
                                <Image src={InstagramIcon} alt={'Instagram'} className="h-8 w-8" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="https://www.facebook.com/alexandru.saraev.3/" target="_blank" rel="noopener noreferrer" className="transition-all duration-500 hover:scale-125">
                                <Image src={FacebookIcon} alt={'Facebook'} className="h-8 w-8" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="mailto:alexsaraev4@gmail.com" className="transition-all duration-500 hover:scale-125">
                                <Image src={MailIcon} alt={'Email'} className="w-9" />
                                <span className="sr-only">Email</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm flex items-center">
                        <Image src={CopyrightIcon} alt={'Copyright'} className="h-6 w-6 mr-1" /> {new Date().getFullYear()} Alex Saraev
                    </p>
                </div>
            </div>
        </footer>
    )
}
