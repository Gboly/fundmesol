import React from 'react'
import "./trending.css"
import FilterListIcon from '@mui/icons-material/FilterList';
import Select from '@/components/select/Select';
import { ArrayOfStrings } from '@/app/types';
import { robotoFlex } from '@/app/fonts';
import CampaignCard from '@/components/campaign-card/CampaignCard';
import Icon from '@/components/icon/Icon';

const trendingTimeIntervals: ArrayOfStrings = ["24h", "12h", "6h", "1h", "30m", 
"10m", "5m" ]

const Trending = () => {
  return (
    <section className='trending'>
        <div>
          <span className={robotoFlex.className}>Trending Campaigns</span>
          <div>
            <Icon icon={FilterListIcon} />
            <Select value='30m' label='30m' options={trendingTimeIntervals} />
          </div>
        </div>
        <div>
            <CampaignCard pos={0}/>
            <CampaignCard pos={1}/>
            <CampaignCard pos={2}/>
        </div>
      </section>
  )
}

export default Trending