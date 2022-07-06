import React, { Component } from 'react'
import { Radio, RadioChangeEvent } from 'antd'
import { StyledRadio } from '../inputs'
import { IRadio } from '../../../../interfaces'

const { Group } = Radio

interface GroupedRadioProps {
  radios: Array<IRadio>
  onChange: (value: IRadio | undefined) => void
}

const setFirstChecked = (radios: Array<IRadio>) =>
  radios.find((radio) => radio.checked)

export class GroupedRadio extends Component<GroupedRadioProps> {
  state = {
    checked: setFirstChecked(this.props.radios),
  }

  onChangeValue = ({ target: { value } }: RadioChangeEvent) => {
    const { radios, onChange } = this.props
    const checked = radios.find((radio) => radio.value === value)
    this.setState({ checked })
    onChange(checked)
  }

  render() {
    const { checked } = this.state
    const { radios } = this.props
    return (
      <Group
        buttonStyle='solid'
        value={checked?.value}
        onChange={this.onChangeValue}
      >
        {radios.map((radio, index) => (
          <StyledRadio key={index} value={radio.value} label={radio.label} />
        ))}
      </Group>
    )
  }
}
