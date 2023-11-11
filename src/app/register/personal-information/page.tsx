import Header from "../../components/header";
import Link from 'next/link';
import FormComponent from "./components/form";
import TRegisterBloodType from "../../../types/register";
import { useState } from "react";
import { useRegisterContext } from '@/contexts/register';

const nameTitles = [
    "นาย","นาง","นางสาว"
]

const genders = [
    "ชาย","หญิง"
]

const bloodtypes = [
    "A","B","AB","O"
]

const shirtSizes = [
    "XS","S","M","L","XL","2L","3L","5L","7L"
]


export default function PersonalInformationPage() {

    const { registerBody, setRegisterBodyState } = useRegisterContext();


    const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const target = e.target as typeof e.target
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterBodyState(name, value);
    };


    return (
        <div className="min-h-screen gap-[30px]">
            <Header/>
            <div>
                <h1 className="text-[24px] font-bold items-center flex justify-center my-[40px]">ข้อมูลผู้สมัคร</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
            <form
                    // onSubmit={formHandler}
                    className="mt-1 flex flex-col text-[36px]"
                >
                    {/* <FormComponent
                        id="nametitle"
                        label="คำนำหน้านาม"
                        placeholder="-- เลือกรายการ --"
                        value={registerBody.nametitle}
                        required={true}
                        options={nameTitles.map(nameTitle => ({ value: nameTitle, label: nameTitle }))}
                        onChange={handleChange}
                    /> */}

                    <FormComponent
                        id="name"
                        label="ชื่อ"
                        placeholder="ชื่อ"
                        name="firstName"
                        value={registerBody.firstName}
                        required={true}
                        onChange={handleChange}
                    />

                    <FormComponent
                        id="surname"
                        label="นามสกุล"
                        placeholder="นามสกุล"
                        name="lastName"
                        value={registerBody.lastName}
                        required={true}
                        onChange={handleChange}
                    />

                    <FormComponent
                        id="gender"
                        label="เพศ (ตามบัตรประชาชน)"
                        placeholder="-- เลือกรายการ --"
                        name="gender"
                        value={registerBody.gender}
                        required={true}
                        options={genders.map(gender => ({ value: gender, label: gender }))}
                        onChange={handleChange}
                    />

                    <FormComponent
                        id="email"
                        label="อีเมล"
                        placeholder="อีเมล"
                        name="email"
                        value={registerBody.email}
                        required={true}
                        type="email"
                        onChange={handleChange}
                    />

                    <FormComponent
                        id="phone"
                        label="โทรศัพท์"
                        placeholder="0XX-XXX-XXXX"
                        name="phone"
                        value={registerBody.phone}
                        required={true}
                        type="tel"
                        onChange={handleChange}
                    />

                    <FormComponent
                        id="citizenId"
                        label="เลขบัตรประชาชน"
                        placeholder="X-XXXX-XXXXX-XX-X"
                        name="citizenId"
                        value={registerBody.citizenId}
                        required={true}
                        onChange={handleChange}
                    />

                    <FormComponent
                        id="province"
                        label="จังหวัดที่พักอาศัย"
                        placeholder="---- เลือกรายการ ----"
                        name="province"
                        value={registerBody.province}
                        required={true}
                        //options
                        onChange={handleChange}
                    />

                    <FormComponent
                        id="disease"
                        label="ปัญหาสุขภาพ"
                        placeholder="ปัญหาสุขภาพ"
                        name="disease"
                        value={registerBody.disease}
                        required={true}
                        onChange={handleChange}
                    />

                    <FormComponent
                        id="bloodType"
                        label="หมู่เลือด"
                        placeholder="---- เลือกรายการ ----"
                        name="bloodType"
                        value={registerBody.bloodType}
                        required={true}
                        type={TRegisterBloodType}
                        options={bloodtypes.map(bloodtype => ({ value: bloodtype , label: bloodtype }))}
                        onChange={handleChange}
                    />  

                    <FormComponent
                        id="emergencyName"
                        label="ชื่อผู้ติดต่อกรณีฉุกเฉิน"
                        placeholder="ชื่อ - นามสกุล"
                        name="emergencyName"
                        value={registerBody.emergencyName}
                        required={true}
                        onChange={handleChange}
                    />  
                    <FormComponent
                        id="relationship"
                        label="เกี่ยวข้องเป็น"
                        placeholder="ความสัมพันธ์"
                        name="relationship"
                        value={registerBody.relationship}
                        required={true}
                        onChange={handleChange}
                    />  
                    <FormComponent
                        id="emergencyPhone"
                        label="เบอร์โทรศัพท์กรณีฉุกเฉิน"
                        placeholder="0XX-XXX-XXXX"
                        name="emergencyPhone"
                        value={registerBody.emergencyPhone}
                        required={true}
                        onChange={handleChange}
                    />  
                    <FormComponent
                        id="shirtSize"
                        label="ไซซ์เสื้อ"
                        placeholder="---- เลือกรายการ ----"
                        name="shirtSize"
                        value={registerBody.shirtSize}
                        required={true}
                        // type={TRegisterShirtSize}
                        options={shirtSizes.map(shirtSize => ({ value: shirtSize , label: shirtSize }))}
                        onChange={handleChange}
                    />  
                    <button type="submit" className="font-bold rounded-[32px] text-[16px] text-white border-2 px-4 py-2 mt-4 w-[350px] h-[45px] bg-[#941214] mb-[20px] shadow-xl">
                        ต่อไป
                    </button>
                </form>
            </div>
        </div>
    );
}
