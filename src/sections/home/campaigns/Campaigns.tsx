    import { robotoFlex } from '@/app/fonts'
import CampaignCard from '@/components/campaign-card/CampaignCard'
import React from 'react'
import "./campaigns.css"
import SearchIcon from '@mui/icons-material/Search';
import Icon from '@/components/icon/Icon';
    
    const Campaigns = () => {
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
            <CampaignCard pos={0}/>
            <CampaignCard pos={1}/>
            <CampaignCard pos={2}/>
            <CampaignCard pos={2}/>
            <CampaignCard pos={0}/>
            <CampaignCard pos={1}/>
        </div>
      </section>
      )
    }
    
    export default Campaigns