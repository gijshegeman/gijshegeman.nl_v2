import Image from 'next/image'

export default function IMG({ src, alt }) {

    return (<>
        <div
            className="mb-3"
            style={{ display: 'flex', flexDirection: 'column' }} // auto size
        >
            <Image
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