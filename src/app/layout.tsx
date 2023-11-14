import '@/styles/globals.css';

import type { Metadata } from 'next';

import { ibmPlexSansThai } from '@/utils/fonts';

export const metadata: Metadata = {
    title: 'Intania Run 2024',
    description:
        'เตรียมพบกับงานวิ่งสุดมันส์แห่งปีที่รวมตัวตึงวิศวจุฬาฯ และผองเพื่อนไว้มากที่สุด',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='th'>
            <body className={`${ibmPlexSansThai.className} bg-primary-400`}>
                {children}
            </body>
        </html>
    );
}
