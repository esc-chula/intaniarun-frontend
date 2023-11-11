'use client';

import { createContext, useContext, useState } from 'react';

import { TRegisterBodyState } from '@/types/register';

interface ContextProps {
    registerBody: TRegisterBodyState;
    setRegisterBodyState: (key: string, value: string) => void;
}

const Context = createContext<ContextProps>({
    registerBody: {
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
        runnerNo: '',
        selectedPackage: '',
        paymentId: '',
    },
    setRegisterBodyState: () => {},
});

const Provider = ({ children }: { children: React.ReactNode }) => {
    const [registerBody, setRegisterBody] = useState<TRegisterBodyState>({
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
        runnerNo: '',
        selectedPackage: '',
        paymentId: '',
    });

    const setRegisterBodyState = (key: string, value: string) => {
        setRegisterBody((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    return (
        <Context.Provider
            value={{
                registerBody,
                setRegisterBodyState,
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
