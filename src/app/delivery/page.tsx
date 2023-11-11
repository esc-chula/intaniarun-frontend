import Header from "../components/header";
import Image from 'next/image';
import SubmitButton from "../components/submit-button";

const options = ["รับด้วยตัวเอง", "ขนส่งสาธรณะ"];

export default function DeliverySelectionPage() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <div>
                <Header />
                <div>
                    <h1 className="text-2xl font-bold flex items-center justify-center my-9">เลือกประเภทการจัดส่งของที่ระลึก</h1>
                </div>
                <div className="flex justify-center">
                    <div className="relative w-[350px] h-[50px] bg-white rounded-md overflow-hidden">
                        <div className="absolute inset-y-0 left-0 top-[-3px] flex items-center pl-3 pointer-events-none">
                            <Image src="/delivery-icon.svg" alt="Delivery" width={23} height={23} />
                        </div>
                        <select className="block appearance-none w-full h-full pl-10 pr-10 bg-white text-gray-700 border rounded-md leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                            <option value="" disabled selected>ประเภทการจัดส่ง</option>
                            {options.map((option, index) => (
                                <option value={option} key={index}>{option}</option>
                            ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <Image src="/dropdown-arrow.svg" alt="Dropdown" width={19} height={19} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center pb-5">
                <SubmitButton />
            </div>
        </div>
    );
}
