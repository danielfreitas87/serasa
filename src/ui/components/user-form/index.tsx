import React, { useState } from 'react'
import {
  Form,
  Input,
  Checkbox,
  Button,
} from 'antd'
import { StyledGroupedRadio } from '../common'
import { DocumentEnum } from '../../../enums'
import { IRadio } from '../../../interfaces'
import { capitalizeFirstLetter } from '../../../helpers'

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

export const UserForm = ({
  plantations,
}: UserFormProps) => {
  const [form] = Form.useForm()
  const [
    radioDocumentLabel,
    setRadioDocumentLabel,
  ] = useState<string>(DocumentEnum.CPF)

  const onChangeDocument = (
    radio: IRadio | undefined,
  ) => {
    if (radio) {
      setRadioDocumentLabel(
        radio?.label,
      )
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
      <Form.Item
        label='Nome'
        rules={[
          {
            required: true,
            message:
              'Favor digitar o nome!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label='Documento'>
        <StyledGroupedRadio
          radios={documents}
          onChange={onChangeDocument}
        />
      </Form.Item>
      <Form.Item
        name='document'
        label={radioDocumentLabel}
      >
        <Input />
      </Form.Item>
      <Form.Item label='Estado'>
        <Input />
      </Form.Item>
      <Form.Item
        label='Cidade'
        rules={[
          {
            required: true,
            message:
              'Favor digitar a cidade!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label='Área Total em Hectares'>
        <Input />
      </Form.Item>
      <Form.Item label='Área Agricultável em Hectares'>
        <Input />
      </Form.Item>
      <Form.Item label='Área de Vegetação em Hectares'>
        <Input />
      </Form.Item>
      <Form.Item
        valuePropName='checked'
        label='Área Total em Hectares'
      >
        {plantations.map(
          (plantation, index) => (
            <Checkbox key={index}>
              {capitalizeFirstLetter(
                plantation,
              )}
            </Checkbox>
          ),
        )}
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          type='primary'
          htmlType='submit'
        >
          Acessar
        </Button>
      </Form.Item>
    </Form>
  )
}
