import { convert } from 'baht';
import { ImageResponse } from 'next/og';

import {
    calculateTotalPrice,
    getRunPrice,
    PackageText,
    roundToTwo,
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

        // package 1
        const RunPackage1: TRunPackage = searchParams.get(
            'run_package_1'
        ) as TRunPackage;
        const RunAmount1 = searchParams.get('run_amount_1');
        const RunDistance1 = searchParams.get('run_distance_1');

        // package 2
        const RunPackage2: TRunPackage = searchParams.get(
            'run_package_2'
        ) as TRunPackage;
        const RunAmount2 = searchParams.get('run_amount_2');
        const RunDistance2 = searchParams.get('run_distance_2');

        // package 3
        const RunPackage3: TRunPackage = searchParams.get(
            'run_package_3'
        ) as TRunPackage;
        const RunAmount3 = searchParams.get('run_amount_3');
        const RunDistance3 = searchParams.get('run_distance_3');

        // CONVERT HERE

        const Package1 = getRunPrice({
            packageType: RunPackage1,
            amount: RunAmount1,
            distance: RunDistance1,
        });

        const Package2 = getRunPrice({
            packageType: RunPackage2,
            amount: RunAmount2,
            distance: RunDistance2,
        });

        const Package3 = getRunPrice({
            packageType: RunPackage3,
            amount: RunAmount3,
            distance: RunDistance3,
        });

        const TotalPrice = calculateTotalPrice([Package1, Package2, Package3]);

        if (
            !HRNumber ||
            !AccountDate ||
            !Name ||
            !Package1.valid ||
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

                    {/* START Statement Row 1 */}
                    <div
                        tw='flex'
                        style={{
                            fontSize: '18px',
                            position: 'absolute',
                            top: '605px',
                            left: '110px',
                        }}
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
                                ประเภท {Package1.packageText} ระยะวิ่ง{' '}
                                {Package1.distance} km
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
                            {Package1.beforeVAT}
                        </p>

                        <p
                            style={{
                                fontSize: '18px',
                                position: 'relative',
                                left: '215px',
                            }}
                            tw='font-bold'
                        >
                            {Package1.amount}
                        </p>

                        <p
                            style={{
                                fontSize: '18px',
                                position: 'relative',
                                left: '325px',
                            }}
                            tw='font-bold'
                        >
                            {Package1.totalPrice}
                        </p>
                    </div>
                    {/* END Statement Row 1 */}

                    {/* START Statement Row 2 */}
                    {Package2.valid && (
                        <div
                            tw='flex'
                            style={{
                                fontSize: '18px',
                                position: 'absolute',
                                top: '690px',
                                left: '110px',
                            }}
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
                                    ประเภท {Package2.packageText} ระยะวิ่ง{' '}
                                    {Package2.distance} km
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
                                {Package2.beforeVAT}
                            </p>

                            <p
                                style={{
                                    fontSize: '18px',
                                    position: 'relative',
                                    left: '215px',
                                }}
                                tw='font-bold'
                            >
                                {Package2.amount}
                            </p>

                            <p
                                style={{
                                    fontSize: '18px',
                                    position: 'relative',
                                    left: '325px',
                                }}
                                tw='font-bold'
                            >
                                {Package2.totalPrice}
                            </p>
                        </div>
                    )}
                    {/* END Statement Row 2 */}

                    {/* START Statement Row 3 */}
                    {Package3.valid && (
                        <div
                            tw='flex'
                            style={{
                                fontSize: '18px',
                                position: 'absolute',
                                top: '770px',
                                left: '110px',
                            }}
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
                                    ประเภท {Package3.packageText} ระยะวิ่ง{' '}
                                    {Package3.distance} km
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
                                {Package3.beforeVAT}
                            </p>

                            <p
                                style={{
                                    fontSize: '18px',
                                    position: 'relative',
                                    left: '215px',
                                }}
                                tw='font-bold'
                            >
                                {Package3.amount}
                            </p>

                            <p
                                style={{
                                    fontSize: '18px',
                                    position: 'relative',
                                    left: '325px',
                                }}
                                tw='font-bold'
                            >
                                {Package3.totalPrice}
                            </p>
                        </div>
                    )}
                    {/* END Statement Row 3 */}

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
                        {convert(Package1.price ?? 0 * (Package1.amount ?? 0))}
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
