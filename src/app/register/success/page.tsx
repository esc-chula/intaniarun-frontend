'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Button from '@/components/button';

export default function Success() {
    const router = useRouter();
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
                ท่านได้อัพโหลดหลักฐานการชำระเงินเรียบร้อยแล้ว
                ระบบจะส่งอีเมลล์ยืนยันภายใน 15 วัน
            </p>
            <Button
                onClick={() => {
                    router.push('/');
                }}
            >
                กลับสู่หน้าแรก
            </Button>
        </div>
    );
}
