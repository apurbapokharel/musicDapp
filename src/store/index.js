import { combineReducers } from 'redux';
import musicAssigner from './musicReducer';
import contrackAssigner from './musicContrackReducer';


const allReducers = combineReducers({
    // musics: musicAssigner,
    musicContract: contrackAssigner,
});

export default allReducers;