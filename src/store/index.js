import { combineReducers } from 'redux'
// import musicAssigner from './musicReducer'
import musicContrackAssigner from './musicContrackReducer'
import tokenContractAssigner from './tokenReducer'
import tokenSaleContractAssigner from './tokenSaleReducer'
import curentAccountAssigner from './currentAccountReducer'
import tokenHeldAssigner from './tokenHeldReducer'
import tokenPriceAssigner from './tokenPriceReducer'
import tokenSoldReducer from './tokenSoldReducer'

const allReducers = combineReducers({
    // musics: musicAssigner,
    musicContract: musicContrackAssigner,
    tokenContract: tokenContractAssigner,
    tokenSaleContract: tokenSaleContractAssigner,
    currentAccount: curentAccountAssigner,
    tokenHeld: tokenHeldAssigner,
    tokenPrice: tokenPriceAssigner,
    tokenSold: tokenSoldReducer
});

export default allReducers;