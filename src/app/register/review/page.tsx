import Link from 'next/link';

import Button from '@/components/button';
import Header from '@/components/header';

import ReviewCard from './components/review-card';

export default function ChooseDistancePage() {
    return (
        <>
            <h1 className='text-2xl font-bold'>เลือกระยะทาง</h1>
            <div className='flex w-full flex-col items-center justify-center gap-[35px] text-left'>
                <ReviewCard />
                <button className='h-[64px] w-full rounded-[16px] border-2 border-black bg-white font-bold'>
                    + เพิ่มผู้สมัคร
                </button>
                <Button type='submit'>ต่อไป</Button>
            </div>
        </>
    );
}
