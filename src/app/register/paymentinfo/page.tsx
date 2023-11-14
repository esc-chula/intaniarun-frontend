'use client';

import Link from 'next/link';

import Button from '@/components/button';
import Header from '@/components/header';

import InfoCard from './components/info-card';
import CheckBox from './components/check-box';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function PaymentInfo() {

    const router = useRouter();
    const [checked, setChecked] = useState([false, false]);

    const totalPrice = 'XXX.XX฿';

    const handleCheck = (index: number) => {
        const newChecked = [...checked];
        newChecked[index] = !newChecked[index];
        setChecked(newChecked);
     };

    return (
        <>
            <h1 className='text-2xl font-bold'>ข้อมูลการชำระเงิน</h1>
            <div className='flex w-full flex-col items-center justify-center gap-[35px] text-left'>
                <InfoCard />
            </div>
            <div className="sticky bottom-0 left-0 w-full px-4 py-2">
                <div className="flex justify-between items-center border-t-2 border-gray-200 pt-2">
                    <div className="flex flex-col jusity-start">
                        <p>ราคาแพ็คเกจทั้งหมด</p>
                        <p>ส่วนลด</p>
                    </div>
                    <div className="text-right">
                        <p>XXX.XX฿</p>
                        <p>XXX.XX฿</p>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-lg font-bold text-[#941214]">ยอดชำระเงิน</span>
                    <span className="text-xl font-bold text-[#941214]">{totalPrice}</span>
                </div>
                <div className='flex flex-col space-y-4'>
                    <CheckBox
                        label='ฉันยอมรับเงื่อนไขการสมัครของผู้จัดงาน'
                        checked={checked[0]}
                        onChange={() => handleCheck(0)}
                    />
                    <CheckBox
                        label='ข้าพเจ้าได้ตรวจสอบข้อมูลความถูกต้องของใบสมัครเรียบร้อยแล้ว
                        (หากกดปุ่มชำระเงินจะไม่สามารถแก้ไขข้อมูลใด ๆ ได้)'
                        checked={checked[1]}
                        onChange={() => handleCheck(1)}
                    />
                </div>
                <button
                    className="mt-4 w-full bg-[#941214] text-white py-2 rounded-lg shadow-md disabled:bg-gray-400"
                    onClick={() => router.push('/register/type')}
                    disabled={!checked.every(Boolean)}
                >
                    ชำระเงิน
                </button>
            </div>
        </>
    );
}
