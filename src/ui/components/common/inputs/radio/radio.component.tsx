import React from 'react'
import { Radio as AntRadio } from 'antd'
import { IRadio } from '@interfaces'

const { Button } = AntRadio

export const Radio = ({ label, className }: IRadio) => (
  <Button className={className}>{label}</Button>
)
