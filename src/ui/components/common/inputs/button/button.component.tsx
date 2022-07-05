import React from 'react'
import { Button as AntButton } from 'antd'
import { IButton } from '@interfaces'

export const Button = ({ label, className }: IButton) => (
  <AntButton type='primary' htmlType='submit' block className={className}>
    {label}
  </AntButton>
)
