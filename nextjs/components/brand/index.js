import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Brand({ setToggle, setModalOn }) {
    const pathname = usePathname()

    return (<>

        {pathname === "/"
            ? <Link
                href='/'
                className="MillGoudy"
            >
                <div
                    onClick={() => setToggle(false)}
                    className="
                        flex-none
                        motion-safe:transition-all motion-safe:duration-150
                        font-thin
                        uppercase
                        tracking-[.16em]

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
            : <Link
                href='/prints'
                className="MillGoudy"
            >
                <div
                    onClick={() => {
                        setToggle(false);
                        if (pathname != "/information") setModalOn(false)
                    }}
                    className="
                    flex-none
                    motion-safe:transition-all motion-safe:duration-150
                    font-thin
                    uppercase
                    tracking-[.16em]

                    text-[1em]
                    text-black

                    lg:text-black/[.65]
                    lg:text-[1.2em]
                    
                    hover:text-black
                "
                >
                    Gijs Hegeman
                </div>
            </Link >
        }


    </>)
}