import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(req: Request) {
    try {
        const origin = new URL(req.url).origin;

        return new ImageResponse(
            (
                <div tw='w-full h-full flex items-center justify-center relative'>
                    <img
                        src={`${origin}/bib-email-template.png`}
                        style={{
                            objectFit: 'cover',
                        }}
                        tw='w-full h-full absolute inset-0'
                    />
                </div>
            ),
            {
                width: 1192,
                height: 851,
            }
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
