import Image from 'next/image';

export default function Home() {
    return (
        <main className='min-h-apple relative w-full'>
            <div className='absolute z-20 grid h-full w-full place-content-center'>
                <Image
                    src='/landing/1.png'
                    fill
                    alt='banner'
                    className='object-contain'
                />
            </div>
            <div className='absolute z-10 h-full w-full backdrop-blur-lg'></div>
            <Image
                src='/landing/1.png'
                fill
                alt='background_image'
                className='absolute z-0 h-full w-full'
            />
        </main>
    );
}
