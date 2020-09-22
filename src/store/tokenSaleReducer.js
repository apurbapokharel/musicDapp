const tokenSaleContrackAssigner = (state = null , action) => {
    console.log(action.payload, action.type);
    switch(action.type){
        case "TOKENSALE_CONTRACT_ASSIGNMENT":
            return action.payload;
        default:
            return state;
        };
}

export default tokenSaleContrackAssigner;