import React, { Component } from 'react'
import { Radio, RadioChangeEvent, RadioGroupProps } from 'antd'

const { Group } = Radio

export class RadioGroup extends Component<RadioGroupProps> {
  constructor(props: RadioGroupProps) {
    super(props)
  }

  onChangeValue = (event: RadioChangeEvent) =>
    this.props.onChange && this.props.onChange(event)

  render() {
    const { value, ...rest } = this.props
    return (
      <Group
        optionType='button'
        buttonStyle='solid'
        options={value}
        onChange={this.onChangeValue}
        {...rest}
      />
    )
  }
}
