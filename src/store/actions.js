
// export const ADD_SONG = 'ADD_SONG';
// export const VIEW_SONG = 'VIEW_SONG';

// export const ADD_SONGS = (value) => {
//     console.log(value);
//     return{
//         type:"ASSIGNMENT",
//         payload: value
//     }
// };

export const ADD_MUSIC_CONTRACT = (value) => {
    return{
        type:"MUSIC_CONTRACT_ASSIGNMENT",
        payload: value
    }
};

export const ADD_TOKEN_CONTRACT = (value) => {
    return{
        type:"TOKEN_CONTRACT_ASSIGNMENT",
        payload: value
    }
};

export const ADD_TOKENSALE_CONTRACT = (value) => {
    return{
        type:"TOKENSALE_CONTRACT_ASSIGNMENT",
        payload: value
    }
};

export const ADD_CURRENTADDRESS = (value) => {
    return{
        type:"CURRENTADDRESS_ASSIGNMENT",
        payload: value
    }
};

export const ADD_TOKENPRICE = (value) => {
    return{
        type:"TOKENPRICE_ASSIGNMENT",
        payload: value
    }
};

export const ADD_TOKENHELD = (value) => {
    return{
        type:"TOKENHELD_ASSIGNMENT",
        payload: value
    }
};

export const ADD_TOKENSOLD = (value) => {
    return{
        type:"TOKENSOLD_ASSIGNMENT",
        payload: value
    }
};