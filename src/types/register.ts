export type TRegisterBodyState = {
    firstName: string;
    lastName: string;
    gender: TRegisterGender | string;
    birthDate: string;
    shirtSize: TRegisterShirtSize | string;
    province: string;
    email: string;
    phone: string;
    joinedYear: string;
    disease: string;
    bloodType: TRegisterBloodType | string;
    emergencyName: string;
    emergencyPhone: string;
    relationship: string;
    gmail: string;
    type: TRegisterRunnerType | string;
    selectedPackage: TRegisterPackageType | string;
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

export type TRegisterRunnerType =
    | 'VIP'
    | 'ALUMNI'
    | 'ACQUAINTANCE'
    | 'STUDENT'
    | 'CHULA'
    | 'PUBLIC';

export type TRegisterPackageType = 'F' | 'T';
