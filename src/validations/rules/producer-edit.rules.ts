import { requiredRules } from './required.rules'
import { documentValidator, totalAreaAcreValidator } from '../validators'

export const producerEditRules = {
  nameRules: [requiredRules],
  documentRules: [requiredRules, documentValidator],
  stateRules: [requiredRules],
  cityRules: [requiredRules],
  totalAreaAcreRules: [requiredRules, totalAreaAcreValidator],
  farmableAreaAcreRules: [requiredRules, totalAreaAcreValidator],
  vegetationAreaAcreRules: [requiredRules, totalAreaAcreValidator],
  cropsRules: [requiredRules],
}
