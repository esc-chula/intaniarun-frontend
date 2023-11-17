'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import Button from '@/components/button';
import { useRegisterContext } from '@/contexts/register';
import { userSchema } from '@/utils/validator';

import ReviewCard from './components/review-card';

export default function Review() {
    const router = useRouter();
    const { registerBody, addUserToRegisterBody } = useRegisterContext();

    const handleAddRegistrant = () => {
        addUserToRegisterBody();
        router.push('/register/type');
    };

    const [validatedRegistrants, setValidatedRegistrants] = useState<boolean[]>(
        []
    );

    useEffect(() => {
        const newValidatedRegistrants = [] as boolean[];

        registerBody.forEach((registrant, idx) => {
            const { error } = userSchema.validate(registrant);

            if (error) {
                newValidatedRegistrants.push(false);
            } else {
                newValidatedRegistrants.push(true);
            }
        });

        if (newValidatedRegistrants.length) {
            setValidatedRegistrants(newValidatedRegistrants);
        }
    }, [registerBody]);

    return (
        <>
            <h1 className='text-2xl font-bold'>ยืนยันข้อมูลผู้สมัคร</h1>
            <div className='flex w-full flex-col items-center justify-center gap-[35px] text-left'>
                {registerBody.map((registrant, index) => (
                    <ReviewCard
                        key={index}
                        index={index}
                        registrant={registrant}
                        validated={validatedRegistrants[index]}
                    />
                ))}
                {registerBody[0].type === 'STUDENT' ||
                registerBody[0].type === 'VIP' ? null : (
                    <>
                        <button
                            className='h-[64px] w-full rounded-[16px] border-2 border-black bg-white font-bold disabled:cursor-not-allowed disabled:opacity-20'
                            onClick={handleAddRegistrant}
                            disabled={registerBody.length === 5}
                        >
                            + เพิ่มผู้สมัคร
                        </button>
                        <p className='-mt-5 text-sm font-medium text-slate-600'>
                            สามารถเพิ่มได้อีก {registerBody.length} / 5 คน
                        </p>
                    </>
                )}

                <Button
                    type='submit'
                    onClick={() => router.push('/register/summary')}
                    disabled={validatedRegistrants.includes(false)}
                >
                    ต่อไป
                </Button>
            </div>
        </>
    );
}
