import { combineReducers } from 'redux'
// import musicAssigner from './musicReducer'
import musicContrackAssigner from './musicContrackReducer'
import tokenContractAssigner from './tokenReducer'
import tokenSaleContractAssigner from './tokenSaleReducer'
import curentAccountAssigner from './currentAccountReducer'
import tokenHeldAssigner from './tokenHeldReducer'
import tokenETHPriceAssigner from './tokenETHPriceReducer'
import tokenSoldReducer from './tokenSoldReducer'
import tokenWEIPriceAssigner from './tokenWEIPriceReducer'

const allReducers = combineReducers({
    // musics: musicAssigner,
    musicContract: musicContrackAssigner,
    tokenContract: tokenContractAssigner,
    tokenSaleContract: tokenSaleContractAssigner,
    currentAccount: curentAccountAssigner,
    tokenHeld: tokenHeldAssigner,
    tokenPriceETH: tokenETHPriceAssigner,
    tokenPriceWEI: tokenWEIPriceAssigner,
    tokenSold: tokenSoldReducer
});

export default allReducers;