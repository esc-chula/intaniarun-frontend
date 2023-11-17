import Image from 'next/image';

export default function InfoCard({
    title,
    subTitle,
    onClick,
    price,
}: {
    title: string;
    subTitle?: React.ReactNode;
    onClick?: () => void;
    price?: string;
}) {
    return (
        <button
            onClick={onClick}
            className='relative flex h-40 w-full items-center justify-between rounded-[16px] border-2 border-red-200 bg-white p-[25px] text-left shadow-xl'
        >
            <div className='w-3/4'>
                <h1 className='text-[24px] font-bold'>{title}</h1>
                {subTitle && (
                    <p className='text-xs text-[#941214] sm:text-base'>
                        {subTitle}
                    </p>
                )}
                {price && (
                    <div className='pt-2 text-[16px] font-semibold text-[#941214]'>
                        {price}
                    </div>
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
