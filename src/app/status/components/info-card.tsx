import { Image } from 'next/image';


export default function InfoCard({
    title,
    faculty,
}: {
    title: string;
    faculty?: React.ReactNode;
}) {
    return (
        <main>

            <div className="w-[365px] h-[143px] rounded-[16px] bg-white border-[2px]">
                <h1 className="text-[24px] font-bold">{title}</h1>
                {/* <Image src="../public/arrow-icon.svg" width={100} height={100} />  */}
            </div>

        </main>
    );
}
