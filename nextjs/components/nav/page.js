'use client'
import { useState } from "react"
import Link from "next/link";
import { usePathname } from 'next/navigation'

import Brand from '../brand/page'
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

export default function Nav() {

    const [toggle, setToggle] = useState(false)
    const pathname = usePathname()

    return (<>


        {/* Mobile divice */}
        <div className="
                block 
                md:hidden
            ">
            <DropDown {...{ setToggle, toggle, routes }} />
            <div
                className="                
                        flex 
                        justify-between
                        items-end
                        my-5
                ">
                <Brand {...{ setToggle, toggle }} />
                <MenuButtons {...{ setToggle, toggle }} />
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
                <Brand {...{ setToggle, toggle }} />
                <div>
                    {routes.map(({ href, title }) => {
                        return (
                            <Link
                                key={title}
                                href={href}
                                scroll={false}
                            >
                                <h6 className={`
                                    hover:text-black
                                    motion-safe:transition-all motion-safe:duration-300
                                    ${(pathname === href)
                                        ? 'text-black '
                                        : 'text-black/[.65]'}
                                    `}
                                >
                                    {title}
                                </h6>
                            </Link>
                        )
                    })}
                </div>
                <Socials />
            </div>
        </div>
    </>)
}