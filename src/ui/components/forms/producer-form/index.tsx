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
import { DocumentEnum, ProducerEnum } from '@enums'
import { IColSpan, IProducer } from '@interfaces'
import { cnpjMask, cpfMask, producerEditRules } from '@validations'
import { fetchCities, fetchCrops, fetchUFs } from '@actions'
import { DefaultOptionType } from 'antd/lib/select'
import {
  PRODUCER_FORM_DOCUMENT_TYPES,
  PRODUCER_FORM_INITIAL_VALUES,
} from './producer-form.data'

const PRODUCER_FORM_HECTARES = '* Área em hectares'

const buttonLabel = (editingPoducer: IProducer | null) =>
  editingPoducer ? 'Alterar' : 'Cadastrar'

const getRadioLabel = (editingProducer: IProducer | null) =>
  editingProducer && editingProducer.document.length > 14
    ? DocumentEnum.CNPJ
    : DocumentEnum.CPF

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

const responsiveTotalAcre: IColSpan = {
  xs: { span: 24 },
  sm: { span: 12 },
  md: { span: 12 },
  lg: { span: 8 },
  xl: { span: 8 },
}

const responsiveFarmableAcre: IColSpan = {
  xs: { span: 24 },
  sm: { span: 11 },
  md: { span: 11 },
  lg: { span: 7 },
  xl: { span: 7 },
}

const responsiveVegetationAcre: IColSpan = {
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
  onFinish: (value: any) => void
}

type State = {
  submitDisabled: boolean
  radioLabel: DocumentEnum
  document: string
}

class ProducerForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    const { editingProducer } = this.props
    this.state = {
      submitDisabled: true,
      radioLabel: getRadioLabel(editingProducer),
      document: this.props.editingProducer
        ? this.props.editingProducer.document
        : '',
    }
  }

  formRef = createRef<FormInstance>()

  componentDidMount() {
    const {
      editingProducer,
      fetchUFsDispatched,
      fetchCropsDispatched,
      fetchCitiesDispatched,
    } = this.props

    fetchCropsDispatched()
    fetchUFsDispatched()

    if (editingProducer) {
      fetchCitiesDispatched(editingProducer.state)
      this.formRef.current?.setFieldsValue(editingProducer)
    }
  }

  setRadioValue = () => {
    const { editingProducer } = this.props
    return editingProducer && editingProducer.document.length > 14
      ? DocumentEnum.CNPJ
      : DocumentEnum.CPF
  }

  filterState = (input: string, option: any) =>
    (option?.children as unknown as string)
      .toLowerCase()
      .includes(input.toLowerCase())

  filterCity = (input: string, option: any) =>
    (option?.children as unknown as string)
      .toLowerCase()
      .includes(input.toLowerCase())

  onSelectUF = (uf: string) => {
    this.formRef.current?.resetFields([ProducerEnum.CITY])
    this.props.fetchCitiesDispatched(uf)
  }

  resetDocument = () => {
    this.setState({ [ProducerEnum.DOCUMENT]: '' })
    this.formRef.current?.resetFields([ProducerEnum.DOCUMENT])
  }

  onChangeDocumentType = (event: RadioChangeEvent) => {
    this.setState({
      radioLabel: event.target.value as DocumentEnum,
    })
    this.resetDocument()
  }

  onSubmit = (producer: IProducer) => {
    const { editingProducer, onFinish } = this.props
    const producerKey =
      editingProducer?.key || Number(editingProducer?.key) === 0
        ? {
            key: editingProducer?.key,
          }
        : undefined
    const producerWithKey = {
      ...producer,
      ...producerKey,
    }

    onFinish(producerWithKey)
  }

  setDocumentMask = () =>
    this.state.radioLabel === DocumentEnum.CPF ? cpfMask : cnpjMask

  disableSubmit = () => {
    const { editingProducer } = this.props
    const formValues = this.formRef.current?.getFieldsValue()
    this.setState({
      submitDisabled:
        JSON.stringify(editingProducer) === JSON.stringify(formValues),
    })
  }

  render() {
    const { editingProducer, crops, ufs, cities, citiesLoading } = this.props
    const { radioLabel, submitDisabled } = this.state
    const {
      nameRules,
      documentRules,
      stateRules,
      cityRules,
      totalAcreRules,
      farmableAcreRules,
      vegetationAcreRules,
      cropsRules,
    } = producerEditRules
    return (
      <Form
        autoComplete='off'
        layout='vertical'
        ref={this.formRef}
        onFinish={this.onSubmit}
        onValuesChange={this.disableSubmit}
        initialValues={PRODUCER_FORM_INITIAL_VALUES}
      >
        <Item label='Nome' name={ProducerEnum.NAME} rules={nameRules}>
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
            <Item
              label={radioLabel}
              name={ProducerEnum.DOCUMENT}
              rules={documentRules}
            >
              <MaskedInput
                mask={this.setDocumentMask()}
                defaultValue={this.state.document}
              />
            </Item>
          </Col>
        </Row>
        <Row justify='space-between'>
          <Col {...responsiveState}>
            <Item label='Estado' name={ProducerEnum.STATE} rules={stateRules}>
              <StyledSelect
                showSearch
                options={ufs}
                loading={citiesLoading}
                filterOption={this.filterState}
                onSelect={this.onSelectUF}
              />
            </Item>
          </Col>
          <Col {...responsiveCity}>
            <Item label='Cidade' name={ProducerEnum.CITY} rules={cityRules}>
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
          <Col {...responsiveFarmableAcre}>
            <Item
              label='Agricultável'
              name={ProducerEnum.FARMABLE_ACRE}
              rules={farmableAcreRules}
            >
              <StyledInputNumber min={0} />
            </Item>
          </Col>
          <Col {...responsiveVegetationAcre}>
            <Item
              label='Vegetação'
              name={ProducerEnum.VEGETATION_ACRE}
              rules={vegetationAcreRules}
            >
              <StyledInputNumber min={0} />
            </Item>
          </Col>
          <Col {...responsiveTotalAcre}>
            <Item
              label='Total da fazenda'
              name={ProducerEnum.TOTAL_ACRE}
              rules={totalAcreRules}
            >
              <StyledInputNumber min={0} />
            </Item>
          </Col>
        </Row>
        <Item
          label='Culturas plantadas'
          name={ProducerEnum.CROPS}
          rules={cropsRules}
        >
          <StyledCheckboxGroup options={crops} />
        </Item>
        <Item>
          <StyledButton
            label={buttonLabel(editingProducer)}
            disabled={submitDisabled}
          />
        </Item>
      </Form>
    )
  }
}

const mapStateToProps = ({ address, crops }: RootState) => ({
  crops: crops.crops,
  cities: address.cities,
  citiesLoading: address.loading,
  ufs: address.ufs,
})

const mapDispatchToProps = {
  fetchCropsDispatched: fetchCrops,
  fetchCitiesDispatched: fetchCities,
  fetchUFsDispatched: fetchUFs,
}

export const ProducerFormConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProducerForm)
