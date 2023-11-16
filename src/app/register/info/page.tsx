'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import Button from '@/components/button';
import { useRegisterContext } from '@/contexts/register';
import { TRegisterBloodType } from '@/types/register';

import Header from '../../../components/header';
import FormComponent from './components/form';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { nameTitles, genders, bloodtypes, shirtSizes , province_th , months_th } from './data';

export default function PersonalInformationPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { registerBody, setRegisterBodyState, currentRegistrantIndex } =
        useRegisterContext();
    const [page, setPage] = useState(0);
    const [isFormComplete, setIsFormComplete] = useState(false);
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const type = searchParams.get('type');

    useEffect(() => {
        setRegisterBodyState(currentRegistrantIndex, 'type', type!);
    }, []);

    // useEffect(() => {
    //     console.log('registerBody updated:', registerBody);
    // }, [registerBody]);

    const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (page === 0) {
            nextPage();
            return;
        }

        console.log(registerBody[0]);
        router.push('/register/distance');
    };

    const handleChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        // console.log("Handle Change:", name, value);
        // console.log("currentRegistrantIndex:", currentRegistrantIndex);

        if (name === 'day' || name === 'month' || name === 'year') {
            // Update the local states for day, month, and year
            if (name === 'day') setDay(value);
            else if (name === 'month') setMonth(value);
            else if (name === 'year') setYear(value);

            // Update the registerBody for other fields
        } else {
            setRegisterBodyState(currentRegistrantIndex, name, value);
        }
        checkFormCompletion();
    };

    useEffect(() => {
        if (day && month && year) {
            const yearNumber = parseInt(year, 10);
            const monthIndex = months_th.indexOf(month);
            const dayNumber = parseInt(day, 10);
    
            if (!isNaN(yearNumber) && !isNaN(dayNumber) && monthIndex >= 0) {
                const date = new Date(dayNumber, monthIndex, yearNumber);
    
                // Format to datetime string, e.g., "YYYY-MM-DD"
                const dateString = date.toISOString().split('T')[0];
    
                setRegisterBodyState(currentRegistrantIndex, 'dateBirth', dateString);
            }
        }
    }, [day, month, year]);

    const nextPage = () => {
        window.scrollTo(0, 0);
        setPage((prev) => prev + 1);
    };

    const prevPage = () => {
        window.scrollTo(0, 0);
        setPage((prev) => prev - 1);
    }

    const checkFormCompletion = () => {
        if (page === 0) {
            setIsFormComplete(
                registerBody[currentRegistrantIndex].firstName!=='' &&
                registerBody[currentRegistrantIndex].lastName!=='' &&
                registerBody[currentRegistrantIndex].citizenId!=='' &&
                registerBody[currentRegistrantIndex].gender!=='' &&
                registerBody[currentRegistrantIndex].province!=='' &&
                registerBody[currentRegistrantIndex].gmail!=='' &&
                registerBody[currentRegistrantIndex].phone!=='' &&
                day !== '' && 
                month !== '' && 
                year !== ''
            );
        }
        else if (page === 1) {
            setIsFormComplete(
                registerBody[currentRegistrantIndex].disease!=='' &&
                registerBody[currentRegistrantIndex].bloodType!=='' &&
                registerBody[currentRegistrantIndex].emergencyName!=='' &&
                registerBody[currentRegistrantIndex].relationship!=='' &&
                registerBody[currentRegistrantIndex].emergencyPhone!=='' &&
                registerBody[currentRegistrantIndex].shirtSize!==''
            );
        }
    };

    return (
        <>
            <h1 className='text-2xl font-bold mt-[40px]'>ข้อมูลผู้สมัคร</h1>
            <div className='flex w-full flex-col items-center justify-center'>
                <form
                    // onSubmit={formHandler}
                    className='grid w-full gap-7 px-2'
                >
                    {page === 0 && (
                        <>
                            <FormComponent
                                id='name'
                                label='ชื่อ'
                                placeholder='ชื่อ'
                                name='firstName'
                                value={registerBody[0].firstName}
                                required={true}
                                onChange={handleChange}
                            />

                            <FormComponent
                                id='surname'
                                label='นามสกุล'
                                placeholder='นามสกุล'
                                name='lastName'
                                value={registerBody[0].lastName}
                                required={true}
                                onChange={handleChange}
                            />

                            <FormComponent
                                id='citizenId'
                                label='เลขบัตรประชาชน'
                                placeholder='X-XXXX-XXXXX-XX-X'
                                name='citizenId'
                                value={registerBody[0].citizenId}
                                required={true}
                                onChange={handleChange}
                            />

                        <FormComponent
                            id='gender'
                            label='เพศ (ตามบัตรประชาชน)'
                            placeholder='-- เลือกรายการ --'
                            name='gender'
                            value={registerBody[0].gender}
                            required={true}
                            options={genders.map((gender) => ({
                                value: gender,
                                label: gender,
                            }))}
                            onChange={handleChange}
                        />

                        <div className='flex flex-col items-start justify-start'>
                            <label className='items-start justify-start font-bold text-left b-0'>
                                วัน เดือน ปีเกิด
                            </label>
                            <div className='flex flex-row gap-2'>
                                <div className='w-[75px]'>
                                    <FormComponent
                                    id='day'
                                    placeholder='วัน'
                                    name='day'
                                    // value={registerBody[0].day}
                                    required={true}
                                    options={Array.from({ length: 30 }, (_, i) => i + 1).map((day) => ({
                                        value: day.toString(),
                                        label: day.toString().padStart(2, '0'),
                                    }))}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className='w-[145px]'>
                                    <FormComponent
                                    id='month'
                                    placeholder='เดือน'
                                    name='month'
                                    // value={registerBody[0].gender}
                                    required={true}
                                    options={months_th.map((month) => ({
                                        value: month,
                                        label: month,
                                    }))}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className='w-[94px]'>
                                <FormComponent
                                    id='year'
                                    placeholder='ปี'
                                    name='year'
                                    // value={registerBody[0].year}
                                    required={true}
                                    options={Array.from({ length: 2566 - 2486 + 1 }, (_, i) => 2486 + i).map((year) => ({
                                        value: year.toString(),
                                        label: year.toString()
                                    }))}
                                    onChange={handleChange}
                                />
                                </div>
                            </div>
                        </div>

                        <FormComponent
                            id='province'
                            label='จังหวัดที่พักอาศัย'
                            placeholder='---- เลือกรายการ ----'
                            name='province'
                            value={registerBody[0].province}
                            required={true}
                            options={province_th.map((province) => ({
                                value: province,
                                label: province,
                            }))}
                            onChange={handleChange}
                        />

                            <FormComponent
                                id='email'
                                label='อีเมล'
                                placeholder='อีเมล'
                                name='gmail'
                                value={registerBody[0].email}
                                required={true}
                                type='email'
                                onChange={handleChange}
                            />

                            <FormComponent
                                id='phone'
                                label='โทรศัพท์'
                                placeholder='0XX-XXX-XXXX'
                                name='phone'
                                value={registerBody[0].phone}
                                required={true}
                                type='tel'
                                onChange={handleChange}
                            />
                        </>
                    )}

                    {page === 1 && (
                        <>
                            <FormComponent
                                id='disease'
                                label='ปัญหาสุขภาพ'
                                placeholder='ปัญหาสุขภาพ'
                                name='disease'
                                value={registerBody[0].disease}
                                required={true}
                                onChange={handleChange}
                            />

                            <FormComponent
                                id='bloodType'
                                label='หมู่เลือด'
                                placeholder='---- เลือกรายการ ----'
                                name='bloodType'
                                value={registerBody[0].bloodType}
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
                                value={registerBody[0].emergencyName}
                                required={true}
                                onChange={handleChange}
                            />
                            <FormComponent
                                id='relationship'
                                label='เกี่ยวข้องเป็น'
                                placeholder='ความสัมพันธ์'
                                name='relationship'
                                value={registerBody[0].relationship}
                                required={true}
                                onChange={handleChange}
                            />
                            <FormComponent
                                id='emergencyPhone'
                                label='เบอร์โทรศัพท์กรณีฉุกเฉิน'
                                placeholder='0XX-XXX-XXXX'
                                name='emergencyPhone'
                                value={registerBody[0].emergencyPhone}
                                required={true}
                                onChange={handleChange}
                            />
                            <Image
                                src='/shirt-size.svg'
                                alt='shirt-size'
                                width={700}
                                height={220}
                            />
                            <FormComponent
                                id='shirtSize'
                                label='ไซซ์เสื้อ'
                                placeholder='---- เลือกรายการ ----'
                                name='shirtSize'
                                value={registerBody[0].shirtSize}
                                required={true}
                                // type={TRegisterShirtSize}
                                options={shirtSizes.map((shirtSize) => ({
                                    value: shirtSize,
                                    label: shirtSize,
                                }))}
                                onChange={handleChange}
                            />
                        </>
                    )}
                    <br />
                    <Button type='submit' onClick={formHandler} disabled={!isFormComplete}>ต่อไป</Button>
                </form>
            </div>
        </>
    );
}
