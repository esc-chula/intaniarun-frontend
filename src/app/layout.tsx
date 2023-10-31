import '@/styles/globals.css';

import type { Metadata } from 'next';
import { IBM_Plex_Sans_Thai } from 'next/font/google';

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
        <html lang='en'>
            <body className={ibmPlexSansThai.className}>{children}</body>
        </html>
    );
}
