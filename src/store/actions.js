
// export const ADD_SONG = 'ADD_SONG';
// export const VIEW_SONG = 'VIEW_SONG';

export const ADD_SONGS = (value) => {
    console.log(value);
    return{
        type:"ASSIGNMENT",
        payload: value
    }
}

export const ADD_MUSIC_CONTRACT = (value) => {
    return{
        type:"MUSIC_CONTRACT_ASSIGNMENT",
        payload: value
    }
}