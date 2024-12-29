import { Economica, Roboto, Roboto_Flex } from 'next/font/google';

export const robotoFlex = Roboto_Flex({
    subsets: ["latin"],
    weight: ["200", "400", "600"]
});

export const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export const economica = Economica({
    subsets: ["latin"],
    weight: "700",
});