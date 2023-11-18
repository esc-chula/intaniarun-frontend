'use client';

import imageCompression from 'browser-image-compression';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Button from '@/components/button';
import { useRegisterContext } from '@/contexts/register';

export default function Payment() {
    const router = useRouter();
    const [checked, setChecked] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const { registerBody, totalPackagePrice } = useRegisterContext();
    const [isLoading, setIsLoading] = useState(false);

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

    const compressFile = async (file: File) => {
        if (!file) return;
        if (file.size / 1024 / 1024 < 4) return;
        const options = {
            maxSizeMB: 3,
            maxWidthOrHeight: 1920,
        };
        try {
            const compressedFile = await imageCompression(file, options);
            // console.log('Original size:', file.size / 1024 / 1024, 'MB');
            // console.log(
            //     'Compressed size:',
            //     compressedFile.size / 1024 / 1024,
            //     'MB'
            // );
            // save file to local storage
            const downloadLink = URL.createObjectURL(compressedFile);
            const a = document.createElement('a');
            a.href = downloadLink;
            a.download = file.name;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            return compressedFile;
        } catch (error) {
            console.error('Compression error:', error);
        }
    };

    const handleSumbit = async () => {
        setIsLoading(true);

        console.log('registerBody:', registerBody);
        console.log('file', file);
        // router.push('/register/sucess');

        if (!file) return;
        const uploadResponse = await uploadFileToServer(file);
        if (uploadResponse) await postUserData(uploadResponse.fileName);
    };

    const uploadFileToServer = async (file: File) => {
        const formData = new FormData();
        console.log('file:', file);
        const compressedFile = await compressFile(file);
        if (!compressedFile) return;
        formData.append('file', compressedFile, file.name);
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

    const postUserData = async (fileName: string) => {
        try {
            for (const registrant of registerBody) {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            ...registrant,
                            paymentId: fileName,
                            joinedYear: registrant.joinedYear
                                ? Number(registrant.joinedYear)
                                : undefined,
                        }),
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    console.log('User Data Success:', data);
                    router.push('/register/success');
                    setIsLoading(false);
                } else {
                    console.error('User Data Upload failed');
                    console.log(response);
                    router.push('/register/error');
                    setIsLoading(false);
                }
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
                    <p>
                        {Intl.NumberFormat().format(Number(totalPackagePrice))}฿
                    </p>
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
                    อัปโหลดสลิป
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
                    หากอัปโหลดสลิปเสร็จแล้วจะได้รับอีเมลยืนยันภายใน 15 วันทำการ
                    <br />
                    โปรดเก็บหลังฐานการชำเงินหรือสลิปไว้เป็นหลักฐาน
                </p>

                <Button
                    type='submit'
                    onClick={handleSumbit}
                    // onClick={() => router.push('/register/success')}
                    disabled={!checked || isLoading}
                >
                    {isLoading ? (
                        <div className='flex items-center justify-center space-x-2'>
                            <svg
                                aria-hidden='true'
                                className='h-6 w-6 animate-spin fill-primary-100 text-gray-200 dark:text-gray-600'
                                viewBox='0 0 100 101'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                                    fill='currentFill'
                                />
                            </svg>
                            <span>กำลังโหลด...</span>
                        </div>
                    ) : (
                        'ชำระเงิน'
                    )}
                </Button>
            </div>
        </>
    );
}
