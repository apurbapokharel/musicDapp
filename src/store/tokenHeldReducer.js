const tokenHeldAssigner = (state = null , action) => {
    // console.log(action.payload, action.type);
    switch(action.type){
        case "TOKENHELD_ASSIGNMENT":
            return action.payload;
        default:
            return state;
        };
}

export default tokenHeldAssigner;