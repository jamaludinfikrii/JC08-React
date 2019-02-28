import { combineReducers } from 'redux'
import UserState from './userGlobal'
import ProductState from './productGlobal'
import CountWord from './countWordGlobal'

export default combineReducers({
    user: UserState,
    product : ProductState,
    jumlah : CountWord
});