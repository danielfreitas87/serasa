import React, { Component, createRef } from 'react'
import { Form, Input, Col, Row, RadioChangeEvent, FormInstance } from 'antd'
import MaskedInput from 'antd-mask-input'
import { RootState } from '@store'
import { connect } from 'react-redux'
import {
  StyledButton,
  StyledRadioGroup,
  StyledInputNumber,
  StyledSelect,
  StyledCheckboxGroup,
  StyledDivider,
} from '@components'
import { DocumentEnum } from '@enums'
import { IColSpan, IProducer } from '@interfaces'
import { cnpjMask, cpfMask, producerEditRules } from '@validations'
import { fetchCities, fetchCrops, fetchUFs, setEditingProducer } from '@actions'
import {
  PRODUCER_FORM_DOCUMENT_TYPES,
  PRODUCER_FORM_HECTARES,
  PRODUCER_FORM_INITIAL_VALUES,
} from './producer-form.mocked'
import { DefaultOptionType } from 'antd/lib/select'

const { Item } = Form

const responsiveDocumentType: IColSpan = {
  xs: { span: 24 },
  sm: { span: 10 },
  md: { span: 11 },
  lg: { span: 8 },
}

const responsiveDocument: IColSpan = {
  xs: { span: 24 },
  sm: { span: 14 },
  md: { span: 13 },
  lg: { span: 16 },
}

const responsiveState: IColSpan = {
  xs: { span: 24 },
  sm: { span: 9 },
  md: { span: 10 },
  lg: { span: 7 },
}

const responsiveCity: IColSpan = {
  xs: { span: 24 },
  sm: { span: 14 },
  md: { span: 13 },
  lg: { span: 16 },
}

const responsiveTotalAreaAcre: IColSpan = {
  xs: { span: 24 },
  sm: { span: 12 },
  md: { span: 12 },
  lg: { span: 8 },
  xl: { span: 8 },
}

const responsiveFarmableAreaAcre: IColSpan = {
  xs: { span: 24 },
  sm: { span: 11 },
  md: { span: 11 },
  lg: { span: 7 },
  xl: { span: 7 },
}

const responsiveVegetationAreaAcre: IColSpan = {
  xs: { span: 24 },
  sm: { span: 11 },
  md: { span: 11 },
  lg: { span: 7 },
  xl: { span: 7 },
}

type Props = {
  editingProducer: IProducer | null
  crops: Array<string>
  ufs: Array<DefaultOptionType>
  cities: Array<DefaultOptionType>
  citiesLoading: boolean
  fetchCropsDispatched: () => void
  fetchCitiesDispatched: (UF: string) => void
  fetchUFsDispatched: () => void
  setEditingProducerDispatched: (producer: IProducer | null) => void
  onFinish: (value: any) => void
}

type State = {
  radioLabel: DocumentEnum
}

class ProducerForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      radioLabel: DocumentEnum.CPF,
    }

    this.onChangeDocumentType = this.onChangeDocumentType.bind(this)
  }

  formRef = createRef<FormInstance>()

  componentDidMount() {
    if (this.props.editingProducer) {
      this.formRef.current?.setFieldsValue(this.props.editingProducer)
    }
    this.props.fetchCropsDispatched()
    this.props.fetchUFsDispatched()
  }

  setRadioValue = () =>
    this.props.editingProducer &&
    this.props.editingProducer.document.length > 14
      ? DocumentEnum.CNPJ
      : DocumentEnum.CPF

  filterCity = (input: string, option: any) =>
    (option?.children as unknown as string)
      .toLowerCase()
      .includes(input.toLowerCase())

  onSelectUF = (value: string) => this.props.fetchCitiesDispatched(value)

  resetDocumentValue = () => {
    this.formRef.current?.setFieldsValue({ document: '' })
  }

  onChangeDocumentType = (event: RadioChangeEvent) => {
    this.setState({ radioLabel: event.target.value as DocumentEnum })
  }

  onSubmit = (producer: IProducer) => {
    const producerKey = this.props.editingProducer?.key && {
      key: Number(this.props.editingProducer.key),
    }
    const producerWithKey = {
      ...producer,
      ...producerKey,
    }
    this.props.onFinish(producerWithKey)
  }

  setDocumentMask = () => {
    if (this.props.editingProducer)
      return this.props.editingProducer.document.length > 14
        ? cnpjMask
        : cpfMask
    return this.state.radioLabel === DocumentEnum.CPF ? cpfMask : cnpjMask
  }

  render() {
    const { crops, ufs, cities, citiesLoading, fetchCitiesDispatched } =
      this.props
    const { radioLabel } = this.state
    const {
      nameRules,
      documentRules,
      stateRules,
      cityRules,
      totalAreaAcreRules,
      farmableAreaAcreRules,
      vegetationAreaAcreRules,
      cropsRules,
    } = producerEditRules
    return (
      <Form
        name='basic'
        autoComplete='off'
        layout='vertical'
        ref={this.formRef}
        initialValues={PRODUCER_FORM_INITIAL_VALUES}
        onFinish={this.onSubmit}
        // onFinishFailed={onFinishFailed}
      >
        <Item name='name' label='Nome' rules={nameRules}>
          <Input />
        </Item>
        <Row justify='space-between'>
          <Col {...responsiveDocumentType}>
            <Item label='Documento'>
              <StyledRadioGroup
                value={PRODUCER_FORM_DOCUMENT_TYPES}
                onChange={this.onChangeDocumentType}
                defaultValue={this.setRadioValue()}
              />
            </Item>
          </Col>
          <Col {...responsiveDocument}>
            <Item name='document' label={radioLabel} rules={documentRules}>
              <MaskedInput
                mask={this.setDocumentMask()}
                value={this.props.editingProducer?.document}
              />
            </Item>
          </Col>
        </Row>
        <Row justify='space-between'>
          <Col {...responsiveState}>
            <Item name='state' label='Estado' rules={stateRules}>
              <StyledSelect
                options={ufs}
                loading={citiesLoading}
                onSelect={fetchCitiesDispatched}
              />
            </Item>
          </Col>
          <Col {...responsiveCity}>
            <Item name='city' label='Cidade' rules={cityRules}>
              <StyledSelect
                showSearch
                options={cities}
                filterOption={this.filterCity}
              />
            </Item>
          </Col>
        </Row>
        <StyledDivider label={PRODUCER_FORM_HECTARES} />
        <Row justify='space-between'>
          <Col {...responsiveFarmableAreaAcre}>
            <Item
              name='farmableAreaAcre'
              label='Agricultável'
              rules={farmableAreaAcreRules}
            >
              <StyledInputNumber min={0} />
            </Item>
          </Col>
          <Col {...responsiveVegetationAreaAcre}>
            <Item
              name='vegetationAreaAcre'
              label='Vegetação'
              rules={vegetationAreaAcreRules}
            >
              <StyledInputNumber min={0} />
            </Item>
          </Col>
          <Col {...responsiveTotalAreaAcre}>
            <Item
              name='totalAreaAcre'
              label='Total da fazenda'
              rules={totalAreaAcreRules}
            >
              <StyledInputNumber min={0} />
            </Item>
          </Col>
        </Row>
        <Item name='crops' label='Culturas plantadas' rules={cropsRules}>
          <StyledCheckboxGroup options={crops} />
        </Item>
        <Item>
          <StyledButton label='CADASTRAR' />
        </Item>
      </Form>
    )
  }
}

const mapStateToProps = ({ address, crops, producers }: RootState) => ({
  editingProducer: producers.editingProducer,
  crops: crops.crops,
  cities: address.cities,
  citiesLoading: address.loading,
  ufs: address.ufs,
})

const mapDispatchToProps = {
  fetchCropsDispatched: fetchCrops,
  fetchCitiesDispatched: fetchCities,
  fetchUFsDispatched: fetchUFs,
  setEditingProducerDispatched: setEditingProducer,
}

export const ProducerFormConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProducerForm)
