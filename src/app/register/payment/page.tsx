'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Button from '@/components/button';
import Header from '@/components/header';
import { useRegisterContext } from '@/contexts/register';

export default function Payment() {
    const router = useRouter();
    const [checked, setChecked] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const { registerBody, totalPackagePrice } = useRegisterContext();

    const handleUploadSlip = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const uploadedFile = e.target.files[0];
            setFile(uploadedFile);
            setChecked(true);
        } else {
            setFile(null);
            setChecked(false);
        }
    };

    const handleSumbit = () => {
        console.log('registerBody:', registerBody);
        console.log('file', file);
    };

    return (
        <>
            <h1 className='text-2xl font-bold'>ชำระเงิน</h1>
            <div className='w-full'>
                <div className='mb-4 flex justify-between font-bold'>
                    <p>ยอดชำระเงิน</p>
                    <p>{totalPackagePrice.toFixed(2)}฿</p>
                </div>
                <div className='mb-6 flex flex-col items-start gap-2.5 rounded-lg bg-white p-4 shadow-md'>
                    <div className='flex items-center gap-5'>
                        <Image
                            src='/bank-icon.png'
                            alt='Bangkok Bank'
                            width={32}
                            height={32}
                            className='rounded-lg'
                        />
                        <p className='text-lg'>ธนาคารกรุงเทพ</p>
                    </div>
                    <p className='font-semi-bold text-lg'>939-3-01072-4</p>
                    <div className='w-full border-t pt-3' />
                    <p className='-mt-2 text-left'>
                        สมาคมนิสิตเก่าวิศวกรรมศาสตร์แห่งจุฬาลงกรณ์มหาวิทยาลัยเพื่อปรับปรุงห้องประชุมคณะวิศวจุฬาฯ
                    </p>
                </div>

                <label
                    className='mb-2 flex justify-start font-bold'
                    htmlFor='upload-slip'
                >
                    อัพโหลดสลิป
                </label>
                <div className='relative mb-6 items-center rounded-lg bg-white p-4'>
                    <input
                        type='file'
                        accept='image/*'
                        id='upload-slip'
                        name='upload-slip'
                        onChange={handleUploadSlip}
                        className='absolute inset-0 w-full cursor-pointer opacity-0'
                    />
                    <div className='flex flex-row items-center gap-4'>
                        <Image
                            src='/upload-slip-icon.svg'
                            alt='Upload'
                            width={20}
                            height={20}
                        />
                        <p
                            className={`text-sm ${
                                file ? 'text-black' : 'text-[#B3B3B3]'
                            }`}
                        >
                            {file?.name || 'อัพโหลดสลิป'}
                        </p>
                    </div>
                </div>

                <p className='py-5 text-[12px]'>
                    หากอัพโหลดสลิปเสร็จแล้วจะได้รับอีเมลยืนยันภายใน 15 วัน
                </p>

                <Button
                    type='submit'
                    onClick={handleSumbit}
                    disabled={!checked}
                >
                    ชำระเงิน
                </Button>
            </div>
        </>
    );
}
