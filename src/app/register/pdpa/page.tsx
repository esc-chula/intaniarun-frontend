'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Button from '@/components/button';

export default function Pdpa() {
    const router = useRouter();

    const [isChecked, setIsChecked] = useState(false);

    return (
        <>
            <h1 className='text-2xl font-bold'>นโยบายการใช้ข้อมูลส่วนบุคคล</h1>
            <div className='h-[524px] overflow-hidden rounded-xl bg-white p-4'>
                <h2 className='text-gray-500'>นโยบายการใช้ข้อมูลส่วนบุคคล</h2>
                <div className='h-full w-full overflow-y-auto px-4 pb-8 pt-4 text-left text-sm'>
                    ข้าพเจ้าขอยอมรับข้อตกลง เงื่อนไข และกติกา
                    การลงทะเบียนสมัครกิจกรรม CHULA INTANIA RUN 2024
                    ตามนโยบายการใช้ข้อมูลส่วนบุคคล ดังต่อไปนี้
                    <br />
                    <br />
                    <ol className='list-outside list-decimal space-y-2'>
                        <li>
                            สมาคมนิสิตเก่าวิศวกรรมศาสตร์แห่งจุฬาลงกรณ์มหาวิทยาลัยร่วมกับคณะวิศวกรรมศาสตร์
                            จุฬาลงกรณ์มหาวิทยาลัย เป็นผู้จัดกิจกรรม CHULA
                            INTANIA RUN 2024
                        </li>
                        <li>
                            หากท่านต้องการทราบข้อมูลหรือมีข้อสงสัยใด ๆ
                            เกี่ยวกับกิจกรรมโปรดติดต่อผู้จัดกิจกรรมโดยตรง
                        </li>
                        <li>
                            การเก็บรวบรวมข้อมูลส่วนบุคคลมีวัตถุประสงค์เพื่อใช้ยืนยันตัวตนในกิจกรรม
                            และประมวลผลเพื่อประโยชน์ต่อการดำเนินกิจกรรมให้สำเร็จลุล่วงตามวัตถุประสงค์
                        </li>
                        <li>
                            การเก็บข้อมูลใด ๆ
                            เป็นไปเพื่อให้สิทธิการเข้าร่วมกิจกรรมของท่านสมบูรณ์
                            ถือเป็นหน้าที่โดยสมัครใจของท่านที่ยินยอมให้ผู้จัดเก็บรักษาและนำไปใช้จนบรรลุวัตถุประสงค์ของกิจกรรม
                        </li>
                        <li>
                            ผู้จัดกิจกรรมจะเก็บข้อมูลส่วนบุคคลของท่านไว้ตามระยะเวลาอันสมควรตามดุลยพินิจของผู้จัดกิจกรรม
                        </li>
                        <li>
                            ข้อมูลส่วนบุคคลของท่านอาจถูกเปิดเผยต่อหน่วยงานของรัฐที่มีอำนาจกำกับดูแล
                            หรืออาจถูกเปิดเผยตามคำสั่งศาล
                        </li>
                        <li>
                            ภาพนิ่ง ภายถ่าย ภาพเคลื่อนไหว และเสียง
                            ตลอดจนเนื้อหาใด ๆ ล้วนเป็นลิขสิทธิ์ของผู้จัดกิจกรรม
                            และอาจถูกนำไปเผยแพร่ตามสื่อต่าง ๆ เช่น หนังสือพิมพ์
                            อินเตอร์เน็ต โทรทัศน์ นิตยสาร เป็นต้น
                            ผู้ร่วมกิจกรรมสามารถนำเนื้อหาใด ๆ
                            ข้างต้นของตนเองไปใช้ได้โดยไม่ต้องขออนุญาต
                            เว้นแต่เป็นการดำเนินการในทางพาณิชย์
                            ผู้จัดกิจกรรมขอสงวนสิทธิไม่อนุญาตให้นำเนื้อหาข้างต้นไปเผยแพร่โดยพลการ
                        </li>
                    </ol>
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
