'use client';

import Button from '@/components/button';
import Header from '@/components/header';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useRegisterContext } from '@/contexts/register';
import Image from 'next/image';

export default function PaymentInfo() {

    const router = useRouter();
    const [checked, setChecked] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const { registerBody } = useRegisterContext();


    const totalPrice = 'XXX.XX฿';

    const handleUploadSlip = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const uploadedFile = e.target.files[0];
            setFile(uploadedFile);
            setChecked(true);
        } else {
            setFile(null);
            setChecked(false);
        }
    }

    const handleSumbit = () => {
        console.log('registerBody:', registerBody);
        console.log('file' , file)
        // router.push('/register/sucess');
    }

    return (
        <>
            <div className='w-full px-6 py-4'>
                <h1 className='text-2xl font-bold mb-6'>ชำระเงิน</h1>
                
                <div className='flex justify-between mb-4 font-bold py-5'>
                    <p>ยอดชำระเงิน</p>
                    <p>{totalPrice}</p>
                </div>
                <div className='bg-white shadow-md rounded-lg p-4 mb-6 flex flex-col items-start gap-2.5'>
                    <div className='flex gap-5 items-center'>
                        <Image src="/kbank-icon.png" alt="K+" width={32} height={32}  />
                        <p className='text-lg'>ธนาคารกสิกรไทย</p>
                    </div>
                    <p className='text-lg font-semi-bold'>1234567890</p>
                    <div className='border-t pt-3 w-full' />
                    <p>ชื่อบัญชี</p>
                </div>
                
                <label className="mb-2 flex justify-start font-bold" htmlFor="upload-slip">
                    อัพโหลดสลิป
                </label>
                <div className="bg-white rounded-lg p-4 mb-6 items-center relative">
                    <input
                        type="file"
                        id="upload-slip"
                        name="upload-slip"
                        onChange={handleUploadSlip}
                        className="absolute inset-0 w-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-row items-center gap-4">
                        <Image src="/upload-slip-icon.svg" alt="Upload" width={20} height={20} />
                        <p className={`text-sm ${file ? 'text-black' : 'text-[#B3B3B3]'}`}>
                            {file?.name || 'อัพโหลดสลิป'}
                        </p>
                    </div>
                </div>

                <p className='text-[12px] py-5'>หากอัพโหลดสลิปเสร็จแล้วจะได้รับอีเมลยืนยันภายใน 7 วัน</p>
                
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
