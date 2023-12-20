export type TRunPackage =
    | 'ALUMNI'
    | 'STUDENT'
    | 'PUBLIC'
    | 'VIP'
    | 'CHULA'
    | 'AQUAINTANCE';

export const PackageText = {
    ALUMNI: 'ศิษย์เก่า',
    STUDENT: 'นิสิตวิศวฯ จุฬาฯ',
    PUBLIC: 'ประชาชนทั่วไป',
    VIP: 'VIP',
    CHULA: 'ประชาคมจุฬาฯ',
    AQUAINTANCE: 'ผู้ติดตาม',
};

export function calculateVAT(price: number) {
    const beforeVAT = roundToTwo(price / 1.07);
    const VAT = roundToTwo(price - beforeVAT);
    return [price, beforeVAT, VAT];
}

export function roundToTwo(num: number) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
}

function isValidPackage(packageType: TRunPackage | null) {
    return Object.keys(PackageText).includes(packageType || '');
}

interface PackagePrice {
    valid: boolean;
    price: number;
    beforeVAT: number;
    VAT: number;
    totalPrice: number;
    packageText: string;
    amount: number;
    distance: string;
}

export function convertStatements(
    statements: {
        amount: number | null;
        package: TRunPackage;
        distance: string | null;
    }[]
) {
    // check whether statements is valid

    const valid = statements.every((statement) => {
        const { amount, package: packageType, distance } = statement;
        return isValidPackage(packageType) && amount && distance;
    });

    if (!valid) {
        return {
            valid: false,
            packages: [],
        };
    }

    const packages = statements.map((statement) => {
        const { amount, package: packageType, distance } = statement;
        return getRunPrice({ amount, packageType, distance });
    });

    return {
        valid: true,
        packages,
    };
}

export function getRunPrice({
    packageType,
    amount,
    distance,
}: {
    packageType: TRunPackage;
    amount: number | null;
    distance: string | null;
}): PackagePrice {
    if (!amount || !distance || amount <= 0 || !isValidPackage(packageType)) {
        return {
            valid: false,
            price: 0,
            beforeVAT: 0,
            VAT: 0,
            totalPrice: 0,
            packageText: '',
            amount: 0,
            distance: '',
        };
    }

    function getVAT(type: TRunPackage) {
        switch (type) {
            case 'STUDENT':
                return calculateVAT(300);
            case 'VIP':
                return calculateVAT(11100);
            case 'ALUMNI':
            case 'PUBLIC':
            case 'CHULA':
            case 'AQUAINTANCE':
                return calculateVAT(700);
            default:
                return calculateVAT(0);
        }
    }

    const [price, beforeVAT, VAT] = getVAT(packageType);
    const packageText = PackageText[packageType];

    const totalPrice = roundToTwo(price * +amount);

    return {
        valid: true,
        price,
        beforeVAT,
        VAT,
        packageText,
        amount: +amount,
        distance,
        totalPrice,
    };
}

export function calculateTotalPrice(packages: PackagePrice[]) {
    // get total beforeVAT, VAT, totalPrice

    const beforeVAT = roundToTwo(
        packages.reduce((acc, cur) => acc + cur.beforeVAT * cur.amount, 0)
    );
    const VAT = roundToTwo(
        packages.reduce((acc, cur) => acc + cur.VAT * cur.amount, 0)
    );
    const totalPrice = roundToTwo(
        packages.reduce((acc, cur) => acc + cur.totalPrice, 0)
    );

    // check if beforeVAT + VAT = totalPrice
    return {
        valid: beforeVAT + VAT === totalPrice,
        beforeVAT,
        VAT,
        totalPrice,
    };
}
