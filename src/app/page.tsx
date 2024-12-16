import React from 'react'
import "./page.css"
import Intro from '@/sections/home/intro/Intro';
import Trending from '@/sections/home/trending/Trending';
import Campaigns from '@/sections/home/campaigns/Campaigns';



const Home = () => {
  return (
    <main className='home'>
      <Intro />
      <Trending />
      <Campaigns />
    </main>
  )
}

export default Home