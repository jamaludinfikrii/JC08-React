import { combineReducers } from 'redux'
import UserState from './userGlobal'
import ProductState from './productGlobal'

export default combineReducers({
    user: UserState,
    product : ProductState
});