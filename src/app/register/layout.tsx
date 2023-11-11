import Header from '@/components/header';
import { RegisterProvider } from '@/contexts/register';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <RegisterProvider>
            <Header />
            <main className='min-h-apple flex flex-col items-center bg-primary-400'>
                <div className='flex w-full max-w-screen-sm flex-grow flex-col items-center space-y-7 px-5 pb-8 pt-28 text-center'>
                    {children}
                </div>
            </main>
        </RegisterProvider>
    );
}
