import Image from 'next/image';

export default function Card({
    distance,
    onClick,
    showImage,
}: {
    distance: string;
    onClick: (distance: string) => void;
    showImage: () => void;
}) {
    return (
        <div className='flex w-full flex-col items-center space-y-2'>
            <button
                className='relative flex h-auto w-full items-center justify-between overflow-hidden rounded-[12px] bg-white p-6 text-left shadow-lg'
                onClick={() => onClick(distance)}
            >
                <div className='absolute left-0 right-0 top-0 h-1.5 bg-primary-200'></div>
                <div className='flex w-full items-center justify-between py-2'>
                    <div className='text-[32px] font-bold'>{distance}</div>
                    <Image
                        src='/arrow-icon.svg'
                        alt='Arrow Icon'
                        height={22}
                        width={48}
                    />
                </div>
            </button>
            <button onClick={showImage}>
                <p className='text-xs font-semibold text-slate-700 underline underline-offset-2'>
                    ดูรูปเส้นทาง
                </p>
            </button>
        </div>
    );
}
