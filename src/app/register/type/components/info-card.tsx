import Image from 'next/image';

export default function InfoCard({
    title,
    subTitle,
    onClick,
}: {
    title: string;
    subTitle?: React.ReactNode;
    onClick?: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className='flex h-[143px] w-full items-center justify-between rounded-[16px] border-2 border-red-200 bg-white p-[25px] text-left shadow-xl'
        >
            <div>
                <h1 className='text-[24px] font-bold'>{title}</h1>
                {subTitle && (
                    <div className='text-[16px] text-[#941214]'>{subTitle}</div>
                )}
            </div>
            <div className='flex items-center'>
                <Image
                    src='/arrow-icon.svg'
                    alt='Arrow Icon'
                    height={22}
                    width={48}
                />
            </div>
        </button>
    );
}

//bg-gradient-to-r from-[#F998B9] to-[#941214]
