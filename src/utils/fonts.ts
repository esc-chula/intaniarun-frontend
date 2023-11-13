import { IBM_Plex_Sans_Thai, Jockey_One } from 'next/font/google';

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
    subsets: ['latin', 'thai'],
    weight: ['100', '200', '300', '400', '500', '600', '700'],
});

const jockeyOne = Jockey_One({ subsets: ['latin'], weight: '400' });

export { ibmPlexSansThai, jockeyOne };
