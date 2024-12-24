    import { robotoFlex } from '@/app/fonts'
import CampaignCard from '@/components/campaign-card/CampaignCard'
import React from 'react'
import "./campaigns.css"
import SearchIcon from '@mui/icons-material/Search';
import Icon from '@/components/icon/Icon';
import { campaignsData as data } from '@/utils/dummydata';
    
    const Campaigns = () => {

      // This would be fetched from DB later
      const campaignsData = data

      return (
        <section className='campaigns'>
        <div>
          <span className={robotoFlex.className}>Campaigns</span>
          <div>
          <Icon icon={SearchIcon} />
          <button>View All</button>
          <button>Create</button>
          </div>
        </div>
        <div>
        {campaignsData.map(({id, ...card}) => <CampaignCard key={id} {...{id, ...card}}/>)}
        </div>
      </section>
      )
    }
    
    export default Campaigns