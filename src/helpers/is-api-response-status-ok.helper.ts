import { ApiResponseStatusEnum } from '@enums'

export function isApiResponseStatusOk(status: number) {
  return status && status === ApiResponseStatusEnum.SUCCESS
}
