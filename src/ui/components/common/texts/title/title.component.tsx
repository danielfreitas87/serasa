import React from 'react'
import { Typography } from 'antd'
import { ITitle } from '@interfaces'

const AntTitle = Typography.Title

const DEFAULT_LEVEL = 3

export const Title = ({
  level = DEFAULT_LEVEL,
  label,
  className,
}: ITitle) => (
  <AntTitle
    level={level}
    className={className}
  >
    {label}
  </AntTitle>
)
