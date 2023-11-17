import Image from 'next/image';

export default function RouteModal({
    showDialog,
    setShowDialog,
    image,
}: {
    showDialog: boolean;
    setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
    image: string;
}) {
    if (!showDialog) return null;
    return (
        <div className='fixed bottom-0 left-0 right-0 top-0 z-[100] flex items-center justify-center'>
            <div className='absolute z-10 flex aspect-square w-10/12 flex-col overflow-hidden md:h-3/4 md:w-auto'>
                <Image
                    src={image}
                    alt='route'
                    fill
                    className='object-contain'
                />
            </div>
            <div
                onClick={() => setShowDialog(false)}
                className='absolute bottom-0 left-0 right-0 top-0 bg-black/10 backdrop-blur-sm'
            ></div>
        </div>
    );
}
