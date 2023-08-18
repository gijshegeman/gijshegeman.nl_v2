'use client'

import Image from "next/image"

export default function Modal({ images, selectedImg, modalOn, setModalOn }) {
    return (
        <div
            onClick={() => setModalOn(!modalOn)}
            className="
                md:flex md:h-screen md:w-full
                md:justify-center
                md:px-10
                md:py-10
            "
        >
            {images.filter(img => img.src == selectedImg).map(({ src, alt }) => {
                return (
                    <Image
                        key={src}
                        src={src}
                        alt={alt}
                        className="object-contain"
                        sizes="100vw"
                        // Make the image display full width
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        width={3}
                        height={2}
                        priority
                    />
                )
            })}
        </div>
    )
}