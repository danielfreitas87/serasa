import React from 'react'
import { Pie, PieConfig } from '@ant-design/charts'

export const PieChart = ({ data }: any) => {
  const config: PieConfig = {
    data,
    width: 200,
    height: 200,
    appendPadding: 10,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  }

  return <Pie {...config} />
}
