'use client'
import Link from "next/link";
import { useState } from "react"
import { usePathname } from 'next/navigation'

import Brand from '../brand'
import MenuButtons from './menuButtons'
import DropDown from './dropDown'
import Socials from '../socials'



const routes = [
    {
        title: 'Prints',
        href: '/prints'
    },
    {
        title: 'Information',
        href: '/information'
    }
]

// const BackDrop = ({ setToggle }) => {
//     return (<>
//         <div
//             onClick={() => setToggle(false)}
//             className='fixed top-36 bottom-0 left-0 right-0 w-full h-full-black'
//         >
//         </div>
//     </>)
// }

export default function Nav({ setModalOn, modalOn, toggle, setToggle }) {
    const pathname = usePathname()


    return (<>
        {/* Mobile divice */}
        <div className="
                block 
                md:hidden
            ">
            {/* {toggle && <BackDrop setToggle={setToggle} />} */}
            <DropDown {...{ setToggle, toggle, routes, modalOn, setModalOn }} />
            <div
                className="                
                        flex 
                        justify-between
                        items-end
                        my-5
                ">
                <Brand {...{ setToggle, toggle, setModalOn}} />
                <MenuButtons {...{ setToggle, toggle, setModalOn }} />
            </div>
        </div>

        {/* lg - big screen */}
        <div className="
                hidden
                md:block

                flex-none
                text-sm
                mt-10
                mx-10 
            ">
            <div className="flex items-start flex-col gap-10">
                <Brand {...{ setToggle, toggle, setModalOn }} />
                <div>
                    {routes.map(({ href, title }) => {
                        return (
                            <Link
                                key={title}
                                href={href}
                                scroll={false}
                            >
                                {pathname === "/information"
                                    ? <h6
                                        className={`
                                        hover:text-black
                                        motion-safe:transition-all motion-safe:duration-300
                                        ${(pathname === href)
                                                ? 'text-black '
                                                : 'text-black/[.65]'}
                                        `}
                                    >
                                        {title}
                                    </h6>
                                    : <h6
                                        onClick={() => setModalOn(false)}
                                        className={`
                                        hover:text-black
                                        motion-safe:transition-all motion-safe:duration-300
                                        ${(pathname === href)
                                                ? 'text-black '
                                                : 'text-black/[.65]'}
                                        `}
                                    >
                                        {title}
                                    </h6>
                                }

                            </Link>
                        )
                    })}
                </div>
                <Socials />
            </div>
        </div >
    </>)
}