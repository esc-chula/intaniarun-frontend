'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import Button from '@/components/button';

export default function Error() {
    const router = useRouter();

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
            <p className='pb-20'>
                {
                    'Sorry, we can’t process your request at the moment. Please try again later.'
                }
            </p>
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
