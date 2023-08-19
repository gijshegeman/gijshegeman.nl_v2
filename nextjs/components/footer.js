import { Montserrat, Nova_Mono, Sorts_Mill_Goudy } from 'next/font/google'

const proximaNova = Montserrat({
    subsets: ['latin'],
    weight: ['200']
})
export default function Footer() {
    return (<>
        <div
            className="
                flex-none 
                w-full 
                mt-auto 
                self-end 
                pt-10 pb-5 
                flex flex-col 
                gap-2 text-xs
                
                md:hidden
                "
        >
            <div
                className={proximaNova.className}
            >
                <div className='flex gap-2'>All rights reserved © gijshegmean</div>
                {/* <div className='font-bold tracking-wider'>hippocradevs@gmail.com</div> */}
            </div>

        </div>
    </>)
}