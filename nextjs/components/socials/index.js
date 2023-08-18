'use client'

import Link from "next/link"
import Image from "next/image"

import patreon from "../../public/icons/patreon.svg"
import insta from "../../public/icons/instagram.svg"

export default function Socials() {

    return (
        <div className="flex gap-2 -mt-3 items-center">


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
                        width: "21px",
                        height: 'auto',
                    }}
                    width={3}
                    height={2}
                />

            </Link>
        </div>)
}