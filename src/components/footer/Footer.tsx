"use client"
import React, { useState } from 'react'
import Brand from '../brand/Brand'
import "./footer.css"
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord'
import Icon from '../icon/Icon'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { isEmail } from '@/utils/helpers'
import FaIcon from '../fa-icon/FaIcon'

const socials = [
    {name: "x", icon: faXTwitter},
    {name: "instagram", icon: faInstagram},
    {name: "discord", icon: faDiscord},
    ]

const Footer = () => {
    const [email, setEmail] = useState("")

  return (
    <section className={"footer"}>
        <aside>
            <input type="email" placeholder='Enter email address' value={email} onChange={(e) => setEmail(e.target.value)} />
            <Icon icon={KeyboardBackspaceIcon} disabled={!isEmail(email)} />
        </aside>
        <div>
            <Brand />
            <div className='socials'>
                {socials.map(({name, icon}) => <div key={name} className={`fa-icon-round-bg ${name}`}>
                    <FaIcon icon={icon}/>
                    </div>)}
            </div>
        </div>
        <div className='links'>
            <div>
                <a href="#">Home</a>
                <a href="#">Categories</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </div>
        <div className='thin-line'></div>
        <div>Copyright 2024. All rights reserved</div>
    </section>
  )
}

export default Footer