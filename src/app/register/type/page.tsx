'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';

import { useRegisterContext } from '@/contexts/register';

import InfoCard from './components/info-card';

export default function StatusPage() {
    const router = useRouter();
    const { registerBody, currentRegistrantIndex, setRegisterBodyState } =
        useRegisterContext();
    const searchParams = useSearchParams();
    const type = searchParams.get('type');

    if (type === 'vip') {
        return (
            <div className='w-full space-y-10'>
                <div className='space-y-2'>
                    <h1 className='text-2xl font-bold'>ประเภทผู้สมัคร</h1>
                    {/* <p className='text-sm text-slate-600'>
                        เปิดให้ประชาชนทั่วไปสมัครในวันที่ 25 - 27 พฤศจิกายน 2566
                    </p> */}
                </div>
                <div className='flex w-full flex-col items-center justify-center space-y-10'>
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
                </div>
            </div>
        );
    }

    return (
        <div className='w-full space-y-10'>
            <div className='space-y-2'>
                <h1 className='text-2xl font-bold'>ประเภทผู้สมัคร</h1>
                {/* <p className='text-sm text-slate-600'>
                        เปิดให้ประชาชนทั่วไปสมัครในวันที่ 25 - 27 พฤศจิกายน 2566
                    </p> */}
            </div>
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
                {registerBody[0].type === 'ALUMNI' &&
                registerBody.length > 1 ? (
                    <InfoCard
                        title='ครอบครัวและเพื่อน'
                        subTitle={
                            <>
                                ครอบครัวและเพื่อนของ
                                <span className='underline'>
                                    นิสิตเก่าวิศวฯ จุฬาฯ
                                </span>
                            </>
                        }
                        price='700 บาท'
                        onClick={() => {
                            setRegisterBodyState(
                                currentRegistrantIndex,
                                'type',
                                'ACQUAINTANCE'
                            );
                            router.push('/register/info');
                        }}
                    />
                ) : null}
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
                <InfoCard
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
                />
                {registerBody.length <= 1 ? (
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
                ) : null}
            </div>
        </div>
    );
}
