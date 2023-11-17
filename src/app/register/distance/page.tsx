'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useRegisterContext } from '@/contexts/register';

import Card from './components/card';
import RouteModal from './components/route-modal';

export default function ChooseDistancePage() {
    const { setRegisterBodyState, currentRegistrantIndex } =
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

    const [showDialog, setShowDialog] = useState(false);
    const [image, setImage] = useState('/10km-route.png');

    return (
        <>
            <RouteModal
                showDialog={showDialog}
                setShowDialog={setShowDialog}
                image={image}
            />
            <h1 className='text-2xl font-bold'>เลือกระยะทาง</h1>
            <div className='flex w-full flex-col items-center justify-center gap-10 text-left'>
                <Card
                    onClick={() => {
                        handleClick('10.111');
                        setImage('/10km-route.png');
                    }}
                    distance='10.111 KM'
                    showImage={() => {
                        setShowDialog(true);
                        setImage('/10km-route.png');
                    }}
                />
                <Card
                    onClick={() => {
                        handleClick('3.711');
                    }}
                    distance='3.711 KM'
                    showImage={() => {
                        setShowDialog(true);
                        setImage('/3km-route.png');
                    }}
                />
            </div>
        </>
    );
}
