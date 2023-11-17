'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { FiChevronLeft } from 'react-icons/fi';

import { determineStatus } from '@/utils/status';

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();

    const currentStatus = determineStatus(pathname);

    return (
        <header className='fixed left-0 right-0 top-0 z-50 select-none'>
            <button
                className='absolute left-4 top-4 z-50 p-2 text-2xl'
                onClick={() => {
                    router.back();
                }}
            >
                <FiChevronLeft />
            </button>
            <div className='flex h-full flex-col items-center justify-center rounded-bl-[64px] bg-white pb-5 pt-3 shadow-md'>
                <div className='relative h-[48px] w-full'>
                    <Image
                        src='/intania-run-logo.png'
                        alt='intania-run-logo'
                        fill
                        className='object-contain object-center'
                    />
                </div>
                {currentStatus && (
                    <div className='relative mt-3 h-[40px] w-full'>
                        {currentStatus === 'information' && (
                            <Image
                                src='/status-bar-information.svg'
                                alt='Status bar information'
                                layout='fill'
                                objectFit='contain'
                                objectPosition='center'
                            />
                        )}

                        {currentStatus === 'package' && (
                            <Image
                                src='/status-bar-package.svg'
                                alt='Status bar package'
                                layout='fill'
                                objectFit='contain'
                                objectPosition='center'
                            />
                        )}

                        {currentStatus === 'payment' && (
                            <Image
                                src='/status-bar-payment.svg'
                                alt='Status bar payment'
                                layout='fill'
                                objectFit='contain'
                                objectPosition='center'
                            />
                        )}
                    </div>
                )}
            </div>
        </header>
    );
}
