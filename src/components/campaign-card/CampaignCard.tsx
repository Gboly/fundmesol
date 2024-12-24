"use client"

import { LinearProgress, linearProgressClasses, styled } from '@mui/material';
import Image from 'next/image'
import React, { Ref } from 'react'
import "./campaign-card.css"
import Icon from '../icon/Icon';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { ifDarkMode } from '@/utils/helpers';
import { cardDetails } from '@/app/types';

interface props {
  ref?: Ref<HTMLElement>
}

const CampaignCard = ({ref, image, title, solTarget, solRaised, deadline}: props & cardDetails ) => {
  return (
    <article className='campaign-card' ref={ref}>
      {/* For the width and height properties, you have to use the actual image dimensions for the image to be displayed in its best qaulity. This should be gotten during upload in the create campaign component */}
        <Image alt='campaign banner' src={image} width={1640} height={924}/>
        <div>
            <p>{title}</p>
            {/* address should be a link that takes you to a user tx history page - Campaigns and donations */}
            {/* <p>By 0x476dhsg37248738dsbgb43</p> */}
            {/* <p></p> */}
            <Progress variant="determinate" value={(solRaised/solTarget) * 100} />
            <div>
                <span>{`${solRaised}sol raised`}</span>
                <span>{deadline && `Ends in ${deadline}`}</span>
            </div>
            <div>
              <button>Support</button>
              <button><Icon icon={ContentCopyIcon} /></button>
            </div>
        </div>
    </article>
  )
}

const Progress = styled(LinearProgress)(() => ({
    height: 5,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: ifDarkMode() ? "#121212" : "#f4f8ff",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#9945ff',
    },
  }));

export default CampaignCard