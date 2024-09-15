import { Tooltip } from '@mui/material'
import React from 'react'
import { EllipsisText } from './PostBox.styles'

export const EllipsisWithTooltip = ({ text }: { text: string }) => {
  return (
    <Tooltip title={text} arrow>
      <EllipsisText variant="h6">
        {text}
      </EllipsisText>
    </Tooltip>
  )
}