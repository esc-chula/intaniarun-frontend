'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Button from '@/components/button';
import Header from '@/components/header';
import { useRegisterContext } from '@/contexts/register';

export default function PaymentInfo() {
    const router = useRouter();
    const [checked, setChecked] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const { registerBody } = useRegisterContext();

    const numberOfRegistrants = registerBody.length;
    const totalPackagePrice = 700 * numberOfRegistrants;
    let discount = 0;
    if (registerBody[0] && registerBody[0].type === 'student') {
        discount = 400 * numberOfRegistrants;
    }
    const totalPrice = totalPackagePrice - discount;

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
        // router.push('/register/sucess');
    };

    return (
        <>
            <div className='w-full px-6 py-4'>
                <h1 className='mb-6 text-2xl font-bold'>ชำระเงิน</h1>

                <div className='mb-4 flex justify-between py-5 font-bold'>
                    <p>ยอดชำระเงิน</p>
                    <p>{totalPrice.toFixed(2)}฿</p>
                </div>
                <div className='mb-6 flex flex-col items-start gap-2.5 rounded-lg bg-white p-4 shadow-md'>
                    <div className='flex items-center gap-5'>
                        <Image
                            src='/kbank-icon.png'
                            alt='K+'
                            width={32}
                            height={32}
                        />
                        <p className='text-lg'>ธนาคารกสิกรไทย</p>
                    </div>
                    <p className='font-semi-bold text-lg'>1234567890</p>
                    <div className='w-full border-t pt-3' />
                    <p>ชื่อบัญชี</p>
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
                    หากอัพโหลดสลิปเสร็จแล้วจะได้รับอีเมลยืนยันภายใน 7 วัน
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
