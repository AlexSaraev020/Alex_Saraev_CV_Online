"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import GamersLobby1 from '@/public/images/projects/gamers_lobby/1.webp'
import GamersLobby2 from '@/public/images/projects/gamers_lobby/2.webp'
import GamersLobby3 from '@/public/images/projects/gamers_lobby/3.webp'
import GamersLobby4 from '@/public/images/projects/gamers_lobby/4.webp'
import GamersLobby5 from '@/public/images/projects/gamers_lobby/5.webp'
import GamersLobby6 from '@/public/images/projects/gamers_lobby/6.webp'
import GamersLobby7 from '@/public/images/projects/gamers_lobby/7.webp'
import GamersLobby8 from '@/public/images/projects/gamers_lobby/8.webp'
import GamersLobby9 from '@/public/images/projects/gamers_lobby/9.webp'
import Calculator1 from '@/public/images/projects/calculator/1.webp'
import Calculator2 from '@/public/images/projects/calculator/2.webp'
import Calculator3 from '@/public/images/projects/calculator/3.webp'
import Calculator4 from '@/public/images/projects/calculator/4.webp'
import Calculator5 from '@/public/images/projects/calculator/5.webp'
import WeatherApp1 from '@/public/images/projects/weather_app/1.webp'
import WeatherApp2 from '@/public/images/projects/weather_app/2.webp'
import WeatherApp3 from '@/public/images/projects/weather_app/3.webp'
import WeatherApp4 from '@/public/images/projects/weather_app/4.webp'
import WeatherApp5 from '@/public/images/projects/weather_app/5.webp'
import WorldWideLens1 from '@/public/images/projects/world_wide_lens/1.webp'
import WorldWideLens2 from '@/public/images/projects/world_wide_lens/2.webp'
import WorldWideLens3 from '@/public/images/projects/world_wide_lens/3.webp'
import WorldWideLens4 from '@/public/images/projects/world_wide_lens/4.webp'
import GithubImage from '@/public/images/projects/github.webp'
import { useState } from 'react'
export default function ProjectCarousel() {
    const [activeIndex, setActiveIndex] = useState(1);
    const projects = [
        {
            id: 1,
            title: 'Gamers Lobby',
            description: 'A simple and intuitive platform for gamers to search for their favorite games and easily add them to a personalized favorites list. With a straightforward interface, users can quickly find and bookmark the games they love, keeping all their top picks organized in one convenient place. This tool focuses on enhancing your gaming experience by making it easy to manage your favorite titles without any unnecessary complexity.',
            technologies: ['React', 'Typescript', 'Node.Js', 'Express.Js', 'Tailwind CSS', 'MongoDB'],
            note: 'Note: When you first time access the website, you need to make any request (you can just press on the "Guest" button), and wait about 1 minute for the backend server to start.',
            images: [GamersLobby1, GamersLobby2, GamersLobby3, GamersLobby4, GamersLobby5, GamersLobby6, GamersLobby7, GamersLobby8, GamersLobby9]
        },
        {
            id: 2,
            title: 'Calculator App',
            description: 'A simple and easy-to-use calculator designed for quick and efficient calculations. Whether you are performing basic arithmetic or more advanced operations, this calculator offers a clean and intuitive interface that minimizes distractions and maximizes productivity. With responsive controls and a straightforward layout, users of all skill levels can seamlessly navigate through functions, making it ideal for both everyday use and educational purposes. Its lightweight design ensures fast performance without unnecessary features, focusing solely on delivering accurate results in a user-friendly manner.',
            technologies: ['React', 'Typescript', 'Tailwind CSS'],
            images: [Calculator1, Calculator2, Calculator3, Calculator4, Calculator5]
        },
        {
            id: 3,
            title: 'Weather App',
            description: 'Stay informed with real-time weather updates from cities across the globe. Whether you are planning a trip, tracking local weather conditions, or simply curious about the forecast in a distant city, this service provides accurate and up-to-date information at your fingertips. With global coverage, you can easily search for any city and get detailed weather insights, including temperature, humidity, wind speed, and more. Keep ahead of changing conditions and make informed decisions with timely and reliable weather updates, no matter where you are in the world.',
            technologies: ['React', 'Typescript', 'Tailwind CSS'],
            images: [WeatherApp1, WeatherApp2, WeatherApp3, WeatherApp4, WeatherApp5]
        },
        {
            id: 4,
            title: 'World Wide Lens',
            description: 'Stay informed with the latest news from around the world with an easy-to-use app. Simply search for news stories and read them directly within the app. Whether you are interested in global events or specific topics, the platform offers a straightforward way to access and stay updated on current news.',
            technologies: ['Next JS', 'Typescript', 'Tailwind CSS'],
            images: [WorldWideLens1, WorldWideLens2, WorldWideLens3, WorldWideLens4]
        }
    ]
    const currentProject = projects.find(project => project.id === activeIndex);
    return (
        <section className='w-full text-white flex'>
            {currentProject ? (
                <div key={currentProject.id} className='w-full flex flex-col lg:flex-row px-20 py-10'>
                    <div className='w-full lg:w-6/12'>
                        <h1 className='text-6xl font-bold'>{currentProject.title}</h1>
                        <p className='text-lg p-4 w-10/12'>{currentProject.description}</p>
                        {currentProject.note && <p className='text-lg p-4 w-10/12 font-extrabold text-emerald-500'>{currentProject.note}</p>}
                        <h2 className='text-xl font-bold p-4'>Technologies used :</h2>
                        <ul className='w-full gap-2 flex flex-wrap lg:flex-col p-4'>
                            {currentProject.technologies ? (currentProject.technologies.map((technology, index) => (
                                <li key={index} className='text-lg'>{technology}</li>
                            ))
                            ) : (
                                <div>No technologies</div>
                            )}
                        </ul>
                    </div>
                    <div className='w-full lg:w-6/12 flex flex-col gap-8 items-center justify-center'>
                        {currentProject.images.length > 0 ? (
                            <Carousel
                                showThumbs={false}
                                autoPlay={true}
                                emulateTouch={true}
                                infiniteLoop={true}
                                className='w-full flex border-2 rounded-xl shadow-glow border-zinc-400 shadow-zinc-400'
                            >
                                {currentProject.images.map((image, index) => (
                                    <Image
                                        width={1920}
                                        height={1080}
                                        src={image}
                                        key={index}
                                        alt={currentProject.title}
                                        className='rounded-xl'
                                    />
                                ))}
                            </Carousel>
                        ) : (
                            <div>No images</div>
                        )}
                        <div className='w-full flex flex-col'>
                            <h2 className='text-xl font-bold p-4'>All Projects:</h2>
                            <div className='overflow-x-scroll py-4 scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-transparent'>
                                <div className='flex gap-4 min-w-max'>
                                    {projects.map((project) => (
                                        <div className='flex flex-col relative' key={project.id}>
                                            <Image
                                                width={300}
                                                height={225}
                                                src={project.images[0]}
                                                alt={project.title}
                                                className='rounded-xl'
                                            />
                                            <button onClick={() => setActiveIndex(project.id)} className='absolute inset-0 bottom-0 left-0 bg-black/10 flex items-end justify-center w-full text-white text-center'>
                                                {project.title}
                                            </button>
                                        </div>
                                    ))}
                                    <div className='flex flex-col relative'>
                                        <Image
                                            width={300}
                                            height={225}
                                            src={GithubImage}
                                            alt={'Github'}
                                            className='rounded-xl'
                                        />
                                        <a
                                            href='https://github.com/AlexSaraev020?tab=repositories'
                                            target='_blank'
                                            className='absolute bottom-0 left-0 bg-black/20 w-full flex items-end justify-center text-white text-center inset-0'>
                                            More On Github
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            ) : (
                <div>No project</div>
            )}
        </section>
    )
}
