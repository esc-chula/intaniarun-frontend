type TRegisterBodyState = {
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

type TRegisterBody = TRegisterBodyState & {
    gender: TRegisterGender;
    shirtSize: TRegisterShirtSize;
    bloodType: TRegisterBloodType;
    type: TRegisterRunnerType;
    selectedPackage: TRegisterPackageType;
};

type TRegisterGender = 'MALE' | 'FEMALE' | 'OTHER';

type TRegisterShirtSize =
    | 'XS'
    | 'S'
    | 'M'
    | 'L'
    | 'XL'
    | '2L'
    | '3L'
    | '5L'
    | '7L';

type TRegisterBloodType = 'A' | 'B' | 'AB' | 'O';

type TRegisterRunnerType = 'ALUMNI' | 'STUDENT' | 'PUBLIC';

type TRegisterPackageType = 'F' | 'T';
