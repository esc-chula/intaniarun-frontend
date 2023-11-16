'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

const SHOW_STATUS_PATH = {
    information: ['/register/info'],
    package: ['/register/distance', '/register/review'],
    payment: ['/register/paymentinfo', '/register/payment'],
};

export default function Header() {
    const pathname = usePathname();

    function determineStatus(pathname: string) {
        for (const status in SHOW_STATUS_PATH) {
            if (
                SHOW_STATUS_PATH[
                    status as keyof typeof SHOW_STATUS_PATH
                ].includes(pathname)
            ) {
                return status;
            }
        }
        return null;
    }

    const currentStatus = determineStatus(pathname);

    return (
        <header className='fixed left-0 right-0 top-0 z-50 select-none bg-primary-400'>
            <div className='flex h-full flex-col items-center  justify-center rounded-bl-[64px] bg-white py-4'>
                <div className='relative h-[56px] w-full'>
                    <Image
                        src='/intania-run-logo.png'
                        alt='intania-run-logo'
                        fill
                        className='object-contain object-center'
                    />
                </div>
                {currentStatus && (
                    <div className='relative h-[40px] w-full'>
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
