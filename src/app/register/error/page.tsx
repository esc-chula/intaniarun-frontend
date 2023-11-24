'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import Button from '@/components/button';
import { useRegisterContext } from '@/contexts/register';

export default function Error() {
    const router = useRouter();
    const { error } = useRegisterContext();

    return (
        <div className='space-y-6 px-2'>
            <div className='relative h-40 w-full'>
                <Image
                    src='/error.svg'
                    alt='Success'
                    fill
                    className='object-contain'
                />
            </div>
            <h1 className='pt-6 text-2xl font-bold'>Something went wrong!</h1>
            <p>
                {
                    'Sorry, we can’t process your request at the moment. Please try again later.'
                }
            </p>
            <p className='pb-20 text-xs'>{error}</p>
            <Button
                onClick={() => {
                    router.push('/register/review');
                }}
            >
                ย้อนกลับ
            </Button>
        </div>
    );
}
