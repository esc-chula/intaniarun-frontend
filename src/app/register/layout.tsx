'use client';

import moment from 'moment';
import { usePathname } from 'next/navigation';

import Header from '@/components/header';
import RegisterConfig from '@/configs/register';
import { RegisterProvider } from '@/contexts/register';
import { determineStatus } from '@/utils/status';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const currentStatus = determineStatus(pathname);

    const IS_OPEN = moment().isBetween(
        RegisterConfig.OPEN_DATE,
        RegisterConfig.END_DATE,
        'day',
        '[]'
    );

    if (!IS_OPEN && process.env.NODE_ENV === 'production') {
        return null; // TODO: add close page
    }

    return (
        <RegisterProvider>
            <Header />
            <main className='min-h-apple flex flex-col items-center bg-primary-400'>
                <div
                    className={`flex w-full max-w-screen-sm flex-grow flex-col items-center space-y-7 px-5 pb-8 text-center ${
                        currentStatus ? 'pt-40' : 'pt-28'
                    }`}
                >
                    {children}
                </div>
            </main>
        </RegisterProvider>
    );
}
