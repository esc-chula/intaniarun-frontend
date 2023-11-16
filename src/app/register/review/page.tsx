'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from '@/components/button';
import Header from '@/components/header';
import { useRegisterContext } from '@/contexts/register';

import ReviewCard from './components/review-card';

export default function Review() {
    const router = useRouter();
    const { registerBody, addUserToRegisterBody } = useRegisterContext();

    const handleAddRegistrant = () => {
        addUserToRegisterBody();
        router.push('/register/info');
    };

    return (
        <>
            <h1 className='text-2xl font-bold'>ยืนยันข้อมูลผู้สมัคร</h1>
            <div className='flex w-full flex-col items-center justify-center gap-[35px] text-left'>
                {registerBody.map((registrant, index) => (
                    <ReviewCard
                        key={index} // Don't forget to add a unique key for each child
                        name={registrant.firstName + ' ' + registrant.lastName}
                        distance={registrant.selectedPackage}
                        citizenId={registrant.citizenId}
                        phone={registrant.phone}
                        shirtSize={registrant.shirtSize}
                        raceNumber={index + 1} // Assuming you want race numbers to start from 1
                    />
                ))}
                <button
                    className='h-[64px] w-full rounded-[16px] border-2 border-black bg-white font-bold'
                    onClick={handleAddRegistrant}
                >
                    + เพิ่มผู้สมัคร
                </button>
                <Button
                    type='submit'
                    onClick={() => router.push('/register/paymentinfo')}
                >
                    ต่อไป
                </Button>
            </div>
        </>
    );
}
