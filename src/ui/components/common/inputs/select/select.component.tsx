import React, { Component } from 'react'
import { Select as AntSelect, SelectProps } from 'antd'

const { Option } = AntSelect

const defaultProps = {
  placeholder: 'Selecione uma opção...',
}

export class Select extends Component<SelectProps> {
  static defaultProps: Partial<SelectProps> = defaultProps

  constructor(props: SelectProps) {
    super(props)
  }

  render() {
    const { options, ...rest } = this.props
    return (
      <AntSelect {...rest}>
        {options &&
          options.map((option, index: number) => (
            <Option key={index} value={option.value}>
              {option.value}
            </Option>
          ))}
      </AntSelect>
    )
  }
}
