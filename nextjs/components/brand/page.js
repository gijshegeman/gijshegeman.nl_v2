import Link from "next/link";
import { Sorts_Mill_Goudy } from 'next/font/google'

const sortsMillGoudy = Sorts_Mill_Goudy({
    subsets: ['latin'],
    weight: ['400']
})

export default function Brand({ setToggle, toggle }) {
    return (<>
        <Link href={'/'} className={sortsMillGoudy.className}>
            <div
                onClick={() => setToggle(false)}
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
                "
            >
                Gijs Hegeman
            </div>
        </Link>
    </>)
}