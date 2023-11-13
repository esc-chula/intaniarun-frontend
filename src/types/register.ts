export type TRegisterBodyState = {
    firstName: string;
    lastName: string;
    gender: TRegisterGender | '';
    birthDate: string;
    citizenId: string;
    nationality: string;
    shirtSize: TRegisterShirtSize | '';
    province: string;
    email: string;
    phone: string;
    disease: string;
    bloodType: TRegisterBloodType | '';
    emergencyName: string;
    emergencyPhone: string;
    relationship: string;
    gmail: string;
    type: TRegisterRunnerType | '';
    runnerNo: string;
    selectedPackage: TRegisterPackageType | '';
    paymentId: string;
    receiverName?: string;
    receiverPhone?: string;
    receiverAddress?: string;
    receiverPostalCode?: string;
};

export type TRegisterBody = TRegisterBodyState & {
    gender: TRegisterGender;
    shirtSize: TRegisterShirtSize;
    bloodType: TRegisterBloodType;
    type: TRegisterRunnerType;
    selectedPackage: TRegisterPackageType;
};

export type TRegisterGender = 'MALE' | 'FEMALE' | 'OTHER';

export type TRegisterShirtSize =
    | 'XS'
    | 'S'
    | 'M'
    | 'L'
    | 'XL'
    | '2L'
    | '3L'
    | '5L'
    | '7L';

export type TRegisterBloodType = 'A' | 'B' | 'AB' | 'O';

export type TRegisterRunnerType = 'ALUMNI' | 'STUDENT' | 'PUBLIC';

export type TRegisterPackageType = 'F' | 'T';
