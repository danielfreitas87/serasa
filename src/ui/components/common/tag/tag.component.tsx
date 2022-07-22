import React, { Component } from 'react'
import { Tag as AntTag } from 'antd'
import { capitalizeFirstLetter } from '@helpers'
import { ITag } from '@interfaces'

export class Tag extends Component<ITag> {
  constructor(props: ITag) {
    super(props)
  }

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { label, tagColor, ...rest } = this.props
    return <AntTag {...rest}>{capitalizeFirstLetter(label)}</AntTag>
  }
}
