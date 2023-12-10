import { convert } from 'baht';
import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge';

type TRunPackage =
    | 'ALUMNI'
    | 'STUDENT'
    | 'PUBLIC'
    | 'VIP'
    | 'CHULA'
    | 'AQUAINTANCE';

const PackageText = {
    ALUMNI: 'ศิษย์เก่า',
    STUDENT: 'นิสิตวิศวฯ จุฬาฯ',
    PUBLIC: 'ประชาชนทั่วไป',
    VIP: 'VIP',
    CHULA: 'ประชาคมจุฬาฯ',
    AQUAINTANCE: 'ผู้ติดตาม',
};

function calculateVAT(price: number) {
    const beforeVAT = roundToTwo(price / 1.07);
    const VAT = roundToTwo(price - beforeVAT);
    return [price, beforeVAT, VAT];
}

function roundToTwo(num: number) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
}

function getRunPrice(type: TRunPackage) {
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

export async function GET(req: Request) {
    try {
        const image = await fetch(
            new URL('./receipt.png', import.meta.url)
        ).then((res) => res.arrayBuffer());
        const fontData = await fetch(
            new URL('./Sarabun-Regular.ttf', import.meta.url)
        ).then((res) => res.arrayBuffer());

        const origin = new URL(req.url).origin;

        // info
        const { searchParams } = new URL(req.url);

        const HRNumber = searchParams.get('hr_number');
        const AccountDate = searchParams.get('account_date');
        const Name = searchParams.get('name');
        const RunPackage: TRunPackage = searchParams.get(
            'run_package'
        ) as TRunPackage;
        const RunDistance = searchParams.get('run_distance');
        const amount = Number(searchParams.get('amount')) ?? 0;

        const [price, beforeVAT, VAT] = getRunPrice(RunPackage);

        if (!HRNumber || !AccountDate || !Name || !RunPackage || !amount) {
            return new Response(`Missing required parameters`, {
                status: 400,
            });
        }

        return new ImageResponse(
            (
                <div
                    style={{
                        fontFamily: '"Sarabun"',
                        // backgroundImage: `url(${image})`,
                    }}
                    tw='w-full h-full flex items-center justify-center relative'
                >
                    <img
                        src={`${origin}/receipt.png`}
                        style={{
                            objectFit: 'cover',
                        }}
                        tw='w-full h-full absolute inset-0'
                    />
                    {/* header info */}
                    <p
                        style={{
                            fontSize: '18px',
                            position: 'absolute',
                            top: '264px',
                            left: '915px',
                        }}
                        tw='font-bold'
                    >
                        {HRNumber}
                    </p>
                    <p
                        style={{
                            fontSize: '18px',
                            position: 'absolute',
                            top: '304px',
                            left: '835px',
                        }}
                        tw='font-bold'
                    >
                        {AccountDate}
                    </p>

                    {/* name */}
                    <p
                        style={{
                            fontSize: '18px',
                            position: 'absolute',
                            top: '358px',
                            left: '239px',
                        }}
                        tw='font-bold'
                    >
                        คุณ{Name}
                    </p>

                    {/* statement */}
                    <p
                        style={{
                            fontSize: '18px',
                            position: 'absolute',
                            top: '600px',
                            left: '110px',
                        }}
                        tw='font-bold'
                    >
                        ค่าสมัครงานวิ่ง อินทาเนียรัน 2024 วันที่ 21.01.2024
                    </p>
                    <p
                        style={{
                            fontSize: '18px',
                            position: 'absolute',
                            top: '630px',
                            left: '110px',
                        }}
                        tw='font-bold'
                    >
                        ประเภท {PackageText[RunPackage]} ระยะวิ่ง {RunDistance}{' '}
                        km
                    </p>

                    <p
                        style={{
                            fontSize: '18px',
                            position: 'absolute',
                            top: '600px',
                            left: '595px',
                        }}
                        tw='font-bold'
                    >
                        {beforeVAT}
                    </p>

                    <p
                        style={{
                            fontSize: '18px',
                            position: 'absolute',
                            top: '600px',
                            left: '755px',
                        }}
                        tw='font-bold'
                    >
                        {amount}
                    </p>

                    {/* amount */}
                    <p
                        style={{
                            fontSize: '18px',
                            position: 'absolute',
                            top: '600px',
                            left: '885px',
                        }}
                        tw='font-bold'
                    >
                        {roundToTwo(beforeVAT * amount)}
                    </p>

                    {/* total */}
                    <p
                        style={{
                            fontSize: '16px',
                            position: 'absolute',
                            top: '900px',
                            left: '885px',
                            textAlign: 'center',
                        }}
                        tw='font-bold'
                    >
                        {roundToTwo(beforeVAT * amount)}
                    </p>
                    <p
                        style={{
                            fontSize: '16px',
                            position: 'absolute',
                            top: '922px',
                            left: '890px',
                            textAlign: 'center',
                        }}
                        tw='font-bold'
                    >
                        {roundToTwo(VAT * amount)}
                    </p>
                    <p
                        style={{
                            fontSize: '16px',
                            position: 'absolute',
                            top: '943px',
                            left: '890px',
                            textAlign: 'center',
                        }}
                        tw='font-bold'
                    >
                        {price * amount}
                    </p>

                    {/* text */}
                    <p
                        style={{
                            fontSize: '16px',
                            position: 'absolute',
                            top: '995px',
                            left: '503px',
                            textAlign: 'center',
                        }}
                        tw='font-bold'
                    >
                        {convert(price * amount)}
                    </p>
                </div>
            ),
            {
                width: 1080,
                height: 1200,
                fonts: [
                    {
                        name: 'Sarabun',
                        data: fontData,
                        style: 'normal',
                    },
                ],
            }
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
