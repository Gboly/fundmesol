import React from 'react'
import "./select.css"
import { ArrayOfStrings } from '@/app/types';

interface SelectProps {
    value: string;
    label: string;
    options: ArrayOfStrings
}

const Select = ({value, label, options}: SelectProps) => {
  return (
    <>
    <select
      className="select"
      name={label}
      id={label}
      defaultValue={value}
      //value={value}
      //onChange={handleChange}
    >
      {(options || []).map((time, index) => (
        <option key={index} value={time}>
          {time}
        </option>
      ))}
    </select>
  </>
  )
}

export default Select