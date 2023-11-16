'use client';

import Link from 'next/link';
import { useState , useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/button';
import { useRegisterContext } from '@/contexts/register';
import { TRegisterBloodType } from '@/types/register';
import Header from '../../../components/header';
import FormComponent from './components/form';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

const nameTitles = ['นาย', 'นาง', 'นางสาว'];

const genders = ['ชาย', 'หญิง'];

const bloodtypes = ['A', 'B', 'AB', 'O'];

const shirtSizes = ['XS', 'S', 'M', 'L', 'XL', '2L', '3L', '5L', '7L'];

export default function PersonalInformationPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { registerBody, setRegisterBodyState , currentRegistrantIndex } = useRegisterContext();
    const [page, setPage] = useState(0);

    const type = searchParams.get('type');

    useEffect(() => {
        setRegisterBodyState(currentRegistrantIndex, 'type', type);
    }, []);

    // useEffect(() => {
    //     console.log('registerBody updated:', registerBody);
    // }, [registerBody]);

    const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(page === 0){
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
        setRegisterBodyState(currentRegistrantIndex, name, value);
    };

    const nextPage = () => {
        window.scrollTo(0, 0);
        setPage((prev) => prev + 1);
    }

    const prevPage = () => {
        window.scrollTo(0, 0);
        setPage((prev) => prev - 1);
    }

    return (
        <>
            <h1 className='text-2xl font-bold'>ข้อมูลผู้สมัคร</h1>
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

                        <FormComponent
                            id='province'
                            label='จังหวัดที่พักอาศัย'
                            placeholder='---- เลือกรายการ ----'
                            name='province'
                            value={registerBody[0].province}
                            required={true}
                            //options
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
                        <Image src="/shirt-size.svg" alt="shirt-size"  width={700} height={220}/>
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
                    <Button type='submit' onClick={formHandler}>ต่อไป</Button>
                </form>
            </div>
        </>
    );
}
