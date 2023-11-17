export default function InfoCard({
    distance = '10 KM',
    name = 'นายใจดี ดีใจ',
    phone = '011-111-1111',
    shirtSize = 'XL',
}: {
    distance?: string;
    name?: string;
    phone?: string;
    shirtSize?: string;
}) {
    return (
        <div className='relative w-full overflow-hidden rounded-[12px] bg-white shadow-lg'>
            <div className='flex h-[32px] items-center justify-end bg-black pr-4'>
                <h3 className='text-right text-[16px] font-bold text-white'>
                    {name}
                </h3>
            </div>
            <div className='p-6'>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='text-sm font-medium text-gray-600'>
                        <p>โทรศัพท์:</p>
                        <p>ไซส์เสื้อ:</p>
                    </div>
                    <div className='text-sm text-gray-800'>
                        <p>{phone}</p>
                        <p>{shirtSize}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
