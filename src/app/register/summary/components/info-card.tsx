import { prices } from '@/constants/price';
import { TRegisterBodyState } from '@/types/register';

export default function InfoCard({
    registrant,
}: {
    registrant: TRegisterBodyState;
}) {
    return (
        <div className='relative w-full overflow-hidden rounded-[12px] bg-white shadow-lg'>
            <div className='flex h-9 items-center justify-between bg-black px-4 text-white'>
                <h3 className='text-right font-bold'>
                    {registrant.firstName + ' ' + registrant.lastName}
                </h3>
                <p className='font-medium'>{registrant.selectedPackage} KM</p>
            </div>
            <div className='px-6 py-4'>
                <div className='grid grid-cols-2 gap-4 pb-4'>
                    <div className='text-sm font-medium text-gray-600'>
                        <p>โทรศัพท์:</p>
                        <p>ไซส์เสื้อ:</p>
                    </div>
                    <div className='text-sm text-gray-800'>
                        <p>{registrant.phone}</p>
                        <p>{registrant.shirtSize}</p>
                    </div>
                </div>
                <hr className='pb-2' />
                <div className='text-end text-sm font-semibold text-slate-700'>
                    ราคา {prices[registrant.type as keyof typeof prices]}฿
                </div>
            </div>
        </div>
    );
}
