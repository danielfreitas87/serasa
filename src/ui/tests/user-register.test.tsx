import React from 'react'
import {
  render,
  screen,
} from '@testing-library/react'
import UserRegister from '../pages/user-register'

test('renders user register page', () => {
  render(<UserRegister />)
  const linkElement = screen.getByText(
    /user register page/i,
  )
  expect(
    linkElement,
  ).toBeInTheDocument()
})
