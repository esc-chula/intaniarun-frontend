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

    const handleSumbit = async () => {
        console.log('registerBody:', registerBody);
        console.log('file', file);
        // router.push('/register/sucess');
        await postUserData();
        if (file) {
            const uploadResponse = await uploadFileToServer(file);
            console.log(uploadResponse);
        }
    };

    const uploadFileToServer = async (file: any) => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/file/upload`,
                {
                    method: 'POST',

                    body: formData,
                }
            );

            if (response.ok) {
                const data = await response.json();
                console.log('File upload success:', data);
                return data;
            } else {
                console.error('File upload failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const postUserData = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/user`,
                {
                    method: 'POST',
                    body: JSON.stringify(registerBody),
                }
            );

            if (response.ok) {
                const data = await response.json();
                console.log('User Data Success:', data);
            } else {
                console.error('User Data Upload failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
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
                    // onClick={handleSumbit}
                    onClick={() => router.push('/register/success')}
                    disabled={!checked}
                >
                    ชำระเงิน
                </Button>
            </div>
        </>
    );
}
