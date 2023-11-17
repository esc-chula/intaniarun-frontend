import '@/styles/globals.css';

import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';

import { SessionProvider } from '@/contexts/session';
import { ibmPlexSansThai } from '@/utils/fonts';

import { authOptions } from './api/auth/[...nextauth]/route';

export const metadata: Metadata = {
    title: 'Intania Run 2024',
    description:
        'เตรียมพบกับงานวิ่งสุดมันส์แห่งปีที่รวมตัวตึงวิศวจุฬาฯ และผองเพื่อนไว้มากที่สุด',
    icons: {
        icon: '/favicon.ico',
    },
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);

    return (
        <html lang='th'>
            <body className={`${ibmPlexSansThai.className} bg-primary-400`}>
                <SessionProvider session={session}>{children}</SessionProvider>
            </body>
        </html>
    );
}
