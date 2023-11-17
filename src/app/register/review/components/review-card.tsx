'use client';

import { useRouter } from 'next/navigation';
import { HiPencilAlt, HiTrash } from 'react-icons/hi';

import { useRegisterContext } from '@/contexts/register';
import { TRegisterBodyState } from '@/types/register';

export default function ReviewCard({
    index,
    registrant,
}: {
    index: number;
    registrant: TRegisterBodyState;
}) {
    const router = useRouter();
    const { setCurrentRegistrantIndex, removeUserFromRegisterBody } =
        useRegisterContext();

    return (
        <div className='relative flex h-[200px] w-full flex-col justify-between overflow-hidden rounded-[12px] bg-white p-6 shadow-lg'>
            <div className='flex-1'>
                <div className='mb-2 text-xl font-bold text-[#941214]'>
                    {registrant.firstName + ' ' + registrant.lastName}
                </div>
                <div className='flex flex-row gap-5'>
                    <div className='text-base text-gray-700'>
                        <p>โทรศัพท์: </p>
                        <p>ไซส์เสื้อ: </p>
                    </div>
                    <div>
                        <p>{registrant.phone}</p>
                        <p>{registrant.shirtSize}</p>
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
                        if (index === 0) {
                            router.push('/register/type');
                        }
                        removeUserFromRegisterBody(index);
                    }}
                    className='p-2'
                >
                    <HiTrash />
                </button>
            </div>
            <div className='absolute bottom-5 right-5 flex items-center justify-between opacity-50'>
                <div className='text-4xl font-bold text-[#941214]'>
                    {registrant.selectedPackage} KM
                </div>
            </div>
        </div>
    );
}
