'use client';

import Image from 'next/image';
import { useState } from 'react';

import Button from '@/components/button';
import Header from '@/components/header';

import PostComponent from './components/post';

const options = [
    { value: 'pickup', label: 'รับด้วยตัวเอง' },
    { value: 'post', label: 'รับทางไปรษณีย์' },
];

export default function DeliverySelectionPage() {
    const [deliveryMethod, setDeliveryMethod] = useState('');

    const handleSelectionChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setDeliveryMethod(event.target.value);
    };

    return (
        <div className='flex h-screen flex-col justify-between'>
            <div>
                <Header />
                <div>
                    <h1 className='my-9 flex items-center justify-center text-2xl font-bold'>
                        เลือกประเภทการจัดส่งของที่ระลึก
                    </h1>
                </div>
                <div className='flex justify-center'>
                    <div className='relative h-[50px] w-[350px] overflow-hidden rounded-md bg-white'>
                        <div className='pointer-events-none absolute inset-y-0 left-0 top-[-3px] flex items-center pl-3'>
                            <Image
                                src='/delivery-icon.svg'
                                alt='Delivery'
                                width={23}
                                height={23}
                            />
                        </div>
                        <select
                            className='block h-full w-full appearance-none rounded-md border bg-white pl-10 pr-10 leading-tight text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                            value={deliveryMethod}
                            onChange={handleSelectionChange}
                        >
                            <option value='' disabled>
                                ประเภทการจัดส่ง
                            </option>
                            {options.map((option) => (
                                <option value={option.value} key={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
                            <Image
                                src='/dropdown-arrow.svg'
                                alt='Dropdown'
                                width={19}
                                height={19}
                            />
                        </div>
                    </div>
                </div>

                {deliveryMethod === 'pickup' && <div>pickup</div>}
                {deliveryMethod === 'post' && (
                    <div>
                        <PostComponent />
                    </div>
                )}
            </div>
            <div className='flex justify-center pb-5'>
                <Button>ต่อไป</Button>
            </div>
        </div>
    );
}
