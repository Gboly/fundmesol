import React from 'react'
import "./intro.css"
import Image from 'next/image';
import { robotoFlex } from '@/app/fonts';


const intro: string = `Harness the power of a global community to accelerate your project's success. Whether you’re raising funds for innovation, social impact, or creative ventures, by simply creating a campaign, you can connect with passionate supporters worldwide. All campaigns run on the fast, secure, and scalable Solana blockchain—ensuring transparency, trust, and efficiency every step of the way.`

const Intro = () => {
  return (
    <section className='intro'>
    <p className={robotoFlex.className}>Fuel Dreams, Forge Impact</p>
    <Image src={"/communityLight.png"} alt='Three rows of user emojis' width={1640} height={924} className='for-light'/>
    <Image src={"/communityDark.png"} alt='Three rows of user emojis' width={1640} height={924} className='for-dark'/>
    <p>{intro}</p>
    <button>Create a campaign</button>
  </section>
  )
}

export default Intro