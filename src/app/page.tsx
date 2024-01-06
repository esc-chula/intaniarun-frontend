import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <main className='min-h-apple relative w-full'>
            <div className='absolute z-20 flex h-full w-full justify-center'>
                <div className='flex w-full max-w-screen-sm flex-col items-center'>
                    <div className='relative h-24 w-40'>
                        <Image
                            src='/landing/faculty-logo.png'
                            alt='faculty-logo'
                            fill
                            className='object-contain'
                        />
                    </div>
                    <span className='-mt-2 mb-2 text-xs font-bold'>
                        PRESENT
                    </span>
                    <div className='relative h-28 w-80'>
                        <Image
                            src='/intania-run-logo.png'
                            alt='intaniarun-logo'
                            fill
                            className='object-contain'
                        />
                    </div>
                    <div className='-mb-6 mt-3 text-xl font-bold text-primary-100'>
                        21.01.2024
                    </div>
                    <div className='relative flex h-full w-full flex-col items-center justify-between'>
                        <div className='flex h-full w-full items-center justify-center'>
                            <Link
                                href='/register'
                                className='absolute z-10 mt-20 h-20 w-64 rounded-xl bg-white bg-gradient-to-tl from-primary-300 to-primary-100 p-1 shadow-lg shadow-black/30'
                            >
                                <div className='grid h-full w-full place-content-center rounded-lg bg-white text-xl font-bold text-primary-100'>
                                    ลงทะเบียน
                                </div>
                            </Link>
                            <Link
                                href='/check'
                                className='absolute z-10 mt-56 h-14 w-60 scale-75 rounded-xl bg-white p-1 shadow-md shadow-black/30'
                            >
                                <div className='grid h-full w-full place-content-center rounded-lg bg-white font-bold text-primary-100'>
                                    ตรวจสอบข้อมูลและเลข BIB ประจำตัว
                                </div>
                            </Link>
                            <div className='absolute h-96 w-full'>
                                <Image
                                    src='/landing/run-bg.svg'
                                    alt='intaniarun-logo'
                                    fill
                                    className='object-contain'
                                />
                            </div>
                        </div>
                        <div className='relative h-20 w-full'>
                            <Image
                                src='/landing/footer.png'
                                alt='footer'
                                fill
                                className='object-contain'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute z-10 h-full w-full backdrop-blur-sm'></div>
            <div className='absolute h-full w-full select-none'>
                <Image
                    src='/landing/bg.png'
                    alt='background'
                    quality={0}
                    fill
                    className='object-cover object-center'
                />
            </div>
        </main>
    );
}
