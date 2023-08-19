import { EB_Garamond } from 'next/font/google'
import { useState } from 'react'

import Nav from './nav/'
import Footer from './footer'

const garamond = EB_Garamond({
    subsets: ['latin'],
})

export default function Layout({ children, setModalOn, modalOn }) {
    const [toggle, setToggle] = useState(false)
    return (
        <div className={garamond.className} >
            <div
                className='
                    p-5
                    flex flex-col
                    md:w-screen       
                    md:p-0
                    md:fixed md:h-full
                    md:flex md:flex-row md:gap-2
                    
                    '>
                <Nav {...{ setModalOn, modalOn, toggle, setToggle }} />
                <div className='
                    md:pt-10
                    md:px-12
                    md:pb-10
                    md:overflow-y-auto
                    md:grow
                '>
                    {children}{children.setModalOn}
                </div>
                <Footer />
            </div>
        </div >
    )
}
