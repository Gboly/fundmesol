import React from 'react'
import FaIcon from '../fa-icon/FaIcon'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons/faArrowUpFromBracket'
import "./fund-share-buttons.css"

const FundShareButtons = () => {
  return (
    <div className='fund-share-buttons'>
      <button>Fund</button>
      <button><FaIcon icon={faArrowUpFromBracket} /></button>
    </div>
  )
}

export default FundShareButtons