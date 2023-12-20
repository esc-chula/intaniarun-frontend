import { convert } from 'baht';
import { ImageResponse } from 'next/og';

import {
    calculateTotalPrice,
    convertStatements,
    TRunPackage,
} from './calculate';
// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge';

export async function GET(req: Request) {
    try {
        const fontData = await fetch(
            new URL('./Sarabun-Regular.ttf', import.meta.url)
        ).then((res) => res.arrayBuffer());

        const origin = new URL(req.url).origin;

        // info
        const { searchParams } = new URL(req.url);

        // basic info
        const HRNumber = searchParams.get('hr_number');
        const AccountDate = searchParams.get('account_date');
        const Name = searchParams.get('name');
        const PaymentDate = searchParams.get('payment_date');

        // packages {packageType: string, amount: string, distance: string}[]

        const statements: {
            amount: number;
            package: TRunPackage;
            distance: string;
        }[] = JSON.parse(searchParams.get('statements') ?? '[]');
        const Packages = convertStatements(statements);

        const TotalPrice = calculateTotalPrice(Packages.packages);

        if (
            !HRNumber ||
            !AccountDate ||
            !Name ||
            !Packages.valid ||
            !TotalPrice.valid
        ) {
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

                    {/* START Statement Row */}
                    {Packages.packages.map((pkg, i) => (
                        <div
                            tw='flex'
                            style={{
                                fontSize: '18px',
                                position: 'absolute',
                                top: `${605 + 80 * i}px`,
                                left: '110px',
                            }}
                            key={i}
                        >
                            <div
                                style={{
                                    fontSize: '18px',
                                    position: 'relative',
                                    left: '0px',
                                    whiteSpace: 'pre-wrap',
                                    lineHeight: '-0.5',
                                }}
                                tw='flex flex-col font-bold'
                            >
                                <p>
                                    ค่าสมัครงานวิ่ง อินทาเนียรัน 2024 วันที่
                                    21.01.2024
                                </p>
                                <p>
                                    ประเภท {pkg.packageText} ระยะวิ่ง{' '}
                                    {pkg.distance} km
                                </p>
                            </div>

                            {/* price amount */}
                            <p
                                style={{
                                    fontSize: '18px',
                                    position: 'relative',
                                    left: '105px',
                                }}
                                tw='font-bold'
                            >
                                {pkg.beforeVAT}
                            </p>

                            <p
                                style={{
                                    fontSize: '18px',
                                    position: 'relative',
                                    left: '215px',
                                }}
                                tw='font-bold'
                            >
                                {pkg.amount}
                            </p>

                            <p
                                style={{
                                    fontSize: '18px',
                                    position: 'relative',
                                    left: '325px',
                                }}
                                tw='font-bold'
                            >
                                {pkg.totalPrice}
                            </p>
                        </div>
                    ))}
                    {/* END Statement Row */}

                    {/* START Total */}
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
                        {TotalPrice.beforeVAT}
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
                        {TotalPrice.VAT}
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
                        {TotalPrice.totalPrice}
                    </p>

                    {/* END Total */}

                    {/* FOOTER text */}
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
                        {convert(TotalPrice.totalPrice)}
                    </p>

                    {/* date */}

                    <p
                        style={{
                            fontSize: '16px',
                            position: 'absolute',
                            top: '863px',
                            left: '245px',
                            textAlign: 'center',
                        }}
                        tw='font-bold'
                    >
                        {PaymentDate}
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
