import { required } from './required.error'

export const loginErrorMessage = {
  email: [
    {
      ...required,
      message: 'Favor digitar o email!',
    },
  ],
  password: [
    {
      ...required,
      message: 'Favor digitar a senha!',
    },
  ],
}
