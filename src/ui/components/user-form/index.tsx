import React, { useState } from 'react'
import { Form, Input, Checkbox } from 'antd'
import { StyledButton, StyledGroupedRadio } from '@components'
import { DocumentEnum } from '@enums'
import { IRadio } from '@interfaces'
import { capitalizeFirstLetter } from '@helpers'

const { Item, useForm } = Form

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

type UserFormProps = {
  plantations: Array<string>
}

export function UserForm({ plantations }: UserFormProps) {
  const [form] = useForm()
  const [radioDocumentLabel, setRadioDocumentLabel] = useState<string>(
    DocumentEnum.CPF,
  )

  const onChangeDocument = (radio: IRadio | undefined) => {
    if (radio) {
      setRadioDocumentLabel(radio?.label)
    }
  }
  return (
    <Form
      name='basic'
      autoComplete='off'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 12 }}
      initialValues={{
        remember: true,
      }}
      form={form}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
    >
      <Item
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
      <Item label='Documento'>
        <StyledGroupedRadio radios={documents} onChange={onChangeDocument} />
      </Item>
      <Item name='document' label={radioDocumentLabel}>
        <Input />
      </Item>
      <Item label='Estado'>
        <Input />
      </Item>
      <Item
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
      <Item label='Área Total em Hectares'>
        <Input />
      </Item>
      <Item label='Área Agricultável em Hectares'>
        <Input />
      </Item>
      <Item label='Área de Vegetação em Hectares'>
        <Input />
      </Item>
      <Item valuePropName='checked' label='Área Total em Hectares'>
        {plantations.map((plantation, index) => (
          <Checkbox key={index}>{capitalizeFirstLetter(plantation)}</Checkbox>
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
