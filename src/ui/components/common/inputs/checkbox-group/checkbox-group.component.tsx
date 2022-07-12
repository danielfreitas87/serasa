import React, { Component } from 'react'
import { Checkbox } from 'antd'
import { CheckboxGroupProps } from 'antd/lib/checkbox'

const { Group } = Checkbox

export class CheckboxGroup extends Component<CheckboxGroupProps> {
  constructor(props: CheckboxGroupProps) {
    super(props)
  }

  render() {
    return <Group {...this.props} />
  }
}
