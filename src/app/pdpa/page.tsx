import Header from "../components/header";
import Link from 'next/link';


export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-[#F998B926]">
            <Header/>
            <div className="flex flex-col items-center">
                <h1 className="text-[50px] mt-[10px] text-[25px] font-bold">นโยบายการใช้ข้อมูลส่วนบุคคล</h1>
                <div>
                    <div className="w-[340px] h-[524px] bg-white flex justify-center rounded-[10px] mt-[10px]"> 
                        <h2 className="text-[24px] mt-[20px] text-[16px]">นโยบายการใช้ข้อมูลส่วนบุคคล</h2>
                    </div>
                    <div className="flex flex-row">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" checked />
                        <label className="ml-2 text-gray-700">ฉันยอมรับเงื่อนไขการสมัครของผู้จัดงาน</label>
                    </div>
                    <Link href="/status" passHref>
                        <button className="w-[350px] h-[48px] bg-[#941214] text-white rounded-[32px] shadow-2xl">รับทราบและยินยอม</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
