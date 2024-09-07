"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import FirstImage from '@/public/images/projects/gamers_lobby/1.webp'
import SecondImage from '@/public/images/projects/gamers_lobby/2.webp'
import ThirdImage from '@/public/images/projects/gamers_lobby/3.webp'
import FourthImage from '@/public/images/projects/gamers_lobby/4.webp'
import FifthImage from '@/public/images/projects/gamers_lobby/5.webp'
import SixthImage from '@/public/images/projects/gamers_lobby/6.webp'
import SeventhImage from '@/public/images/projects/gamers_lobby/7.webp'
import EighthImage from '@/public/images/projects/gamers_lobby/8.webp'
import NinthImage from '@/public/images/projects/gamers_lobby/9.webp'
import { useState } from 'react'
import { StaticImageData } from 'next/image'
export default function ProjectCarousel() {
    const [activeIndex, setActiveIndex] = useState(1);
    const projects = [
        {
            id: 1,
            title: 'Gamers Lobby',
            description: 'A place where gamers can mark their favorite games',
            images: [FirstImage, SecondImage, ThirdImage, FourthImage, FifthImage, SixthImage, SeventhImage, EighthImage, NinthImage]
        },
        {
            id: 2,
            title: 'Calculator App',
            description: 'A simple and easy-to-use calculator',
            images: []
        },
        {
            id: 3,
            title: 'Weather App',
            description: 'Get the latest weather updates from every city of the world',
            images: []
        },
        {
            id: 4,
            title: 'World Wide Lens',
            description: 'Stay informed with the latest news from around the world',
            images: []
        }
    ]
    const currentProject = projects.find(project => project.id === activeIndex);
    return (
        <section className='w-full text-white flex'>
            {currentProject ? (
                <div key={currentProject.id} className='w-full flex p-20'>
                    <div className='w-6/12'>
                        <h1 className='text-3xl font-bold'>{currentProject.title}</h1>
                        <p className='text-lg'>{currentProject.description}</p>
                    </div>
                    <div className='w-6/12 flex items-center justify-center'>
                        {currentProject.images.length > 0 ? (
                            <Carousel
                            showThumbs={false}
                            autoPlay
                            className='w-9/12 flex'
                            >
                                {currentProject.images.map((image, index) => (
                                    <Image width={1920} height={1080} src={image} key={index} alt={currentProject.title} />
                                ))}
                            </Carousel>
                        ) : (
                            <div>No images</div>
                        )}
                    </div>
                </div>
            ) : (
                <div>No project</div>
            )}
        </section>
    )
}
