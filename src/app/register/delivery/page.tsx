import Image from 'next/image';

import Button from '@/components/button';

const options = ['รับด้วยตัวเอง', 'ขนส่งสาธรณะ'];

export default function DeliverySelectionPage() {
    return (
        <>
            <h1 className='text-2xl font-bold'>
                เลือกประเภทการจัดส่งของที่ระลึก
            </h1>

            <div className='flex w-full justify-center'>
                <div className='relative h-[50px] w-full overflow-hidden rounded-md bg-white'>
                    <div className='pointer-events-none absolute inset-y-0 left-0 top-[-3px] flex items-center pl-3'>
                        <Image
                            src='/delivery-icon.svg'
                            alt='Delivery'
                            width={23}
                            height={23}
                        />
                    </div>
                    <select className='block h-full w-full appearance-none rounded-md border bg-white pl-10 pr-10 leading-tight text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500'>
                        <option value='' disabled selected>
                            ประเภทการจัดส่ง
                        </option>
                        {options.map((option, index) => (
                            <option value={option} key={index}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
                        <Image
                            src='/dropdown-arrow.svg'
                            alt='Dropdown'
                            width={19}
                            height={19}
                        />
                    </div>
                </div>
            </div>
            <Button>ต่อไป</Button>
        </>
    );
}
