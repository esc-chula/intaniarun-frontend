import Header from "../components/header";
import Link from 'next/link';


export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-[#F998B926]">
            <Header/>
            <div className="flex flex-col items-center">
                <h1 className="text-[50px] mt-[65px]">INTANIA RUN 2024</h1>
                <h2 className="text-[24px] mt-[20px]">XX NOVEMBER 2023</h2>
                <Link href="/pdpa" passHref>
                    <button className="w-[350px] h-[48px] bg-[#941214] text-white mt-[350px] rounded-[32px] shadow-2xl">ลงทะเบียน</button>
                </Link>
            </div>
        </div>
    );
}
