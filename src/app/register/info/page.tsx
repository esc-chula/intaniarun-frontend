'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import Button from '@/components/button';
import { useRegisterContext } from '@/contexts/register';

import FormComponent from './components/form';
import { fields } from './field';

export default function PersonalInformationPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const {
        registerBody,
        setRegisterBodyState,
        currentRegistrantIndex,
        validateRegisterBody,
    } = useRegisterContext();
    const page = searchParams.get('page')
        ? parseInt(searchParams.get('page')!)
        : 0;
    const type = searchParams.get('type');

    const [errorFields, setErrorFields] = useState<string[]>([]);

    const validateForm = useCallback(() => {
        const error = validateRegisterBody();

        if (error) {
            const errorFields = new Set<string>();
            error.details.forEach((error) => {
                const path = error.path[0] as string;
                const message = error.message;

                const pageFields = fields[page as keyof typeof fields].map(
                    (field) => field.name
                );

                if (pageFields.includes(path)) {
                    errorFields.add(path);
                }
            });

            setErrorFields(Array.from(errorFields));
        }
    }, [page, validateRegisterBody]);

    const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        validateForm();

        if (errorFields.length > 0) return;

        setErrorFields([]);

        if (page === 0) {
            router.push(`/register/info?page=1&type=${type}`);
        } else if (page === 1) {
            router.push(`/register/distance`);
        }
    };

    useEffect(() => {
        validateForm();
    }, [page, validateForm]);

    return (
        <>
            <div className='relative flex w-full items-center justify-center'>
                <h1 className='text-2xl font-bold'>
                    ข้อมูลผู้สมัคร
                    {registerBody.length > 1
                        ? ` คนที่ ${currentRegistrantIndex + 1}`
                        : ''}
                </h1>
            </div>
            <div className='flex w-full flex-col items-center justify-center'>
                <form onSubmit={formHandler} className='grid w-full gap-7 px-2'>
                    {Object.keys(fields).map((key) => {
                        if (parseInt(key) !== page) return null;
                        return fields[parseInt(key) as keyof typeof fields].map(
                            (field) => {
                                return (
                                    <FormComponent
                                        key={field.id}
                                        id={field.id}
                                        label={field.label}
                                        placeholder={field.placeholder}
                                        name={field.name}
                                        value={
                                            registerBody[
                                                currentRegistrantIndex
                                            ][
                                                field.name as keyof (typeof registerBody)[0]
                                            ]
                                        }
                                        options={field.options}
                                        required={true}
                                        type={field.type}
                                        onChange={(e) => {
                                            const { name, value } = e.target;
                                            setRegisterBodyState(
                                                currentRegistrantIndex,
                                                name,
                                                value
                                            );
                                            validateForm();
                                        }}
                                    />
                                );
                            }
                        );
                    })}

                    <br />
                    <Button type='submit' disabled={errorFields.length > 0}>
                        ต่อไป
                    </Button>
                </form>
            </div>
        </>
    );
}
