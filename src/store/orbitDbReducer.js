const initialSate = {
    loading: false,
    orbit_db: null,
    error: "",
}


const orbitReducer = (state = initialSate, action) => {
    switch (action.type) {
        case "INITIALIZE_ORBITDB":
            return {
                ...state,
                loading: true
            }
        case "CREATE_ORBITDB_SUCCESS":
            return {
                ...state,
                loading: false,
                orbit_db: action.payload,
                error: ''
            }
        case "CREATE_ORBITDB_FAILED":
            return {
              ...state,
              loading: false,
              error: action.payload,
            };
        default:
            return initialSate;
    }
}

export default orbitReducer;