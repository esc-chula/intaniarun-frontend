'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useRegisterContext } from '@/contexts/register';

import Card from './components/card';

export default function ChooseDistancePage() {
    const { registerBody, setRegisterBodyState, currentRegistrantIndex } =
        useRegisterContext();
    const router = useRouter();

    const handleClick = (distance: string) => {
        setRegisterBodyState(
            currentRegistrantIndex,
            'selectedPackage',
            distance
        );
        router.push('/register/review');
    };

    return (
        <>
            <h1 className='text-2xl font-bold'>เลือกระยะทาง</h1>
            <div className='flex w-full flex-col items-center justify-center gap-[35px] text-left'>
                <Card
                    onClick={() => handleClick('3.711')}
                    distance='3.711 KM'
                    price='555'
                />
                <Card
                    onClick={() => handleClick('10.111')}
                    distance='10.111 KM'
                    price='777'
                />
            </div>
        </>
    );
}
