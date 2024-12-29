import { Box, CircularProgress, SxProps, Typography } from '@mui/material'
import React from 'react'

interface propType {
  value: number,
  sx: SxProps,
  size: number,
  thickness: number
}

const CircularProgressWithLabel = (props: propType) => {
  const {size, thickness} = props;

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant="determinate"
        {...{size, thickness}}
        sx={{color: "rgba(121, 121, 121, .3)"}}
        value={100}
      />
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          className='progress-label'
          sx={{ color: 'text.secondary'}}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  )
}

export default CircularProgressWithLabel