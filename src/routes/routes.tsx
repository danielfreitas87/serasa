import React from 'react'
import { IMenuItem } from '@interfaces'
import { HomePage, ProducerEditPage, ProducersListPage } from '@pages'

export const AuthRoutes: Array<IMenuItem> = [
  {
    render: <HomePage />,
    label: 'Painel',
  },
  {
    label: 'Produtores',
    children: [
      {
        render: <ProducersListPage />,
        label: 'Lista de Produtores',
      },
      {
        render: <ProducerEditPage />,
        label: 'Editar Produtores',
      },
    ],
  },
]
