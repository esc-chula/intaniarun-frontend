'use client';

import moment from 'moment';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { HiPencilAlt, HiTrash } from 'react-icons/hi';

import Dialog from '@/components/dialog';
import { useRegisterContext } from '@/contexts/register';
import { TRegisterBodyState } from '@/types/register';

import { shirtSizes } from '../../info/data';

export default function ReviewCard({
    index,
    registrant,
    validated,
    existedUser,
}: {
    index: number;
    registrant: TRegisterBodyState;
    validated: boolean;
    existedUser:
        | {
              firstName: string;
              lastName: string;
              email: string;
          }
        | undefined;
}) {
    const router = useRouter();
    const {
        registerBody,
        setCurrentRegistrantIndex,
        removeUserFromRegisterBody,
    } = useRegisterContext();

    const [showDialog, setShowDialog] = useState(false);

    return (
        <>
            <Dialog
                action={() => {
                    if (registerBody.length === 1) {
                        router.push('/register/type');
                    }
                    removeUserFromRegisterBody(index);
                }}
                showDialog={showDialog}
                setShowDialog={setShowDialog}
            />
            <div className='relative flex h-56 w-full flex-col justify-between overflow-hidden rounded-[12px] bg-white p-6 shadow-lg'>
                <div className='flex-1'>
                    <div className='mb-2 text-xl font-bold text-[#941214]'>
                        {registrant.firstName + ' ' + registrant.lastName}
                    </div>
                    <div className='flex flex-row gap-5'>
                        <div className='text-base text-gray-700'>
                            <p>ประเภทผู้สมัคร: </p>
                            <p>วัน เดือน ปี เกิด: </p>
                            <p>เบอร์โทรศัพท์: </p>
                            <p>ไซส์เสื้อ: </p>
                        </div>
                        <div>
                            <p>
                                {registrant.type === 'VIP'
                                    ? 'VIP'
                                    : registrant.type === 'ALUMNI'
                                    ? 'นิสิตเก่าวิศวฯ จุฬาฯ'
                                    : registrant.type === 'ACQUAINTANCE'
                                    ? 'ครอบครัวและเพื่อนของนิสิตเก่า'
                                    : registrant.type === 'STUDENT'
                                    ? 'นิสิตปัจจุบัน'
                                    : registrant.type === 'CHULA'
                                    ? 'ประชาคมจุฬาฯ'
                                    : 'นิสิตปัจจุบัน'}
                            </p>
                            <p>
                                {moment(registrant.birthDate).format(
                                    'DD MMMM YYYY'
                                )}
                            </p>
                            <p>{registrant.phone}</p>
                            <p>
                                {
                                    shirtSizes.find(
                                        (e) => e.value === registrant.shirtSize
                                    )?.label
                                }
                            </p>
                        </div>
                    </div>
                </div>
                <div className='absolute right-3 top-3 flex items-center gap-0.5 text-xl'>
                    <button
                        onClick={() => {
                            setCurrentRegistrantIndex(index);
                            router.push('/register/info');
                        }}
                        className='p-2'
                    >
                        <HiPencilAlt />
                    </button>
                    <button
                        onClick={() => {
                            setShowDialog(true);
                        }}
                        className='p-2'
                    >
                        <HiTrash />
                    </button>
                </div>
                <div className='absolute bottom-5 left-5 right-5 flex items-end justify-between'>
                    {!validated ? (
                        <div className='text-lg font-semibold text-red-500 underline'>
                            ยังกรอกข้อมูลไม่สำเร็จ
                        </div>
                    ) : null}
                    {existedUser ? (
                        <div className='text-lg font-semibold text-red-500 underline'>
                            ผู้สมัครนี้มีอยู่ในระบบแล้ว
                        </div>
                    ) : null}

                    <div className='text-4xl font-bold text-[#941214]'>
                        {registrant.selectedPackage} KM
                    </div>
                </div>
            </div>
        </>
    );
}
