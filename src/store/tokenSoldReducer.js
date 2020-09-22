const tokenSoldAssigner = (state = null , action) => {
    // console.log(action.payload, action.type);
    switch(action.type){
        case "TOKENSOLD_ASSIGNMENT":
            return action.payload;
        default:
            return state;
        };
}

export default tokenSoldAssigner;