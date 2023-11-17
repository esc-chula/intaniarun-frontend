'use client';

import Joi from 'joi';
import { usePathname, useRouter } from 'next/navigation';
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';

import { prices } from '@/constants/price';
import { defaultRegisterBodyState } from '@/constants/register';
import { TRegisterBodyState } from '@/types/register';
import { userSchema } from '@/utils/validator';

interface ContextProps {
    registerBody: TRegisterBodyState[];
    currentRegistrantIndex: number;
    setCurrentRegistrantIndex: (index: number) => void;
    setRegisterBodyState: (index: number, key: string, value: string) => void;
    addUserToRegisterBody: () => void;
    removeUserFromRegisterBody: (index: number) => void;
    validateRegisterBody: () => Joi.ValidationError | undefined;
    totalPackagePrice: number;
}

const Context = createContext<ContextProps>({
    registerBody: [defaultRegisterBodyState],
    currentRegistrantIndex: 0,
    setCurrentRegistrantIndex: () => {},
    setRegisterBodyState: () => {},
    addUserToRegisterBody: () => {},
    removeUserFromRegisterBody: () => {},
    validateRegisterBody: () => undefined,
    totalPackagePrice: 0,
});

const Provider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const pathname = usePathname();

    const [pageMounted, setPageMounted] = useState(false);

    const [registerBody, setRegisterBody] = useState<TRegisterBodyState[]>([
        defaultRegisterBodyState,
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
            defaultRegisterBodyState,
        ]);
        setCurrentRegistrantIndex(registerBody.length);
    };

    const removeUserFromRegisterBody = (index: number) => {
        if (index === 0) {
            setRegisterBody((prevState) => [
                ...prevState.slice(1),
                defaultRegisterBodyState,
            ]);
        } else {
            setRegisterBody((prevState) => {
                const newRegisterBody = [...prevState];
                newRegisterBody.splice(index, 1);
                return newRegisterBody;
            });
        }
    };

    const validateRegisterBody = useCallback(() => {
        const localRegisterBody = localStorage.getItem('registerBody');

        if (!localRegisterBody || !pageMounted) {
            return;
        }

        const { error } = userSchema.validate(
            registerBody[currentRegistrantIndex],
            {
                abortEarly: false,
            }
        );

        return error;
    }, [currentRegistrantIndex, pageMounted, registerBody]);

    const totalPackagePrice = registerBody.reduce(
        (acc, registrant) =>
            acc + prices[registrant.type as keyof typeof prices],
        0
    );

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

    useEffect(() => {
        const localRegisterBody = localStorage.getItem('registerBody');
        if (!pageMounted || !localRegisterBody) return;
        switch (pathname) {
            case '/register/info':
                if (!registerBody[currentRegistrantIndex].type) {
                    router.push('/register/type');
                }
                break;
            case '/register/distance':
                const error = validateRegisterBody();
                if (error) {
                    const errorFields = new Set<string>();
                    error.details.forEach((error) => {
                        const path = error.path[0] as string;
                        errorFields.add(path);
                    });

                    if (errorFields === new Set(['selectedPackage'])) {
                        router.push('/register/info');
                    }
                }
                break;
        }
    }, [
        currentRegistrantIndex,
        pageMounted,
        pathname,
        registerBody,
        router,
        validateRegisterBody,
    ]);

    return (
        <Context.Provider
            value={{
                registerBody,
                currentRegistrantIndex,
                setCurrentRegistrantIndex,
                setRegisterBodyState,
                addUserToRegisterBody,
                removeUserFromRegisterBody,
                validateRegisterBody,
                totalPackagePrice,
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
