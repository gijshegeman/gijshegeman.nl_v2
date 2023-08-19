"use client"

import { IBM_Plex_Sans } from "next/font/google"
import { motion } from "framer-motion"

import Layout from '../../components/layout'
import ContactForm from './contactForm'

const PlexSans = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: '400',
})

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

export default function Contact() {

    return (
        <Layout >
            <motion.div

                variants={animation}
                initial="start"
                animate="enter"
                exit="exit"
            >
                <div
                    className={PlexSans.className}
                >

                    <p className="text-black/[.7] text-[13px] tracking-[0.65px] leading-[18px]">
                        Gijs Hegeman is a docter, hobby photographer and webdeveloper based in the netherlands.<br />
                        <br />
                        <br />
                        I love  discovering new places, cultures and people.<br />
                        While I do so I try to learn and enjoy as much as possible.<br />
                        <br />
                        Besides being a docter I&apos;m obsessed with photography, arts and new concepts.<br />
                        I taught myself how to write code so I can share all my creativity, experiences and skills with you!<br />
                        <br />
                        <br />
                        I&apos;m looking forward to collaborate with you ...<br />
                        <br />
                    </p>
                </div>


                {/* <div className='
                    mt-4 
                    mb-2
                    text-2xl
                    tracking-widest
                    text-stone-400
                    md:mt-10
                '>
                    Connect
                </div> */}
                {/* <ContactForm /> */}
            </motion.div>
        </Layout >
    )
}