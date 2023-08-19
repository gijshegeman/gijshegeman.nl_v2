'use client'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion";

import gif from '../public/img/scotland/LandingPage.gif'


const animation = {
    start: { opacity: 0 },
    enter: {
        opacity: 1, x: 0, Y: 0,
        transition: {
            duration: 0.2,
            type: 'tween',
        }
    },
    exit: {
        opacity: 0,
    }
}

export default function LandingPage() {

    return (
        <motion.div
            variants={animation}
            initial="start"
            animate="enter"
            exit="exit"
            className="
                fixed top-0 left-0 right-0 overflow-visible
            "
        >
            <div className='
                p-10
                mb-20
                flex flex-col gap-8
                items-center
                justify-between

                md:p-14
                md:fixed md:h-full md:w-full
                md:flex md:flex-row md:justify-center md:gap-10 md:items-center
            '>
                <div className='flex-none'>
                    <Link
                        href={'/'}
                        className="font-['MillGoudy']"
                    >
                        <div
                            className="
                            flex-none
                            motion-safe:transition-all motion-safe:duration-150
                            font-thin
                            uppercase
                            tracking-[.18em]

                            text-[1em]
                            text-black

                            lg:text-black/[.65]
                            lg:text-[1.2em]
                            
                            hover:text-black
                            align-center
                        "
                        >
                            Gijs Hegeman
                        </div>
                    </Link>
                </div>
                <div className='
                    
                    max-w-[400px]
                    md:max-w-[550px]
                '>
                    <Link key={'z'} href={'/prints'} passHref scroll={false}>
                        <Image
                            unoptimized
                            src={gif}
                            alt="Sunset Sky, Scotland"

                            className="
                                max-h-[60vh]
                                
                          
                                shadow-none
                                rounded-[15px]
                                
                                md:max-h-[80vh]
                                md:animate-all md:duration-1000
                                md:blur-[10px]
                                hover:blur-none
                                overflow-auto
                        "

                            // Make the image display full width
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                                transform: 'translate3d(0, 0, 0)'
                            }}
                            priority
                        />
                    </Link>
                </div>
                <div className="
                    flex gap-5 justify-between text-xs tracking-wider lowercase items-center
                ">
                    <Link key={'1'} href={'/prints'} scroll={false}><div className="motion-safe:transition-all motion-safe:duration-500 text-black/[.65] hover:text-black">prints</div></Link>
                    <Link key={'2'} href={'/information'} scroll={false}><div className="motion-safe:transition-all motion-safe:duration-500 text-black/[.65] hover:text-black">Information</div></Link>
                </div>
            </div>
        </motion.div>
    )
}