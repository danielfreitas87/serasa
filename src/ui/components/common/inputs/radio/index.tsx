import React from 'react'
import { Radio as AntRadio } from 'antd'
import { IRadio } from '../../../../../interfaces'

export const Radio = ({
  value,
  label,
}: IRadio) => (
  <AntRadio.Button value={value}>
    {label}
  </AntRadio.Button>
)
