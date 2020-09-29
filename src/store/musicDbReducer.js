const initialState = {
    music_db_loading: false,
    music_db: null,
    music_db_error: "",
}


const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MUSIC_DB_INITILIZE":
      return {
        ...state,
        music_db_loading: true,
      };
    case "MUSIC_DB_CREATE":
      return {
        ...state,
        music_db: action.payload,
      };
    case "MUSIC_DB_CREATE_ERROR":
      return {
        ...state,
        music_db_error: action.payload,
      };
    default:
      return {
        ...state,
        ...initialState,
      };
  }
};

export default musicReducer;