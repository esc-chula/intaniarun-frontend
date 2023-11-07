import Header from "../components/header";


export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-[#F998B926]">
            <Header/>
            <div className="flex flex-col items-center">
                <h1 className="text-[50px] mt-[65px]">นโยบายการใช้ข้อมูลส่วนบุคคล</h1>
                <div>
                    <h2 className="text-[24px] mt-[20px]">นโยบายการใช้ข้อมูลส่วนบุคคล</h2>
                    <button className="w-[350px] h-[48px] bg-[#941214] text-white mt-[350px] rounded-[32px] shadow-2xl">ลงทะเบียน</button>
                </div>
            </div>
        </div>
    );
}
