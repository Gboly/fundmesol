"use client"
import Image from 'next/image'
import React from 'react'
import "./page.css"
import { robotoFlex } from '../../fonts'
import CircularProgressWithLabel from '@/components/circular-progress/CircularProgress'
import { circularProgressClasses } from '@mui/material'
import FundShareButtons from '@/components/fund-share-buttons/FundShareButtons'
import { ArrayOfStrings } from '../../types'
import TitleFilter from '@/components/title-filter/TitleFilter'
import CustomPaginationActionsTable from '@/components/table/Table'
import CardsSlideshow from '@/components/cards-slideshow/CardsSlideshow'
import { campaignsData } from '@/utils/dummydata'

const story = `Unbelievably, it's the 14th year of this thing.

What is it?

Improbably, the night before Christmas, people send me photos of their domestic sleeping arrangements, which are usually highly
compromised by there being Too Many People At The Inn And Not Enough Beds (etc)

These pictures range of dangerously chaotic to hilariously austere, and it has become a form of Christmas entertainment that's
right up there with Morecambe & Wise or Die Hard.

Due to the activities of a risible manchild, I'm not posting on Twitter any more, and while I'm sure there'll be some activity 
there (and probably on Threads too) I'll be on Bluesky here.

Anyway, the point is that many people's Xmas sleeping arrangements are far, far worse than ours. Centrepoint estimate that nearly 
25,000 young people will face homelessness this winter in England alone. To that end, maybe you can spare them a donation, to help 
provide them with housing and support.`

const fundingHistoryFilterOptions: ArrayOfStrings = ["Latest", "Top"]

const Campaign = () => {
  return (
    <main className='campaign'>
        <section className='blog'>
              <p className={`${robotoFlex.className} title`}>$Xmas listing on Dexscreener</p>
              <Image alt='campaign banner' src={"/communityDark.png"} width={1640} height={924} />
              <p className='creator'>
                <span>Created by 0x9ef3gsmn36ghes</span>
                <span>February 12th, 2025.</span>
              </p>
              <div className='donation-details'>
                <CircularProgressWithLabel 
                value={20}
                size={100}
                thickness={6}
                sx={{
                  [`& .${circularProgressClasses.circle}`]: {
                    strokeLinecap: 'round',
                  },
                  color: "#9945ff",
                  position: 'absolute',
                  left: 0,
                }}
                />
                <ul>
                  <li><span>Amount raised</span> — 2.6sol</li>
                  <li><span>Goal</span> — 13sol</li>
                  <li><span>Deadline</span> — 01/01/2025</li>
                </ul>
                <FundShareButtons />
              </div>
              <p className='contributors-total'>1.6k wallets have funded this campaign so far</p>
              <div className='thin-line'></div>
              {/* <div className='story'>{story}</div> */}
              <pre className='story'>{story} <span className='see-more'>See more</span></pre>
              <FundShareButtons />  
        </section>

        <section className='funding-history'>
          <TitleFilter title='Funding History' value='latest' label='latest' options={fundingHistoryFilterOptions} />
          <CustomPaginationActionsTable />
        </section>
        
        <section className='similar-campaigns'>
            <p>Similar Campaigns</p>
            <CardsSlideshow cardsData={campaignsData} />
        </section>
    </main>
  )
}

export default Campaign