'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Button from '@/components/button';
import { useRegisterContext } from '@/contexts/register';

import CheckBox from './components/check-box';
import InfoCard from './components/info-card';

export default function Summary() {
    const router = useRouter();
    const [checked, setChecked] = useState([false, false]);
    const { registerBody } = useRegisterContext();

    const numberOfRegistrants = registerBody.length;
    const totalPackagePrice = 700 * numberOfRegistrants;
    let discount = 0;
    if (registerBody[0] && registerBody[0].type === 'student') {
        discount = 400 * numberOfRegistrants;
    }
    const totalPrice = totalPackagePrice - discount;

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
                    <InfoCard
                        key={index}
                        name={registrant.firstName + ' ' + registrant.lastName}
                        distance={registrant.type}
                        phone={registrant.phone}
                        shirtSize={registrant.shirtSize}
                    />
                ))}
                {registerBody.map((registrant, index) => (
                    <InfoCard
                        key={index}
                        name={registrant.firstName + ' ' + registrant.lastName}
                        distance={registrant.type}
                        phone={registrant.phone}
                        shirtSize={registrant.shirtSize}
                    />
                ))}
                {registerBody.map((registrant, index) => (
                    <InfoCard
                        key={index}
                        name={registrant.firstName + ' ' + registrant.lastName}
                        distance={registrant.type}
                        phone={registrant.phone}
                        shirtSize={registrant.shirtSize}
                    />
                ))}
            </div>
            <div className='w-full px-4 py-2'>
                <div className='flex items-center justify-between border-t-2 border-gray-200 pt-2'>
                    <div className='flex flex-col items-start'>
                        <p>ราคาแพ็คเกจทั้งหมด</p>
                        <p>ส่วนลด</p>
                    </div>
                    <div className='text-right'>
                        <p>{totalPackagePrice.toFixed(2)}฿</p>
                        <p>{discount.toFixed(2)}฿</p>
                    </div>
                </div>
                <div className='mt-2 flex items-center justify-between'>
                    <span className='text-lg font-bold text-primary-100'>
                        ยอดชำระเงิน
                    </span>
                    <span className='text-xl font-bold text-primary-100'>
                        {totalPrice.toFixed(2)}฿
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
