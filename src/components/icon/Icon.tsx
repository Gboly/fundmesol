import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React from 'react'
import "./icon.css"

interface props {
    icon: OverridableComponent<SvgIconTypeMap<object, "svg">> & {muiName: string},
    onClick?: () => void,
    disabled?: boolean,
}
const Icon = ({icon: Icon, onClick, disabled}: props) => {
  return (
    <i className={`icon ${onClick ? "icon-hover" : "" } ${disabled ? "disabled" : ""}`} onClick={onClick} >
        <Icon style={{ color: "inherit", fontSize: "inherit" }} />
    </i>
  )
}

export default Icon