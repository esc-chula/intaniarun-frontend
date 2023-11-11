'use client';

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import InfoCard from './components/info-card';

export default function StatusPage() {
    const router = useRouter();

    return (
        <div className='w-full space-y-10'>
            <h1 className='text-2xl font-bold'>ประเภทผู้สมัคร</h1>
            <div className='flex w-full flex-col items-center justify-center space-y-10'>
                <InfoCard
                    title='นิสิตปัจจุบัน'
                    subTitle='คณะวิศวกรรมศาสตร์'
                    onClick={() => {
                        signIn('google', {
                            callbackUrl: '/register/info?type=student',
                        });
                    }}
                />
                <InfoCard
                    title='นิสิตเก่า'
                    subTitle='คณะวิศวกรรมศาสตร์'
                    onClick={() => {
                        router.push('/register/info?type=alumni');
                    }}
                />
                <InfoCard
                    title='บุคคลทั่วไป'
                    onClick={() => {
                        router.push('/register/info?type=general');
                    }}
                />
            </div>
        </div>
    );
}
