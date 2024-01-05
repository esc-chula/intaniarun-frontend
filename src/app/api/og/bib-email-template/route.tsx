import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(req: Request) {
    try {
        const fontData = await fetch(
            new URL('./CHULALONGKORNBold.otf', import.meta.url)
        ).then((res) => res.arrayBuffer());

        const origin = new URL(req.url).origin;
        // info
        const { searchParams } = new URL(req.url);

        // basic info
        const bibNumber = searchParams.get('bib_number');
        const name = searchParams.get('name');

        return new ImageResponse(
            (
                <div
                    style={{
                        fontFamily: '"CHULALONGKORN"',
                    }}
                    tw='w-full h-full flex items-center justify-center relative'
                >
                    <img
                        src={`${origin}/bib-email-template.png`}
                        style={{
                            objectFit: 'cover',
                        }}
                        tw='w-full h-full absolute inset-0'
                    />

                    <div
                        tw='flex flex-col items-center'
                        style={{
                            position: 'absolute',
                            top: 220,
                            right: 200,
                        }}
                    >
                        <h1
                            style={{
                                color: 'black',
                                fontSize: 180,
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}
                        >
                            {bibNumber}
                        </h1>

                        <h1
                            style={{
                                color: 'black',
                                fontSize: 60,
                                fontWeight: 'bold',
                                textAlign: 'center',
                                marginTop: -40,
                            }}
                            tw='uppercase'
                        >
                            {name}
                        </h1>
                    </div>
                </div>
            ),
            {
                width: 1192,
                height: 851,
                fonts: [
                    {
                        name: 'CHULALONGKORN',
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
