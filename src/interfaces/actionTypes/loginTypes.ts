export const ACTIONS = {
    SET_USER: 'login/set_user',
    LOGOUT: 'login/logout',
    SET_LOADING: 'login/set_loading',
};
  
  interface SetUser {
    type: typeof ACTIONS.SET_USER
    payload: Array<string|number>
  }
  
  interface Logout {
    type: typeof ACTIONS.LOGOUT
    payload: any
  }
  
  interface SetLoadng {
    type: typeof ACTIONS.SET_LOADING
    payload: boolean
  }
  
  
  export type LoginActionTypes = SetUser | Logout | SetLoadng