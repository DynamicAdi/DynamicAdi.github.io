import { Inter, Source_Sans_3 } from "next/font/google";
import localFont from "next/font/local";



export const local = localFont({
    src: [
        {
            path: './Helvetica-regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './Helvetica-bold.ttf',
            weight: '700',
            style: 'normal'
        },
        {
            path: './Helvetica-light.ttf',
            weight: '300',
            style: 'normal'
        }
    ],
    variable: '--helvetica',
})

export const source = Source_Sans_3({
    weight: ['300','400', '500', '600', '700', '800'],
    subsets: ['latin'],
    variable: '--source-sans'
})

export const inter = Inter({ 
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--inter"
});
