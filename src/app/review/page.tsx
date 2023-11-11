import Header from "../components/header";
import Link from 'next/link';
import ReviewCard from "./components/review-card";
import SubmitButton from "../components/submit-button";

export default function ChooseDistancePage() {
    return (
        <div className={`min-h-screen bg-[#F998B926]`}>
            <Header/>
            <div>
                <h1 className="text-[24px] font-bold items-center flex justify-center my-[35px]">เลือกระยะทาง</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-[35px]">
                <ReviewCard/>
                <button className="bg-white w-[375px] h-[64px] border-2 border-black rounded-[16px] font-bold">
                    + เพิ่มผู้สมัคร
                </button>
                <SubmitButton/>
            </div>
        </div>
    );
}
