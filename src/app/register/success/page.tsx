/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import Button from '@/components/button';
import { useRegisterContext } from '@/contexts/register';

export default function Success() {
    const router = useRouter();
    const { resetRegisterBody } = useRegisterContext();

    useEffect(() => {
        resetRegisterBody();
    }, []);

    return (
        <div className='space-y-6 px-2'>
            <div className='relative h-40 w-full'>
                <Image
                    src='/success.svg'
                    alt='Success'
                    fill
                    className='object-contain'
                />
            </div>
            <h1 className='pt-6 text-2xl font-bold'>ชำระเงินสำเร็จ</h1>
            <p className='pb-20'>
                ท่านได้อัปโหลดหลักฐานการชำระเงินเรียบร้อยแล้ว
                ระบบจะส่งอีเมลยืนยันภายใน 15 วันทำการ
            </p>
            <Button
                onClick={() => {
                    router.push('/register');
                }}
            >
                กลับสู่หน้าแรก
            </Button>
        </div>
    );
}
