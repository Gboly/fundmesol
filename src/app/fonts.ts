import { Roboto, Roboto_Flex } from 'next/font/google';

export const robotoFlex = Roboto_Flex({
    subsets: ["latin"],
    weight: "200",
});

export const roboto = Roboto({
    subsets: ["latin"],
    weight: "400",
});