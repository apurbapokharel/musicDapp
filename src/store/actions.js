
// export const ADD_SONG = 'ADD_SONG';
// export const VIEW_SONG = 'VIEW_SONG';

export const ADD_SONGS = (value) => {
    console.log(value);
    return{
        type:"ADD_SONGS_ASSIGNMENT",
        payload: value
    }
};

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

export const ADD_TOKENPRICEETH = (value) => {
    return{
        type:"TOKENPRICEETH_ASSIGNMENT",
        payload: value
    }
};

export const ADD_TOKENPRICEWEI = (value) => {
    return{
        type:"TOKENPRICEWEI_ASSIGNMENT",
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

export const START_ORBITDB_INITILIZE = () => {
    return {
        type: "INITIALIZE_ORBITDB",
    }
}

export const CREATE_ORBITDB_SUCCESS = (orbit_db) =>{
    return{
        type: "CREATE_ORBITDB_SUCCESS",
        payload: orbit_db
    }
}

export const CREATE_ORBITDB_FAILED = (error) => {
    return {
        type: "CREATE_ORBITDB_FAILED",
        payload: error,
    }
}

export const MUSIC_DB_INITILIZE = () => {
    return {
        type: "MUSIC_DB_INITILIZE",
    }
}

export const MUSIC_DB_CREATE = (music_db) => {
    return {
        type: "MUSIC_DB_CREATE",
        payload: music_db,
    };
}

export const MUSIC_DB_CREATE_ERROR = (error) => {
    return {
        type: "MUSIC_DB_CREATE_ERROR",
        payload: error,
    };
}

