import Header from "../components/header";
import InfoCard from "./components/info-card";
import Link from 'next/link';


export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-[#F998B926] gap-[30px]">
            <Header/>
            <div>
                <h1 className="text-[24px] font-bold items-center flex justify-center">สถานะผู้สมัคร</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
                <InfoCard title="ศิษย์เก่า" />
                <InfoCard title="ศิษย์ปัจจุบัน" />
                <InfoCard title="บุคคลทั่วไป" />
            </div>
        </div>
    );
}
