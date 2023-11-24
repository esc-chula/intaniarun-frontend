'use client';

import Image from 'next/image';

export default function Check() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
                            className='grid h-full w-full place-content-center rounded-lg bg-white px-4 py-2 font-bold text-black outline-none'
                            placeholder='กรอกอีเมลที่ใช้ในการลงทะเบียน'
                        />
                    </div>
                    <button
                        type='submit'
                        className='z-10 h-16 w-36 rounded-xl bg-white bg-gradient-to-tl from-primary-300 to-primary-100 p-1 shadow-lg shadow-black/30'
                    >
                        <div className='grid h-full w-full place-content-center rounded-lg bg-white text-lg font-bold text-primary-100'>
                            ตรวจสอบ
                        </div>
                    </button>

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
                                <tr>
                                    <th
                                        scope='row'
                                        className='whitespace-nowrap px-3 py-4 font-medium text-gray-900'
                                    >
                                        ธนดล ศานติสรร
                                    </th>
                                    <td className='px-3 py-4'>กำลังตรวจสอบ</td>
                                    <td className='px-3 py-4'>STUDENT</td>
                                    <td className='px-3 py-4'>10.111 KM</td>
                                    <td className='px-3 py-4'>{'L (42")'}</td>
                                    <td className='px-3 py-4'>24/11/2023</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
