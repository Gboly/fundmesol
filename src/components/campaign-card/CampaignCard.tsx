"use client"

import { LinearProgress, linearProgressClasses, styled } from '@mui/material';
import Image from 'next/image'
import React from 'react'
import "./campaign-card.css"
import Icon from '../icon/Icon';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const test = ["$Moodeng promotion $Moodeng promotion", "$Moodeng promotion $Moodeng", "$Moodeng promotion"]

interface props {
  pos: number
}

const CampaignCard = ({pos}:props) => {
  return (
    <article className='campaign-card'>
        <Image alt='campaign banner' src={"/communityLight.png"}  width={1640} height={924} />
        <div>
            <p>{test[pos]}</p>
            {/* address should be a link that takes you to a user tx history page - Campaigns and donations */}
            {/* <p>By 0x476dhsg37248738dsbgb43</p> */}
            <p></p>
            <Progress variant="determinate" value={20} />
            <div>
                <span>0.65sol raised</span>
                <span>Closes in 20hrs</span>
            </div>
            <div>
              <button>Support</button>
              <button><Icon icon={ContentCopyIcon} /></button>
            </div>
        </div>
    </article>
  )
}

const Progress = styled(LinearProgress)(({ theme }) => ({
    height: 6,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
      ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#9945ff',
      ...theme.applyStyles('dark', {
        backgroundColor: '#9945ff',
      }),
    },
  }));

export default CampaignCard