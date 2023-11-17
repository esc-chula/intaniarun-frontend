'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Button from '@/components/button';
import { useRegisterContext } from '@/contexts/register';

import CheckBox from './components/check-box';
import InfoCard from './components/info-card';

export default function Summary() {
    const router = useRouter();
    const { registerBody, totalPackagePrice } = useRegisterContext();
    const [checked, setChecked] = useState([false, false]);

    const handleCheck = (index: number) => {
        const newChecked = [...checked];
        newChecked[index] = !newChecked[index];
        setChecked(newChecked);
    };

    return (
        <>
            <h1 className='text-2xl font-bold'>ข้อมูลการชำระเงิน</h1>
            <div className='flex w-full flex-col items-center justify-center gap-[35px] text-left'>
                {registerBody.map((registrant, index) => (
                    <InfoCard key={index} registrant={registrant} />
                ))}
            </div>
            <div className='w-full px-4 py-2'>
                <div className='flex flex-col items-center justify-between border-t-2 border-gray-200 pt-2'>
                    <div className='flex w-full items-center justify-between'>
                        <p>ราคาแพ็คเกจทั้งหมด</p>
                        <p>{totalPackagePrice.toFixed(2)}฿</p>
                    </div>
                    {registerBody[0].type === 'STUDENT' && (
                        <div className='flex w-full items-center justify-between'>
                            <p>ส่วนลด</p>
                            <p>300฿</p>
                        </div>
                    )}
                </div>
                <div className='mt-2 flex items-center justify-between'>
                    <span className='text-lg font-bold text-primary-100'>
                        ยอดชำระเงิน
                    </span>
                    <span className='text-xl font-bold text-primary-100'>
                        {totalPackagePrice.toFixed(2)}฿
                    </span>
                </div>
                <div className='my-6 flex flex-col space-y-5'>
                    <CheckBox
                        id='accept-terms'
                        label='ฉันยอมรับเงื่อนไขการสมัครของผู้จัดงาน'
                        checked={checked[0]}
                        onChange={() => handleCheck(0)}
                    />
                    <CheckBox
                        id='accept-data'
                        label='ข้าพเจ้าได้ตรวจสอบข้อมูลความถูกต้องของใบสมัครเรียบร้อยแล้ว
                        (หากกดปุ่มชำระเงินจะไม่สามารถแก้ไขข้อมูลใด ๆ ได้)'
                        checked={checked[1]}
                        onChange={() => handleCheck(1)}
                    />
                </div>
                <Button
                    type='submit'
                    onClick={() => router.push('/register/payment')}
                    disabled={!checked.every(Boolean)}
                >
                    ชำระเงิน
                </Button>
            </div>
        </>
    );
}
