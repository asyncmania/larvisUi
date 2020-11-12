import { LOGIN, LOGOUT } from "../actions/auth";


const getToken = () =>  localStorage.getItem('token')  

const initialState = {token: getToken(), name: ''}

export default function auth(state = initialState, action) {

  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
        name: action.payload.name
      }

    case LOGOUT: 
    return {
      ...state,
      token: null,
      name: ''
    }  

    default:
      return state;
  }
}
