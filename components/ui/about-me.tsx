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
    const skills = [
        { id: 1, name: 'React', icon: ReactIcon },
        { id: 2, name: 'Next.js', icon: NextIcon },
        { id: 3, name: 'Tailwind', icon: TailwindIcon },
        { id: 4, name: 'Javascript', icon: JavascriptIcon },
        { id: 5, name: 'Node.js', icon: NodeIcon },
        { id: 6, name: 'Typescript', icon: TypescripIcon },
        { id: 7, name: 'HTML', icon: HtmlIcon },
        { id: 8, name: 'CSS', icon: CssIcon },
        { id: 9, name: 'MongoDB', icon: MongoIcon, className: 'col-span-2 md:col-span-1' },
    ]
    return (
        <div className="w-full mx-auto py-12 md:py-16 text-white z-10">
            <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 place-content-center">
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
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {skills.map((skill) => (
                            <div key={skill.id} className={`bg-zinc-800 rounded-md p-4 flex items-center gap-1 + ${skill.className}`}>
                                <Image src={skill.icon} alt={skill.name} width={24} height={24} />
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
