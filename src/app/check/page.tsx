'use client';

import axios from 'axios';
import moment from 'moment';
import Image from 'next/image';
import { useState } from 'react';

import {
    TRegisterPackageType,
    TRegisterRunnerType,
    TRegisterShirtSize,
} from '@/types/register';

import { shirtSizes } from '../register/info/data';

export default function Check() {
    const [users, setUsers] = useState<
        | {
              firstName: string;
              lastName: string;
              email: string;
              type: TRegisterRunnerType;
              selectedPackage: TRegisterPackageType;
              shirtSize: TRegisterShirtSize;
              createdAt: string;
              emailSent: boolean;
          }[]
        | null
    >(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        setError(null);
        setUsers(null);
        e.preventDefault();

        const email = e.currentTarget.email.value;

        if (!email) {
            setLoading(false);
            setError('กรุณากรอกอีเมล');
            return;
        }

        await axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/email/${email}`)
            .then((res) => {
                setUsers(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
                setError('ไม่พบอีเมลนี้ในระบบ');
            });
    };

    return (
        <main className='min-h-apple relative w-full'>
            <div className='absolute z-20 flex h-full w-full justify-center px-4'>
                <form
                    onSubmit={handleSubmit}
                    className='min-h-apple flex w-full max-w-screen-sm flex-col items-center justify-center space-y-4'
                >
                    <div className='pb-4 text-center'>
                        <h1 className='text-3xl font-bold text-primary-100'>
                            ตรวจสอบสถานะ
                        </h1>
                        <p className='text-sm font-medium text-slate-600'>
                            กรอกอีเมลเพื่อตรวจสอบสถานะการลงทะเบียน
                        </p>
                    </div>
                    <div className='z-10 h-16 w-full rounded-xl bg-white bg-gradient-to-tl from-primary-300 to-primary-100 p-1 shadow-lg shadow-black/30'>
                        <input
                            id='email'
                            name='email'
                            type='email'
                            className='grid h-full w-full place-content-center rounded-lg bg-white px-4 py-2 font-bold text-black outline-none'
                            placeholder='กรอกอีเมลที่ใช้ในการลงทะเบียน'
                        />
                    </div>
                    <button
                        type='submit'
                        disabled={loading}
                        className='z-10 h-16 w-36 rounded-xl bg-white bg-gradient-to-tl from-primary-300 to-primary-100 p-1 shadow-lg shadow-black/30 disabled:cursor-not-allowed disabled:from-slate-200 disabled:to-slate-200'
                    >
                        <div className='grid h-full w-full place-content-center rounded-lg bg-white text-lg font-bold text-primary-100'>
                            {loading ? (
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
                            ) : (
                                'ตรวจสอบ'
                            )}
                        </div>
                    </button>

                    {users ? (
                        <div className='h-1/2 w-full overflow-auto rounded-xl bg-white px-4 py-2.5 shadow-xl shadow-black/20'>
                            <table className='w-full whitespace-nowrap text-left text-sm text-gray-500 rtl:text-right'>
                                <thead className='border-b text-xs uppercase text-gray-700'>
                                    <tr>
                                        <th scope='col' className='px-3 py-3'>
                                            ชื่อ
                                        </th>
                                        <th scope='col' className='px-3 py-3'>
                                            สถานะ
                                        </th>
                                        <th scope='col' className='px-3 py-3'>
                                            ประเภท
                                        </th>
                                        <th scope='col' className='px-3 py-3'>
                                            ระยะวิ่ง
                                        </th>
                                        <th scope='col' className='px-3 py-3'>
                                            ไซส์เสื้อ
                                        </th>
                                        <th scope='col' className='px-3 py-3'>
                                            วันที่สมัคร
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user, index) => (
                                        <tr key={index}>
                                            <th
                                                scope='row'
                                                className='whitespace-nowrap px-3 py-4 font-medium text-gray-900'
                                            >
                                                {user.firstName} {user.lastName}
                                            </th>
                                            <td className='px-3 py-4'>
                                                {user.emailSent ? (
                                                    <span className='text-green-500'>
                                                        ส่งใบเสร็จแล้วทางอีเมล
                                                    </span>
                                                ) : (
                                                    <span className='text-yellow-500'>
                                                        รอรับใบเสร็จ
                                                    </span>
                                                )}
                                            </td>
                                            <td className='px-3 py-4'>
                                                {user.type === 'VIP'
                                                    ? 'VIP'
                                                    : user.type === 'ALUMNI'
                                                    ? 'นิสิตเก่าวิศวฯ จุฬาฯ'
                                                    : user.type ===
                                                      'ACQUAINTANCE'
                                                    ? 'ครอบครัวและเพื่อนของนิสิตเก่า'
                                                    : user.type === 'STUDENT'
                                                    ? 'นิสิตปัจจุบัน'
                                                    : user.type === 'CHULA'
                                                    ? 'ประชาคมจุฬาฯ'
                                                    : 'นิสิตปัจจุบัน'}
                                            </td>
                                            <td className='px-3 py-4'>
                                                {user.selectedPackage} KM
                                            </td>
                                            <td className='px-3 py-4'>
                                                {
                                                    shirtSizes.find(
                                                        (e) =>
                                                            e.value ===
                                                            user.shirtSize
                                                    )?.label
                                                }
                                            </td>
                                            <td className='px-3 py-4'>
                                                {moment(user.createdAt).format(
                                                    'DD/MM/YYYY'
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : error ? (
                        <p className='text-sm font-medium text-red-600'>
                            {error}
                        </p>
                    ) : null}
                </form>
            </div>
            <div className='absolute z-10 h-full w-full backdrop-blur-sm'></div>
            <div className='absolute h-full w-full select-none'>
                <Image
                    src='/landing/bg.png'
                    alt='background'
                    quality={0}
                    fill
                    className='object-cover object-center'
                />
            </div>
        </main>
    );
}
