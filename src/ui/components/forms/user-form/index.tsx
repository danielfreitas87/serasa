import React, { Component, createRef } from 'react'
import { Form, Input, Checkbox, FormInstance } from 'antd'
import { StyledButton, StyledGroupedRadio } from '@components'
import { capitalizeFirstLetter } from '@helpers'
import { DocumentEnum } from '@enums'
import { IRadio } from '@interfaces'

const { Item } = Form

const documents = [
  {
    label: DocumentEnum.CPF,
    value: DocumentEnum.CPF,
    checked: true,
  },
  {
    label: DocumentEnum.CNPJ,
    value: DocumentEnum.CNPJ,
  },
]

const crops = ['soja', 'milho', 'algodão', 'café', 'cana de açúcar']

export class UserForm extends Component {
  formRef = createRef<FormInstance>()

  state = {
    radioLabel: DocumentEnum.CPF,
  }

  onChangeDocument = (radioLabel: IRadio | undefined) => {
    if (radioLabel) {
      this.setState({ radioLabel })
    }
  }

  render() {
    const { radioLabel } = this.state
    return (
      <Form
        name='basic'
        autoComplete='off'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 12 }}
        initialValues={{
          remember: true,
        }}
        ref={this.formRef}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
      >
        <Item
          name='name'
          label='Nome'
          rules={[
            {
              required: true,
              message: 'Favor digitar o nome!',
            },
          ]}
        >
          <Input />
        </Item>
        <Item name='documentType' label='Documento'>
          <StyledGroupedRadio
            radios={documents}
            onChange={this.onChangeDocument}
          />
        </Item>
        <Item name='document' label={radioLabel}>
          <Input />
        </Item>
        <Item name='state' label='Estado'>
          <Input />
        </Item>
        <Item
          name='city'
          label='Cidade'
          rules={[
            {
              required: true,
              message: 'Favor digitar a cidade!',
            },
          ]}
        >
          <Input />
        </Item>
        <Item name='totalAreaAcre' label='Área Total em Hectares'>
          <Input />
        </Item>
        <Item name='farmableAreaAcre' label='Área Agricultável em Hectares'>
          <Input />
        </Item>
        <Item name='vegetationAreaAcre' label='Área de Vegetação em Hectares'>
          <Input />
        </Item>
        <Item
          name='growingTypes'
          valuePropName='checked'
          label='Culturas plantadas'
        >
          {crops.map((crop, index) => (
            <Checkbox key={index}>{capitalizeFirstLetter(crop)}</Checkbox>
          ))}
        </Item>
        <Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <StyledButton label='CADASTRAR' />
        </Item>
      </Form>
    )
  }
}
