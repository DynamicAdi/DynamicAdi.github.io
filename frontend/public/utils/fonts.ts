import { Inter, Source_Sans_3, DM_Sans } from "next/font/google";



export const local = DM_Sans({
    weight: ['300','400', '500', '600', '700', '800'],
    subsets: ['latin'],
    variable: '--dm-sans'

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
