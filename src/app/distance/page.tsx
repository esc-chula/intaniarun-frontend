import Header from "../components/header";
import Link from 'next/link';
import Card from "./components/card";

export default function ChooseDistancePage() {
    return (
        <div className={`min-h-screen bg-[#F998B926]`}>
            <Header/>
            <div>
                <h1 className="text-[24px] font-bold items-center flex justify-center my-[35px]">เลือกระยะทาง</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-[35px]">
                <Card distance="5 KM" price="555"/>
                <Card distance="10 KM" price="777"/>
            </div>
        </div>
    );
}
