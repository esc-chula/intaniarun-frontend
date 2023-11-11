'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Button from '@/components/button';

export default function RegisterPage() {
    const router = useRouter();

    const [isChecked, setIsChecked] = useState(false);

    return (
        <>
            <h1 className='text-2xl font-bold'>นโยบายการใช้ข้อมูลส่วนบุคคล</h1>
            <div className='h-[524px] overflow-hidden rounded-xl bg-white p-4'>
                <h2 className='text-gray-500'>นโยบายการใช้ข้อมูลส่วนบุคคล</h2>
                <div className='h-full w-full overflow-y-auto px-4 pb-8 pt-4 text-left'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Explicabo enim rerum adipisci dolore rem soluta molestiae
                    possimus voluptatem, ullam maiores laborum asperiores
                    officia eius at voluptas eos. Suscipit, quo voluptate.
                </div>
            </div>
            <div className='flex justify-center space-x-2'>
                <div
                    className={`relative h-5 w-5 ${
                        isChecked ? 'bg-[#941214]' : 'bg-white'
                    } rounded border border-gray-300`}
                >
                    <input
                        id='accept'
                        type='checkbox'
                        className='absolute opacity-0'
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                    />
                    {isChecked && (
                        <svg
                            className='pointer-events-none absolute inset-0 m-auto h-4 w-4 fill-current text-white'
                            viewBox='0 0 20 20'
                        >
                            <path
                                d='M16.7,5.3c-0.4-0.4-1-0.4-1.4,0L7.4,13.2L4.7,10.6c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l3.3,3.3c0.2,0.2,0.4,0.3,0.7,0.3
                                            s0.5-0.1,0.7-0.3l8.7-8.7C17.1,6.3,17.1,5.7,16.7,5.3z'
                            />
                        </svg>
                    )}
                </div>
                <label htmlFor='accept' className='text-gray-700'>
                    ฉันยอมรับเงื่อนไขการสมัครของผู้จัดงาน
                </label>
            </div>
            <Button
                onClick={() => {
                    router.push('/register/type');
                }}
                disabled={!isChecked}
            >
                รับทราบและยินยอม
            </Button>
        </>
    );
}
