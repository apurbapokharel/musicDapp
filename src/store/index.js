import { combineReducers } from 'redux'
import musicAssigner from './musicReducer'
import musicContrackAssigner from './musicContrackReducer'
import musicContractContractAssigner from './musicContractContractReducer'
import tokenContractAssigner from './tokenReducer'
import tokenSaleContractAssigner from './tokenSaleReducer'
import curentAccountAssigner from './currentAccountReducer'
import tokenHeldAssigner from './tokenHeldReducer'
import tokenETHPriceAssigner from './tokenETHPriceReducer'
import tokenSoldReducer from './tokenSoldReducer'
import tokenWEIPriceAssigner from './tokenWEIPriceReducer'
import redeemableBalanceAssigner from './redeemableBalnaceReducer'
import musicCountAssigner from './musicCountReducer'
import orbitReducer from './orbitDbReducer'
import musicReducer from "./musicDbReducer"

const allReducers = combineReducers({
    musics: musicAssigner,
    musicContract: musicContrackAssigner,
    musicCount: musicCountAssigner,
    musicContractContract: musicContractContractAssigner,
    redeemableBalance: redeemableBalanceAssigner,
    tokenContract: tokenContractAssigner,
    tokenSaleContract: tokenSaleContractAssigner,
    currentAccount: curentAccountAssigner,
    tokenHeld: tokenHeldAssigner,
    tokenPriceETH: tokenETHPriceAssigner,
    tokenPriceWEI: tokenWEIPriceAssigner,
    tokenSold: tokenSoldReducer,
    orbitDb: orbitReducer,
    musicDb: musicReducer
});

export default allReducers;