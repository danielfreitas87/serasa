import React, { useState } from 'react'
import {
  Radio,
  RadioChangeEvent,
} from 'antd'
import { StyledRadio } from '../inputs'
import { IRadio } from '../../../../interfaces'

interface GroupedRadioProps {
  radios: Array<IRadio>
  onChange: (
    e: IRadio | undefined,
  ) => void
}

const setFirstChecked = (
  radios: Array<IRadio>,
) =>
  radios.find((radio) => radio.checked)

export const GroupedRadio = ({
  radios,
  onChange,
}: GroupedRadioProps) => {
  const [checked, setChecked] =
    useState(setFirstChecked(radios))

  const onChangeValue = ({
    target: { value },
  }: RadioChangeEvent) => {
    const currentChecked = radios.find(
      (radio) => radio.value === value,
    )
    setChecked(currentChecked)
    onChange(currentChecked)
  }

  return (
    <Radio.Group
      buttonStyle='solid'
      value={checked?.value}
      onChange={onChangeValue}
    >
      {radios.map((radio, index) => (
        <StyledRadio
          key={index}
          value={radio.value}
          label={radio.label}
        />
      ))}
    </Radio.Group>
  )
}
