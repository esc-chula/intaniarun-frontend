'use client';

import { createContext, useContext, useEffect, useState } from 'react';

import { TRegisterBodyState } from '@/types/register';

interface ContextProps {
    registerBody: TRegisterBodyState[];
    setRegisterBodyState: (index: number, key: string, value: string) => void;
    addUserToRegisterBody: () => void;
    removeUserFromRegisterBody: (index: number) => void;
    currentRegistrantIndex: number;
    setCurrentRegistrantIndex: (index: number) => void;
}

const Context = createContext<ContextProps>({
    registerBody: [
        {
            firstName: '',
            lastName: '',
            gender: '',
            birthDate: '',
            citizenId: '',
            nationality: '',
            shirtSize: '',
            province: '',
            email: '',
            phone: '',
            disease: '',
            bloodType: '',
            emergencyName: '',
            emergencyPhone: '',
            relationship: '',
            gmail: '',
            type: '',
            selectedPackage: '',
            paymentId: '',
        },
    ],
    setRegisterBodyState: () => {},
    addUserToRegisterBody: () => {},
    removeUserFromRegisterBody: () => {},
    currentRegistrantIndex: 0,
    setCurrentRegistrantIndex: () => {},
});

const Provider = ({ children }: { children: React.ReactNode }) => {
    const [registerBody, setRegisterBody] = useState<TRegisterBodyState[]>([
        {
            firstName: '',
            lastName: '',
            gender: '',
            birthDate: '',
            citizenId: '',
            nationality: '',
            shirtSize: '',
            province: '',
            email: '',
            phone: '',
            disease: '',
            bloodType: '',
            emergencyName: '',
            emergencyPhone: '',
            relationship: '',
            gmail: '',
            type: '',
            selectedPackage: '',
            paymentId: '',
        },
    ]);

    const [currentRegistrantIndex, setCurrentRegistrantIndex] =
        useState<number>(0);

    const setRegisterBodyState = (
        index: number,
        key: string,
        value: string
    ) => {
        const newRegisterBody = [...registerBody];
        newRegisterBody[index][key as keyof TRegisterBodyState] = value;
        setRegisterBody(newRegisterBody);
    };

    const addUserToRegisterBody = () => {
        setRegisterBody((prevState) => [
            ...prevState,
            {
                firstName: '',
                lastName: '',
                gender: '',
                birthDate: '',
                citizenId: '',
                nationality: '',
                shirtSize: '',
                province: '',
                email: '',
                phone: '',
                disease: '',
                bloodType: '',
                emergencyName: '',
                emergencyPhone: '',
                relationship: '',
                gmail: '',
                type: '',
                selectedPackage: '',
                paymentId: '',
            },
        ]);
        setCurrentRegistrantIndex(registerBody.length);
    };

    const removeUserFromRegisterBody = (index: number) => {
        setRegisterBody((prevState) => {
            const newRegisterBody = [...prevState];
            newRegisterBody.splice(index, 1);
            return newRegisterBody;
        });
    };

    const [pageMounted, setPageMounted] = useState(false);

    useEffect(() => {
        setPageMounted(true);
        const localRegisterBody = localStorage.getItem('registerBody');
        const localCurrentRegistrantIndex = localStorage.getItem(
            'currentRegistrantIndex'
        );
        if (localRegisterBody) {
            setRegisterBody(JSON.parse(localRegisterBody));
            setCurrentRegistrantIndex(
                localCurrentRegistrantIndex
                    ? JSON.parse(localCurrentRegistrantIndex)
                    : 0
            );
        }
    }, []);

    useEffect(() => {
        if (!pageMounted) return;
        localStorage.setItem('registerBody', JSON.stringify(registerBody));
        localStorage.setItem(
            'currentRegistrantIndex',
            JSON.stringify(currentRegistrantIndex)
        );
    }, [pageMounted, registerBody, currentRegistrantIndex]);

    return (
        <Context.Provider
            value={{
                registerBody,
                setRegisterBodyState,
                addUserToRegisterBody,
                removeUserFromRegisterBody,
                currentRegistrantIndex,
                setCurrentRegistrantIndex,
            }}
        >
            {children}
        </Context.Provider>
    );
};

const UseContext = () => {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error(
            'useRegisterContext must be used within a RegisterProvider'
        );
    }
    return context;
};

export { Provider as RegisterProvider, UseContext as useRegisterContext };
