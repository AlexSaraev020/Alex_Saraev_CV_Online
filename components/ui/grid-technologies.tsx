import React from 'react'

export default function GridTechnologies() {
    return (
        <div className="w-full">
            <h2 className="text-3xl font-bold">
                Technologies:
            </h2>
            <ul className="grid grid-cols-3 gap-20">
                <li className=" border-2 p-4 rounded-lg">
                    <h2 className='text-4xl text-orange-400 font-extrabold'>
                        Html 5
                    </h2>
                    <p>
                        Developed well-structured, semantic web pages using modern HTML5 elements
                    </p>
                </li>
                <li className=" border-2 p-4 rounded-lg">
                    <h2 className='text-4xl text-blue-400 font-extrabold'>
                        CSS3
                    </h2>
                    <p>
                        Built responsive, user-friendly web pages using modern CSS3 techniques
                    </p>
                </li>
                <li className=" border-2 p-4 rounded-lg">
                    <h2 className='text-4xl text-yellow-400 font-extrabold'>
                        Javascript
                    </h2>
                    <p>
                        Created dynamic, interactive web pages using modern JavaScript
                    </p>
                </li>
                <li className=" border-2 p-4 rounded-lg">
                    <h2 className='text-4xl text-sky-400 font-extrabold'>
                        TailwindCSS
                    </h2>
                    <p>
                        Latest industry standard CSS framework for faster and easier web design
                    </p>
                </li>
                <li className=" border-2 p-4 rounded-lg">
                    <h2 className='text-4xl text-cyan-400 font-extrabold'>
                        ReactJS
                    </h2>
                    <p>
                        Most popular JavaScript library for building single-page applications
                    </p>
                </li>
                <li className=" border-2 p-4 rounded-lg">
                    <h2 className='text-4xl text-white font-extrabold'>
                        NextJS
                    </h2>
                    <p>
                        The latest and most modern web framework, with the latest industry standards in terms of performance and security
                    </p>
                </li>
                <li className=" border-2 p-4 rounded-lg">
                    <h2 className='text-4xl text-blue-400 font-extrabold'>
                        Typescript
                    </h2>
                    <p>
                        Used typescript to gain more control over the development process
                    </p>
                </li>
                <li className=" border-2 p-4 rounded-lg">
                    <h2 className='text-4xl text-emerald-500 font-extrabold'>
                        MongoDB
                    </h2>
                    <p>
                        One of the most used databases in web development
                    </p>
                </li>
                <li className=" border-2 p-4 rounded-lg">
                    <h2 className='text-4xl text-green-400 font-extrabold'>
                        NodeJS
                    </h2>
                    <p>
                        Used NodeJS for developing the backend structure for my web applications
                    </p>
                </li>
            </ul>
        </div>
    )
}
