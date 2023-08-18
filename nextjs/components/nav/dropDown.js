'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import patreon from "../../public/icons/patreon.svg"
import insta from "../../public/icons/instagram.svg"

export default function Dropdown({ toggle, setToggle, routes, setModalOn }) {
    const pathname = usePathname()

    return (
        <div>
            <div className={`
                block
                md:hidden
                ${!toggle ? "max-h-0 invisible" : "max-h-40"}
                transition-all duration-500 ease-in-out overflow-hidden
                text-[#eeece7]
                bg-stone-400
                -mx-[20px]
                -mt-[20px]       
            `}>

                <div className={`"my-2 flex flex-col items-center gap-1"`}>
                    {routes.map(({ href, title }) => {
                        return (
                            <Link
                                key={title}
                                href={href}
                                scroll={false}
                            >

                                {pathname === "/information"
                                    ? <div
                                        onClick={() => setToggle(!toggle)}
                                        className={`
                                        ${pathname === href ? 'transition duration-150 ' : 'transition duration-150'}
                                        my-1
                                        lowercase
                                        tracking-[.1em]
                                        text-lg
                                    `}
                                    >
                                        {title}
                                    </div>
                                    : <div
                                        onClick={() => {
                                            setToggle(!toggle)
                                            setModalOn(false)
                                        }}
                                        className={`
                                        ${pathname === href ? 'transition duration-150 ' : 'transition duration-150'}
                                        my-1
                                        lowercase
                                        tracking-[.1em]
                                        text-lg
                                `}
                                    >
                                        {title}
                                    </div>
                                }
                            </Link>
                        )
                    })}
                    <div className='flex gap-4 items-center'>
                        <div
                            onClick={() => setToggle(!toggle)}
                            className={`
                                        my-5
                                        lowercase
                                        tracking-[.1em]
                                        text-lg
                                `}
                        >
                            <Link
                                className=""
                                href="https://www.instagram.com/gijshegeman/"
                                target={"_blank"}
                                rel={"noreferrer"}
                            >
                                <Image
                                    className="opacity-60 hover:opacity-100 motion-safe:transition-all motion-safe:duration-300"
                                    src={insta}
                                    alt="Instagram"
                                    sizes="100vw"

                                    // Make the image display full width
                                    style={{
                                        width: "22px",
                                        height: 'auto',
                                    }}
                                    width={3}
                                    height={2}
                                />

                            </Link>
                        </div>
                        <div
                            onClick={() => setToggle(!toggle)}
                            className={`
                                        my-5
                                        lowercase
                                        tracking-[.1em]
                                        text-lg
                                `}
                        >
                            <Link

                                href="https://patreon.com/user?u=80032445"
                                target={"_blank"}
                                rel={"noreferrer"}
                            >
                                <Image
                                    className="opacity-60 hover:opacity-100 motion-safe:transition-all motion-safe:duration-300"
                                    src={patreon}
                                    alt="Patreon"
                                    sizes="100vw"

                                    // Make the image display full width
                                    style={{
                                        width: "17px",
                                        height: 'auto',
                                    }}
                                    width={3}
                                    height={2}
                                />

                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}