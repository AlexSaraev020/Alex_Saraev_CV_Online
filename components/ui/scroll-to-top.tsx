"use client"
import React, { useEffect, useState } from 'react'
import ScrollTop from '@/public/icons/scrollTop.svg'
import Image from 'next/image'

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState<boolean>(false)
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    useEffect(() => {
        const toggleVisible = () => {
            if (window.scrollY > 300) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }
        window.addEventListener('scroll', toggleVisible)
        return () => {
            window.removeEventListener('scroll', toggleVisible)
        }
    })
    return (
        <>
            {visible &&
                <button onClick={scrollToTop} className='fixed bottom-4 right-4 p-1 flex items-center justify-center animate-bounce bg-transparen border-2 border-zinc-200 shadow-glow-sm shadow-white rounded-full'>
                    <Image
                        src={ScrollTop}
                        alt='Scroll to top'
                        width={50}
                        height={50}
                    />
                </button>
            }
        </>

    )
}
