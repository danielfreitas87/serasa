import { ApiResponseStatusEnum } from '@enums'

export default (status: number) =>
  status &&
  status ===
    ApiResponseStatusEnum.SUCCESS
