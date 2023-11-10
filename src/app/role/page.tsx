import Header from "../components/header";
import InfoCard from "./components/info-card";
import Link from 'next/link';


export default function StatusPage() {
    return (
        <div className="min-h-screen gap-[30px]">
            <Header/>
            <div>
                <h1 className="text-[24px] font-bold items-center flex justify-center my-[35px]">สถานะผู้สมัคร</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-[35px]">
                <InfoCard title="ศิษย์เก่า" faculty="คณะวิศวกรรมศาสตร์"/>
                <InfoCard title="ศิษย์ปัจจุบัน" faculty="คณะวิศวกรรมศาสตร์"/>
                <InfoCard title="บุคคลทั่วไป" />
            </div>
        </div>
    );
}
