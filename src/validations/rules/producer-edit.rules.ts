import {
  documentValidator,
  minLengthRules,
  totalAcreValidator,
} from '../validators'
import { requiredRules } from './required.rules'

export const producerEditRules = {
  nameRules: [requiredRules, minLengthRules],
  documentRules: [requiredRules, documentValidator],
  stateRules: [requiredRules],
  cityRules: [requiredRules],
  totalAcreRules: [requiredRules, totalAcreValidator],
  farmableAcreRules: [requiredRules, totalAcreValidator],
  vegetationAcreRules: [requiredRules, totalAcreValidator],
  cropsRules: [requiredRules],
}
