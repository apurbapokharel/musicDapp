const tokenContrackAssigner = (state = null , action) => {
    // console.log(action.payload, action.type);
    switch(action.type){
        case "TOKEN_CONTRACT_ASSIGNMENT":
            return action.payload;
        default:
            return state;
        };
}

export default tokenContrackAssigner;