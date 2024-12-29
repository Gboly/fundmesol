import { robotoFlex } from '@/app/fonts'
import React from 'react'
import "./title-filter.css"
import Icon from '../icon/Icon'
import Select from '../select/Select'
import { ArrayOfStrings } from '@/app/types'
import FilterListIcon from '@mui/icons-material/FilterList';

interface props {
    title: string,
    value: string,
    label: string,
    options: ArrayOfStrings
}

const TitleFilter = ({title, value, label, options}: props) => {
  return (
    <div className='title-filter'>
      <span className={robotoFlex.className}>{title}</span>
      <div>
        <Icon icon={FilterListIcon} />
        <Select value={value} label={label}options={options} />
      </div>
    </div>
  )
}

export default TitleFilter