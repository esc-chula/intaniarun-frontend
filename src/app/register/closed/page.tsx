import Link from 'next/link';
import React from 'react';
import { FiInstagram } from 'react-icons/fi';

import Header from '@/components/header';

export default function Closed() {
    return (
        <>
            <Header />
            <main className='min-h-apple flex w-full flex-col items-center justify-center'>
                <h1 className='text-3xl font-bold text-primary-100'>
                    ปิดรับสมัครแล้ว
                </h1>
                <p className='mt-1 text-sm font-medium text-slate-700'>
                    ติดตามรายละเอียดเพิ่มเติมได้ที่
                </p>
                <Link
                    href='https://www.instagram.com/chulaintania/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mt-6 flex items-center justify-center space-x-3 rounded-xl bg-white px-4 py-2.5 font-bold text-primary-100 shadow-md'
                >
                    <FiInstagram className='text-xl' />
                    <span>@chulaintania</span>
                </Link>
            </main>
        </>
    );
}
