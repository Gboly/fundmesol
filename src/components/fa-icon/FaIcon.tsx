import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./fa-icon.css"

interface FaIconProps {
    icon: IconDefinition
  }

const FaIcon = ({icon}: FaIconProps) => {
  return (
    <FontAwesomeIcon icon={icon} size='1x' className={`fa-icon-custom`} />
  )
}

export default FaIcon