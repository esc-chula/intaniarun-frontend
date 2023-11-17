import Tag from './tag';

export default function Card({
    distance,
    price,
    onClick,
}: {
    distance: string;
    price: string;
    onClick: (distance: string) => void;
}) {
    return (
        <button
            className='relative flex h-[143px] w-full items-center justify-between overflow-hidden rounded-[12px] border-t-[8px] border-primary-100 bg-white p-6 text-left shadow-lg'
            onClick={() => onClick(distance)}
        >
            <div className='px-[10px] pt-[10px]'>
                <div className='text-[32px] font-bold'>{distance}</div>
                <p className='text-[14px] text-base font-bold text-primary-100'>
                    ของที่ระลึก
                </p>
                <div className='pb-2 pt-2'>
                    <Tag data='เสื้อวิ่ง' />
                    <Tag data='เหรียญ' />
                    <Tag data='ป้าย BIB' />
                    <Tag data='กระเป๋าเป้' />
                </div>
            </div>
            <div className='absolute right-0 px-6 pb-2 pt-4'>
                {/* <span className='inline-block text-2xl'>฿{price}</span> */}
            </div>
        </button>
    );
}
