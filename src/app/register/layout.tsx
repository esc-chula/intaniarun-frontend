import { RegisterProvider } from '@/contexts/register';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <RegisterProvider>{children}</RegisterProvider>;
}
