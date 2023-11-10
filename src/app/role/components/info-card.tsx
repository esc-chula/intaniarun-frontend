import Image from 'next/image';

export default function InfoCard({
    title,
    faculty,
}: {
    title: string;
    faculty?: React.ReactNode;
}) {
    return (
        <div className="w-[365px] h-[143px] flex items-center justify-between rounded-[16px] bg-white border-2 border-red-200 p-[25px] shadow-xl">
            <div>
                <h1 className="text-[24px] font-bold">{title}</h1>
                {faculty && <div className="text-[16px] text-[#941214]">{faculty}</div>}
            </div>
            <div className="flex items-center">
                <Image src="/arrow-icon.svg" alt="Arrow Icon" height={22} width={48}/>
            </div>
        </div>
    );
}

//bg-gradient-to-r from-[#F998B9] to-[#941214]