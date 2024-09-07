import React from 'react'
import Image from 'next/image'
import ReactIcon from '@/public/icons/react-svgrepo-com.svg'
import NextIcon from '@/public/icons/next-js-svgrepo-com.svg'
import TailwindIcon from '@/public/icons/tailwind-svgrepo-com.svg'
import JavascriptIcon from '@/public/icons/javascript-svgrepo-com.svg'
import NodeIcon from '@/public/icons/nodejs-icon-svgrepo-com.svg'
import TypescripIcon from '@/public/icons/typescript-logo-svgrepo-com.svg'
import HtmlIcon from '@/public/icons/html-5-svgrepo-com.svg'
import CssIcon from '@/public/icons/css-3-svgrepo-com.svg'
import MongoIcon from '@/public/icons/mongo-svgrepo-com.svg'
import GithubIcont from '@/public/icons/github-142-svgrepo-com.svg'


export default function AboutMe() {
    return (
        <div className="w-full max-w-6xl mx-auto py-12 md:py-16 text-white">
            <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold text-sky-500">Alex Saraev</h1>
                        <p className="text-muted-foreground">Web Developer</p>
                    </div>
                    <p className="text-muted-foreground">
                        I&#39;m a Web Developer with a passion for creating fast, good-looking, and easy-to-use websites.
                        I enjoy working on new projects and use the latest tools to build modern, smooth online experiences.
                        I&#39;m always eager to learn new skills and stay up-to-date with the latest trends in web development,
                        ensuring my work is both efficient and innovative.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Image src={GithubIcont} alt={'Github'} width={24} height={24} />
                            <span>6+ Projects</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <h2 className="text-xl font-bold">Skills</h2>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-zinc-800 rounded-md p-4 flex items-center gap-1">
                            <Image src={ReactIcon} alt={'React'} width={24} height={24} />
                            <span>React</span>
                        </div>
                        <div className="bg-zinc-800 rounded-md p-4 flex items-center gap-1">
                            <Image src={NextIcon} alt={'NextJs'} width={24} height={24} />
                            <span>Next JS</span>
                        </div>
                        <div className="bg-zinc-800 rounded-md p-4 flex items-center gap-1">
                            <Image src={NodeIcon} alt={'Node JS'} width={24} height={24} />
                            <span>Node JS</span>
                        </div>
                        <div className="bg-zinc-800 rounded-md p-4 flex items-center gap-1">
                            <Image src={JavascriptIcon} alt={'Javascript'} width={24} height={24} />
                            <span>Javascript</span>
                        </div>
                        <div className="bg-zinc-800 rounded-md p-4 flex items-center gap-1">
                            <Image src={TypescripIcon} alt={'Typescript'} width={24} height={24} />
                            <span>Typescript</span>
                        </div>
                        <div className="bg-zinc-800 rounded-md p-4 flex items-center gap-1">
                            <Image src={MongoIcon} alt={'MongoDB'} width={24} height={24} />
                            <span>MongoDB</span>
                        </div>
                        <div className="bg-zinc-800 rounded-md p-4 flex items-center gap-1">
                            <Image src={CssIcon} alt={'Css'} width={24} height={24} />
                            <span>CSS</span>
                        </div>
                        <div className="bg-zinc-800 rounded-md p-4 flex items-center gap-1">
                            <Image src={TailwindIcon} alt={'Tailwind'} width={24} height={24} />
                            <span>Tailwind CSS</span>
                        </div>
                        <div className="bg-zinc-800 rounded-md p-4 flex items-center gap-1">
                            <Image src={HtmlIcon} alt={'HTML'} width={24} height={24} />
                            <span>HTML</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
