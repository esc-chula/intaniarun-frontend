import '@/styles/globals.css';

import type { Metadata } from 'next';

import Header from '@/components/header';
import { RegisterProvider } from '@/contexts/register';
import { ibmPlexSansThai } from '@/utils/fonts';

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
        <RegisterProvider>
            <html lang='th'>
                <body className={`${ibmPlexSansThai.className} bg-primary-400`}>
                    {children}
                </body>
            </html>
        </RegisterProvider>
    );
}
