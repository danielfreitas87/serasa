import React, { Component } from 'react'
import { Popover as AntdPopover, PopoverProps } from 'antd'
import { StyledPopoverContent } from './popover-content'

type State = {
  visible: boolean
}

interface Props extends PopoverProps {
  onConfirm: () => void
  label: string
}

export class Popover extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      visible: false,
    }
  }

  onCancel = (visible: boolean) => this.setState({ visible })

  render() {
    const { children, label, onConfirm, ...rest } = this.props
    return (
      <AntdPopover
        trigger='click'
        visible={this.state.visible}
        onVisibleChange={this.onCancel}
        overlayClassName={this.props.className}
        content={
          <StyledPopoverContent
            label={label}
            onConfirm={onConfirm}
            onCancel={() => this.onCancel(false)}
          />
        }
        {...rest}
      >
        {children}
      </AntdPopover>
    )
  }
}
