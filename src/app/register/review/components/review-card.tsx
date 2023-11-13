export default function ReviewCard({
    distance = ' 10 KM',
    name = 'นายใจดี ดีใจ',
    accountNumber = '0 1234 56789 10 1',
    phoneNumber = '011-111-1111',
    size = 'XL',
    raceNumber = '1',
}: {
    distance?: string;
    name?: string;
    accountNumber?: string;
    phoneNumber?: string;
    size?: string;
    raceNumber?: string;
}) {
    return (
        <div className='relative flex h-[200px] w-full flex-col justify-between overflow-hidden rounded-[12px] bg-white p-6 shadow-lg'>
            {/* <div className="bg-gradient-to-r from-[#941214] to-[#dd3333] text-white text-sm font-bold py-1 px-4 w-max rounded-full absolute top-[-10px] z-[10]">
                    ผู้สมัครคนที่ {raceNumber}
                </div> */}
            <div className='flex-1'>
                <div className='mb-2 text-xl font-bold text-[#941214]'>
                    {name}
                </div>
                <div className='flex flex-row gap-5'>
                    <div className='text-base text-gray-700'>
                        <p>เลขบัตรประชาชน: </p>
                        <p>โทรศัพท์: </p>
                        <p>ไซส์เสื้อ: </p>
                    </div>
                    <div>
                        <p>{accountNumber}</p>
                        <p>{phoneNumber}</p>
                        <p>{size}</p>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-5 right-5 flex items-center justify-between opacity-50'>
                <div className='text-4xl font-bold text-[#941214]'>
                    {distance}
                </div>
            </div>
        </div>
    );
}
