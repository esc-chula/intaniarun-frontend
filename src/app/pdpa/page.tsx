"use client";

import Header from "../components/header";
import Link from 'next/link';
import { useState } from "react";

export default function PdpaPage() {
    const [isChecked, setIsChecked] = useState(false);


    return (
        <div className={`min-h-screen bg-[#F998B926]`}>
            <Header/>
            <div className="flex flex-col items-center">
                <h1 className="my-[30px] text-[24px] font-bold">นโยบายการใช้ข้อมูลส่วนบุคคล</h1>
                <div>
                    <div className="w-[340px] h-[524px] bg-white flex justify-center rounded-[10px] mt-[10px]"> 
                        <h2 className="mt-[20px] text-[16px] text-[#999999]">นโยบายการใช้ข้อมูลส่วนบุคคล</h2>
                    </div>
                    <div className="flex flex-row mt-[15px] mb-[25px]">
                        <div className={`relative w-5 h-5 ${isChecked ? 'bg-[#941214]' : 'bg-white'} rounded border border-gray-300`}>
                            <input 
                                type="checkbox" 
                                className="opacity-0 absolute" 
                                checked={isChecked}
                                onChange={() => setIsChecked(!isChecked)}
                            />
                            {isChecked && (
                                <svg className="fill-current text-white w-4 h-4 pointer-events-none absolute inset-0 m-auto" viewBox="0 0 20 20">
                                    <path d="M16.7,5.3c-0.4-0.4-1-0.4-1.4,0L7.4,13.2L4.7,10.6c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l3.3,3.3c0.2,0.2,0.4,0.3,0.7,0.3
                                            s0.5-0.1,0.7-0.3l8.7-8.7C17.1,6.3,17.1,5.7,16.7,5.3z"/>
                                </svg>
                            )}
                        </div>
                        <label className="ml-2 text-gray-700 ">ฉันยอมรับเงื่อนไขการสมัครของผู้จัดงาน</label>
                    </div>
                    <Link href={isChecked ? "/role" : "#"} passHref>
                    <button 
                        className={`w-[350px] h-[48px] text-white rounded-[32px] shadow-2xl font-bold ${
                            isChecked ? 'bg-[#941214]' : 'bg-[#999999] cursor-not-allowed'
                        }`}
                        disabled={!isChecked}
                    >
                        รับทราบและยินยอม
                    </button>
                </Link>
                </div>
            </div>
        </div>
    );
}
 