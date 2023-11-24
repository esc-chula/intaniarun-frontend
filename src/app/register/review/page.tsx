'use client';

import axios from 'axios';
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

    const [existedUsers, setExistedUsers] = useState<
        {
            firstName: string;
            lastName: string;
            email: string;
        }[]
    >([]);

    useEffect(() => {
        const newValidatedRegistrants = [] as boolean[];

        registerBody.forEach((registrant) => {
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

    useEffect(() => {
        const checkUsersExists = async () => {
            axios
                .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/check`, {
                    names: registerBody
                        .filter((registrant) => {
                            if (!registrant.firstName || !registrant.lastName) {
                                return false;
                            }
                            return true;
                        })
                        .map((registrant) => {
                            return {
                                firstName: registrant.firstName,
                                lastName: registrant.lastName,
                            };
                        }),
                })
                .then((res) => {
                    setExistedUsers(res.data);
                })
                .catch((err) => {
                    console.error(err.response.data);
                });
        };

        if (validatedRegistrants.includes(true)) {
            checkUsersExists();
        }
    }, [registerBody, validatedRegistrants]);

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
                        existedUser={existedUsers.find(
                            (user) =>
                                user.firstName === registrant.firstName &&
                                user.lastName === registrant.lastName
                        )}
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
                    disabled={
                        validatedRegistrants.includes(false) ||
                        existedUsers.length > 0
                    }
                >
                    ต่อไป
                </Button>
            </div>
        </>
    );
}
