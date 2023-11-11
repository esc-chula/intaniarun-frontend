'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

const SHOW_STATUS_PATH = ['/register/info'];

export default function Header() {
    const pathname = usePathname();

    const showStatusBar = SHOW_STATUS_PATH.includes(pathname);

    return (
        <header className='fixed left-0 right-0 top-0 z-50 select-none bg-primary-400'>
            <div className='flex h-20 flex-col items-center  justify-center rounded-bl-[64px] bg-white py-1'>
                <div className='relative h-full w-full'>
                    <Image
                        src='/intania-run-logo.png'
                        alt='intania-run-logo'
                        fill
                        className='object-contain object-center'
                    />
                </div>
            </div>
            {showStatusBar ? <></> : null}
        </header>
    );
}
