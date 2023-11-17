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
                    title='VIP'
                    price='11,100 บาท'
                    onClick={() => {
                        router.push('/register/info?type=vip');
                    }}
                />
                <InfoCard
                    title='นิสิตวิศวฯ จุฬาฯ'
                    subTitle='คณะวิศวกรรมศาสตร์'
                    price='300 บาท'
                    onClick={() => {
                        signIn('google', {
                            callbackUrl: '/register/info?type=student',
                        });
                    }}
                />
                <InfoCard
                    title='นิสิตเก่าวิศวฯ จุฬาฯ'
                    subTitle='คณะวิศวกรรมศาสตร์'
                    price='700 บาท'
                    onClick={() => {
                        router.push('/register/info?type=alumni');
                    }}
                />
                <InfoCard
                    title='ประชาคมจุฬาฯ'
                    subTitle='นิสิตและนิสิตเก่าต่างคณะ,
                    คณาจารย์ บุคลากร, นักเรียนโรงเรียนสาธิตจุฬาฯ'
                    price='700 บาท'
                    onClick={() => {
                        router.push('/register/info?type=general');
                    }}
                />
                <InfoCard
                    title='ประชาชน'
                    price='700 บาท'
                    onClick={() => {
                        router.push('/register/info?type=general');
                    }}
                />
            </div>
        </div>
    );
}
