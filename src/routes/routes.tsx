import React from 'react'
import { IMenuItem } from '@interfaces'
import {
  HomePageConnected,
  ProducerEditPageConnected,
  ProducersListPageConnected,
} from '@pages'

export const AuthRoutes: Array<IMenuItem> = [
  {
    render: <HomePageConnected />,
    label: 'Painel',
  },
  {
    label: 'Produtores',
    children: [
      {
        render: <ProducersListPageConnected />,
        label: 'Lista de Produtores',
      },
      {
        render: <ProducerEditPageConnected />,
        label: 'Editar Produtores',
      },
    ],
  },
]
