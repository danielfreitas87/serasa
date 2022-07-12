import { AnyAction } from 'redux'
import { CHANGE_CURRENT_PAGE } from '@actions'
import { IPageState } from '@interfaces'

const currentPageInitialState: IPageState = {
  currentPage: 0,
}

export default function pageReducer(
  state = currentPageInitialState,
  action: AnyAction,
) {
  switch (action.type) {
    case CHANGE_CURRENT_PAGE:
      return { currentPage: action.payload }
    default:
      return state
  }
}
