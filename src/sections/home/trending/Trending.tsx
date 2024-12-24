"use client"
import React, { useRef, useState } from 'react'
import "./trending.css"
import FilterListIcon from '@mui/icons-material/FilterList';
import Select from '@/components/select/Select';
import { ArrayOfStrings} from '@/app/types';
import { robotoFlex } from '@/app/fonts';
import CampaignCard from '@/components/campaign-card/CampaignCard';
import Icon from '@/components/icon/Icon';
import ScrollButtons from '@/components/scroll-buttons/ScrollButtons';
import { campaignsData } from '@/utils/dummydata';

const trendingTimeIntervals: ArrayOfStrings = ["24h", "12h", "6h", "1h", "30m", 
"10m", "5m" ]

interface canScrollState {
  prevIsDisabled: boolean,
  nextIsDisabled: boolean
}

const Trending = () => {
  const cardsContainerRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLElement | null>(null);

  const [{prevIsDisabled, nextIsDisabled}, setCanClickToScroll] = useState<canScrollState>({prevIsDisabled: true, nextIsDisabled: false})

  // Since the actual fetched trending campaign's data would include more fields but the type uses just specific fields. They need to be extracted by mapping and returning just these fields.
  const trendingData = campaignsData
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
    <section className='trending'>
        <div>
          <span className={robotoFlex.className}>Trending Campaigns</span>
          <div>
            <Icon icon={FilterListIcon} />
            <Select value='30m' label='30m' options={trendingTimeIntervals} />
          </div>
        </div>
        <div className='cards' ref={cardsContainerRef} onScroll={checkCanClickToScroll}>
            {trendingData.map(({id, ...card}) => <CampaignCard key={id} ref={cardRef} {...{id, ...card}}/>)}
        </div>
        <div>
          <ScrollButtons {...{ref:cardsContainerRef, getCardWidth, getContainerWidth, cardsTotal: trendingData.length, prevIsDisabled, nextIsDisabled}} />
        </div>
      </section>
  )
}

export default Trending