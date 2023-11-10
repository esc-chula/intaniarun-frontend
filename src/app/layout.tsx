import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { IBM_Plex_Sans_Thai } from 'next/font/google';
import Header from './components/header';
import { RegisterProvider } from '@/contexts/register';

// const inter = Inter({ subsets: ['latin']})

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
    subsets: ['latin', 'thai'],
    weight: ['100', '200', '300', '400', '500', '600', '700'],
});
export const metadata: Metadata = {
    title: 'Intania Run 2023',
    description: 'วิ่ง วิ่ง อยู่อย่างนี้ วิ่ง วิ่ง อยู่กับที่ ไม่ไปไหน',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='th'>
            <body className={`${ibmPlexSansThai.className} bg-[#F998B926]`}>{children}</body>
        </html>
    );
}
