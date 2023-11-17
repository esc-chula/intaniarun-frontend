'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import Button from '@/components/button';
import { useRegisterContext } from '@/contexts/register';
import { userSchema } from '@/utils/validator';

import FormComponent from './components/form';
import { bloodtypes, genders, province_th, shirtSizes } from './data';

export default function PersonalInformationPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { registerBody, setRegisterBodyState, currentRegistrantIndex } =
        useRegisterContext();
    const page = searchParams.get('page')
        ? parseInt(searchParams.get('page')!)
        : 0;
    const type = searchParams.get('type');

    const [errorFields, setErrorFields] = useState<string[]>([]);

    const validateForm = () => {
        const { error, value } = userSchema.validate(
            registerBody[currentRegistrantIndex],
            {
                abortEarly: false,
            }
        );

        if (error) {
            error.details.forEach((error) => {
                const { path, message } = error;
                console.log(path[0], message);
            });
        }
    };

    const handleChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setRegisterBodyState(currentRegistrantIndex, name, value);
        validateForm();
    };

    const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        validateForm();

        if (page === 0) {
            router.push(`/register/info?page=1&type=${type}`);
        } else if (page === 1) {
            router.push(`/register/distance`);
        }
    };

    return (
        <>
            <div className='relative flex w-full items-center justify-center'>
                <h1 className='text-2xl font-bold'>
                    ข้อมูลผู้สมัคร
                    {registerBody.length > 0
                        ? ` คนที่ ${currentRegistrantIndex + 1}`
                        : ''}
                </h1>
            </div>
            <div className='flex w-full flex-col items-center justify-center'>
                <form onSubmit={formHandler} className='grid w-full gap-7 px-2'>
                    {page === 0 && (
                        <>
                            <FormComponent
                                id='name'
                                label='ชื่อ'
                                placeholder='ชื่อ'
                                name='firstName'
                                value={
                                    registerBody[currentRegistrantIndex]
                                        .firstName
                                }
                                required={true}
                                onChange={handleChange}
                            />

                            <FormComponent
                                id='surname'
                                label='นามสกุล'
                                placeholder='นามสกุล'
                                name='lastName'
                                value={
                                    registerBody[currentRegistrantIndex]
                                        .lastName
                                }
                                required={true}
                                onChange={handleChange}
                            />

                            <FormComponent
                                id='citizenId'
                                label='เลขบัตรประชาชน'
                                placeholder='X-XXXX-XXXXX-XX-X'
                                name='citizenId'
                                value={
                                    registerBody[currentRegistrantIndex]
                                        .citizenId
                                }
                                required={true}
                                onChange={handleChange}
                            />

                            <FormComponent
                                id='gender'
                                label='เพศ (ตามบัตรประชาชน)'
                                placeholder='-- เลือกรายการ --'
                                name='gender'
                                value={
                                    registerBody[currentRegistrantIndex].gender
                                }
                                required={true}
                                options={genders.map((gender) => ({
                                    value: gender.value,
                                    label: gender.label,
                                }))}
                                onChange={handleChange}
                            />

                            <FormComponent
                                id='birthDate'
                                label='วันเกิด'
                                placeholder='วัน/เดือน/ปี ค.ศ.'
                                name='birthDate'
                                value={
                                    registerBody[currentRegistrantIndex]
                                        .birthDate
                                }
                                required={true}
                                type='date'
                                onChange={handleChange}
                            />

                            <FormComponent
                                id='province'
                                label='จังหวัดที่พักอาศัย'
                                placeholder='---- เลือกรายการ ----'
                                name='province'
                                value={
                                    registerBody[currentRegistrantIndex]
                                        .province
                                }
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
                                name='email'
                                value={
                                    registerBody[currentRegistrantIndex].email
                                }
                                required={true}
                                type='email'
                                onChange={handleChange}
                            />

                            <FormComponent
                                id='phone'
                                label='โทรศัพท์'
                                placeholder='0XX-XXX-XXXX'
                                name='phone'
                                value={
                                    registerBody[currentRegistrantIndex].phone
                                }
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
                                value={
                                    registerBody[currentRegistrantIndex].disease
                                }
                                required={true}
                                onChange={handleChange}
                            />

                            <FormComponent
                                id='bloodType'
                                label='หมู่เลือด'
                                placeholder='---- เลือกรายการ ----'
                                name='bloodType'
                                value={
                                    registerBody[currentRegistrantIndex]
                                        .bloodType
                                }
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
                                value={
                                    registerBody[currentRegistrantIndex]
                                        .emergencyName
                                }
                                required={true}
                                onChange={handleChange}
                            />
                            <FormComponent
                                id='relationship'
                                label='เกี่ยวข้องเป็น'
                                placeholder='ความสัมพันธ์'
                                name='relationship'
                                value={
                                    registerBody[currentRegistrantIndex]
                                        .relationship
                                }
                                required={true}
                                onChange={handleChange}
                            />
                            <FormComponent
                                id='emergencyPhone'
                                label='เบอร์โทรศัพท์กรณีฉุกเฉิน'
                                placeholder='0XX-XXX-XXXX'
                                name='emergencyPhone'
                                value={
                                    registerBody[currentRegistrantIndex]
                                        .emergencyPhone
                                }
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
                                label='ไซส์เสื้อ'
                                placeholder='---- เลือกรายการ ----'
                                name='shirtSize'
                                value={
                                    registerBody[currentRegistrantIndex]
                                        .shirtSize
                                }
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
                    <Button type='submit'>ต่อไป</Button>
                </form>
            </div>
        </>
    );
}
