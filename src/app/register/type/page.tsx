'use client';

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import { useRegisterContext } from '@/contexts/register';

import InfoCard from './components/info-card';

export default function StatusPage() {
    const router = useRouter();
    const { registerBody, currentRegistrantIndex, setRegisterBodyState } =
        useRegisterContext();

    return (
        <div className='w-full space-y-10'>
            <h1 className='text-2xl font-bold'>ประเภทผู้สมัคร</h1>
            <div className='flex w-full flex-col items-center justify-center space-y-10'>
                {registerBody.length <= 1 && (
                    <InfoCard
                        title='VIP'
                        price='11,100 บาท'
                        onClick={() => {
                            setRegisterBodyState(
                                currentRegistrantIndex,
                                'type',
                                'VIP'
                            );
                            router.push('/register/info');
                        }}
                    />
                )}

                <InfoCard
                    title='นิสิตเก่าวิศวฯ จุฬาฯ'
                    subTitle='คณะวิศวกรรมศาสตร์'
                    price='700 บาท'
                    onClick={() => {
                        setRegisterBodyState(
                            currentRegistrantIndex,
                            'type',
                            'ALUMNI'
                        );
                        router.push('/register/info');
                    }}
                />
                <InfoCard
                    title='ประชาคมจุฬาฯ'
                    subTitle='นิสิตและนิสิตเก่าต่างคณะ,
                    คณาจารย์ บุคลากร, นักเรียนโรงเรียนสาธิตจุฬาฯ'
                    price='700 บาท'
                    onClick={() => {
                        setRegisterBodyState(
                            currentRegistrantIndex,
                            'type',
                            'CHULA'
                        );
                        router.push('/register/info');
                    }}
                />
                {/* uncomment on 25 nov */}
                {/* <InfoCard
                    title='ประชาชนทั่วไป'
                    subTitle='บุคคลทั่วไปและครอบครัว'
                    price='700 บาท'
                    onClick={() => {
                        setRegisterBodyState(
                            currentRegistrantIndex,
                            'type',
                            'PUBLIC'
                        );
                        router.push('/register/info');
                    }}
                /> */}
                {registerBody.length > 1 && (
                    <InfoCard
                        title='ครอบครัวและเพื่อน'
                        subTitle='ครอบครัวและเพื่อนของนิสิตเก่า'
                        price='700 บาท'
                        onClick={() => {
                            setRegisterBodyState(
                                currentRegistrantIndex,
                                'type',
                                'PUBLIC'
                            );
                            router.push('/register/info');
                        }}
                    />
                )}

                {registerBody.length <= 1 && (
                    <InfoCard
                        title='นิสิตวิศวฯ จุฬาฯ'
                        subTitle='ใช้อีเมลนิสิตคณะวิศวกรรมศาสตร์'
                        price='300 บาท'
                        onClick={() => {
                            setRegisterBodyState(
                                currentRegistrantIndex,
                                'type',
                                'STUDENT'
                            );
                            signIn('google', {
                                callbackUrl: '/register/info',
                            });
                        }}
                    />
                )}
            </div>
        </div>
    );
}
