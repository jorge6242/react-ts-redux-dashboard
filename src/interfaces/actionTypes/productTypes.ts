const GET_ALL = 'category/get_all'
const GET = 'category/get'
const SET_LOADING = 'category/set_loading'

interface GetAll {
  type: typeof GET_ALL
  payload: Array<string | number>
}

interface Get {
    type: typeof GET
    payload: Array<string | number>
  }

interface SetLoading {
    type: typeof SET_LOADING
    payload: boolean
  }

export type ProductTypes = GetAll | Get | SetLoading
