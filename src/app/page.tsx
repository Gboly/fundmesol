import { Roboto, Roboto_Flex } from 'next/font/google';
import React from 'react'
import "./page.css"
import Image from 'next/image';

export const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  weight: "200",
});
export const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

const intro: string = `Harness the power of a global community to accelerate your project's success. Whether you’re raising funds for innovation, social impact, or creative ventures, by simply creating a campaign, you can connect with passionate supporters worldwide. All campaigns run on the fast, secure, and scalable Solana blockchain—ensuring transparency, trust, and efficiency every step of the way.`


const Home = () => {
  return (
    <main className='home'>
      <section className='intro'>
        <p className={robotoFlex.className}>Fuel Dreams, Forge Impact</p>
        <Image src={"/communityLight.png"} alt='Three rows of user emojis' width={1640} height={924} className='for-light'/>
        <Image src={"/communityDark.png"} alt='Three rows of user emojis' width={1640} height={924} className='for-dark'/>
        <p className={roboto.className}>{intro}</p>
        <button>Create a campaign</button>
      </section>

      <section className='trending'>

      </section>
    </main>
  )
}

export default Home