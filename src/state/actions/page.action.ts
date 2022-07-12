const prefix = 'PAGE'
const CHANGE_CURRENT_PAGE = `${prefix}.CHANGE_CURRENT_PAGE`

const changeCurrentPage = (payload: number) => ({
  type: CHANGE_CURRENT_PAGE,
  payload,
})

export { CHANGE_CURRENT_PAGE, changeCurrentPage }
