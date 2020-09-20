// import * as actionTypes from './actions';

const initialState = {
    songs: []
};

const reducer = (state = initialState, action) => {
    // switch (action.type) {
    //     case 'ADD_SONG':
    //         const newSong = {
    //             id: Math.random(),
    //             songTitle: action.songData.songTitle,
    //             singerName: action.songData.singerName,
    //             singerRevPercent: action.songData.singerRevPercent
    //         }
    //         return {
    //             ...state,
    //             songs: state.songs.concat(newSong)
    //         }
    // }
    
        if (action.type === "ADD_SONG") {
            const newSong = {
                id: Math.random(),
                // title: action.songData.title,
                songTitle: action.songData.songTitle,
                singerName: action.songData.singerName,
                singerRevPercent: action.songData.singerRevPercent,
            }
            return {
                ...state,
                songs: state.songs.concat(newSong)
            }
        }
    return state;

};

export default reducer;