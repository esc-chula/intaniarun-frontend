'use client';

import Link from 'next/link';
import { useState } from 'react';

import Button from '@/components/button';
import { useRegisterContext } from '@/contexts/register';
import { TRegisterBloodType } from '@/types/register';

import Header from '../../../components/header';
import FormComponent from './components/form';

const nameTitles = ['นาย', 'นาง', 'นางสาว'];

const genders = ['ชาย', 'หญิง'];

const bloodtypes = ['A', 'B', 'AB', 'O'];

const shirtSizes = ['XS', 'S', 'M', 'L', 'XL', '2L', '3L', '5L', '7L'];

export default function PersonalInformationPage() {
    const { registerBody, setRegisterBodyState } = useRegisterContext();

    const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const target = e.target as typeof e.target;
    };

    const handleChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setRegisterBodyState(name, value);
    };

    return (
        <>
            <h1 className='text-2xl font-bold'>ข้อมูลผู้สมัคร</h1>
            <div className='flex w-full flex-col items-center justify-center'>
                <form
                    // onSubmit={formHandler}
                    className='grid w-full gap-7 px-2'
                >
                    <FormComponent
                        id='name'
                        label='ชื่อ'
                        placeholder='ชื่อ'
                        name='firstName'
                        value={registerBody.firstName}
                        required={true}
                        onChange={handleChange}
                    />

                    <FormComponent
                        id='surname'
                        label='นามสกุล'
                        placeholder='นามสกุล'
                        name='lastName'
                        value={registerBody.lastName}
                        required={true}
                        onChange={handleChange}
                    />

                    <FormComponent
                        id='gender'
                        label='เพศ (ตามบัตรประชาชน)'
                        placeholder='-- เลือกรายการ --'
                        name='gender'
                        value={registerBody.gender}
                        required={true}
                        options={genders.map((gender) => ({
                            value: gender,
                            label: gender,
                        }))}
                        onChange={handleChange}
                    />

                    <FormComponent
                        id='email'
                        label='อีเมล'
                        placeholder='อีเมล'
                        name='email'
                        value={registerBody.email}
                        required={true}
                        type='email'
                        onChange={handleChange}
                    />

                    <FormComponent
                        id='phone'
                        label='โทรศัพท์'
                        placeholder='0XX-XXX-XXXX'
                        name='phone'
                        value={registerBody.phone}
                        required={true}
                        type='tel'
                        onChange={handleChange}
                    />

                    <FormComponent
                        id='citizenId'
                        label='เลขบัตรประชาชน'
                        placeholder='X-XXXX-XXXXX-XX-X'
                        name='citizenId'
                        value={registerBody.citizenId}
                        required={true}
                        onChange={handleChange}
                    />

                    <FormComponent
                        id='province'
                        label='จังหวัดที่พักอาศัย'
                        placeholder='---- เลือกรายการ ----'
                        name='province'
                        value={registerBody.province}
                        required={true}
                        //options
                        onChange={handleChange}
                    />

                    <FormComponent
                        id='disease'
                        label='ปัญหาสุขภาพ'
                        placeholder='ปัญหาสุขภาพ'
                        name='disease'
                        value={registerBody.disease}
                        required={true}
                        onChange={handleChange}
                    />

                    <FormComponent
                        id='bloodType'
                        label='หมู่เลือด'
                        placeholder='---- เลือกรายการ ----'
                        name='bloodType'
                        value={registerBody.bloodType}
                        required={true}
                        options={bloodtypes.map((bloodtype) => ({
                            value: bloodtype,
                            label: bloodtype,
                        }))}
                        onChange={handleChange}
                    />

                    <FormComponent
                        id='emergencyName'
                        label='ชื่อผู้ติดต่อกรณีฉุกเฉิน'
                        placeholder='ชื่อ - นามสกุล'
                        name='emergencyName'
                        value={registerBody.emergencyName}
                        required={true}
                        onChange={handleChange}
                    />
                    <FormComponent
                        id='relationship'
                        label='เกี่ยวข้องเป็น'
                        placeholder='ความสัมพันธ์'
                        name='relationship'
                        value={registerBody.relationship}
                        required={true}
                        onChange={handleChange}
                    />
                    <FormComponent
                        id='emergencyPhone'
                        label='เบอร์โทรศัพท์กรณีฉุกเฉิน'
                        placeholder='0XX-XXX-XXXX'
                        name='emergencyPhone'
                        value={registerBody.emergencyPhone}
                        required={true}
                        onChange={handleChange}
                    />
                    <FormComponent
                        id='shirtSize'
                        label='ไซซ์เสื้อ'
                        placeholder='---- เลือกรายการ ----'
                        name='shirtSize'
                        value={registerBody.shirtSize}
                        required={true}
                        // type={TRegisterShirtSize}
                        options={shirtSizes.map((shirtSize) => ({
                            value: shirtSize,
                            label: shirtSize,
                        }))}
                        onChange={handleChange}
                    />
                    <br />
                    <Button type='submit'>ต่อไป</Button>
                </form>
            </div>
        </>
    );
}
