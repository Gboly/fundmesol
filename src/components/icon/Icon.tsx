import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React from 'react'
import "./icon.css"

interface props {
    icon: OverridableComponent<SvgIconTypeMap<object, "svg">> & {muiName: string};
}
const Icon = ({icon: Icon}: props) => {
  return (
    <i className='icon'>
        <Icon style={{ color: "inherit", fontSize: "inherit" }} />
    </i>
  )
}

export default Icon