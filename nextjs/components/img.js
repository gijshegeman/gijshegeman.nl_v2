import Image from 'next/image'

export default function IMG({ src, alt, setSelectedImg}) {

    return (<>
        <div
            key={alt}
            className="mb-3"
            style={{ display: 'flex', flexDirection: 'column' }} // auto size
        >
            <Image
                onClick={() => setSelectedImg(src)}
                src={src}
                alt={alt}
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
        </div>
    </>)
}