'use Client'

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import Layout from '../../components/layout'
import IMG from "../../components/img";
import Modal from "../../components/modal";

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

const images = [
    {
        album: "Scotland",
        src: "/img/scotland/coralBay.png",
        alt: "Coral Bay, Scotland.",
    },
    {
        album: "Tibet",
        src: "/img/tibet/tibetPotalapalace.jpg",
        alt: "Potala Palace, Tibet Autonomous Region, China.",
    },
    {
        album: "China",
        src: "/img/china/terracottaArmy.jpg",
        alt: "Terracotta Army, China.",
    },
    {
        album: "Scotland",
        src: "/img/scotland/coralBayMountain.png",
        alt: "Coral Bay Mountain, Scotland.",
    },
    {
        album: "Scotland",
        src: "/img/scotland/theQuiraing.png",
        alt: "The Quiraing, Scotland.",
    },
    {
        album: "Nepal",
        src: "/img/nepal/annapurnaMountains.jpg",
        alt: "Annapurna circuit, Nepal.",
    }
]

export default function Prints({ toggle, setToggle }) {
    const [modalOn, setModalOn] = useState(false);
    const [selectedImg, setSelectedImg] = useState('')

    return (
        <Layout {...{ setModalOn, modalOn }}>
            <motion.div
                variants={animation}
                initial="start"
                animate="enter"
                exit="exit"
            >
                <AnimatePresence
                    mode='wait'
                >
                    {modalOn &&
                        <motion.div
                            key={'1'}
                            variants={animation}
                            initial="start"
                            animate="enter"
                            exit="exit"
                            className="
                                md:-mt-10
                                md:-mb-10
                                md:-mx-12
                            "
                        >
                            <Modal {...{ images, modalOn, setModalOn, selectedImg }} />
                        </motion.div>}
                    {!modalOn &&
                        <motion.div
                            key={'2'}
                            variants={animation}
                            initial="start"
                            animate="enter"
                            exit="exit"

                            onClick={() => setModalOn(!modalOn)}
                        >
                            <div className="
                                
                                columns-1
                                lg:columns-2
                                xl:columns-3
                                3xl:columns-4
                                4xl:columns-5
                                5xl:columns-6
                                6xl:columns-7
                            "
                            >
                                {images.map(({ src, alt }) => {
                                    return (
                                        <div
                                            key={alt}
                                            onClick={() => setModalOn(true)}
                                        >
                                            <IMG  {...{ src, alt, setSelectedImg }} />
                                        </div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
            </motion.div >
        </Layout>
    )
}