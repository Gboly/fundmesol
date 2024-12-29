"use client"
import React, { useRef, useState } from 'react'
import CampaignCard from '../campaign-card/CampaignCard';
import ScrollButtons from '../scroll-buttons/ScrollButtons';
import { campaignCardsDetails } from '@/app/types';
import "./cards-slideshow.css"

interface canScrollState {
    prevIsDisabled: boolean,
    nextIsDisabled: boolean
  }

interface props {
    cardsData: campaignCardsDetails
}

const CardsSlideshow = ({cardsData}: props) => {
    const cardsContainerRef = useRef<HTMLDivElement | null>(null);
    const cardRef = useRef<HTMLElement | null>(null);
  
    const [{prevIsDisabled, nextIsDisabled}, setCanClickToScroll] = useState<canScrollState>({prevIsDisabled: true, nextIsDisabled: false})
  
    // Since the actual fetched trending campaign's data would include more fields but the type uses just specific fields. They need to be extracted by mapping and returning just these fields.
    const getContainerWidth: ()=> number = ()=> cardsContainerRef.current?.offsetWidth || 0
    const getCardWidth: ()=> number = ()=> cardRef.current?.offsetWidth || 0
  
    const checkCanClickToScroll: () => void = () => {
      const scrollPosition = cardsContainerRef.current?.scrollLeft || 0
      const padding = 16
      const isViewed = scrollPosition + getContainerWidth()
      const containerScrollWidth = cardsContainerRef.current?.scrollWidth || 0
      setCanClickToScroll({prevIsDisabled: scrollPosition <= padding, nextIsDisabled: containerScrollWidth - isViewed <= padding})
    }


  return (
    <>
        <div className='cards' ref={cardsContainerRef} onScroll={checkCanClickToScroll}>
            {cardsData.map(({id, ...card}) => <CampaignCard key={id} ref={cardRef} {...{id, ...card}}/>)}
        </div>
        <div className='scroll-buttons-container'>
          <ScrollButtons {...{ref:cardsContainerRef, getCardWidth, getContainerWidth, cardsTotal: cardsData.length, prevIsDisabled, nextIsDisabled}} />
        </div>
    </>
  )
}

export default CardsSlideshow