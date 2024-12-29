"use client"
import React from 'react'
import "./trending.css"
import { ArrayOfStrings} from '@/app/types';
import { campaignsData } from '@/utils/dummydata';
import TitleFilter from '@/components/title-filter/TitleFilter';
import CardsSlideshow from '@/components/cards-slideshow/CardsSlideshow';

const trendingTimeIntervals: ArrayOfStrings = ["24h", "12h", "6h", "1h", "30m", 
"10m", "5m" ]

const Trending = () => {

  return (
    <section className='trending'>
        <TitleFilter title='Trending campaigns' value='30m' label='30m' options={trendingTimeIntervals}/>
        <CardsSlideshow cardsData={campaignsData} />
      </section>
  )
}

export default Trending