//value token price in Eth is stored
const tokenPriceAssigner = (state = null , action) => {
    // console.log(action.payload, action.type);
    switch(action.type){
        case "TOKENPRICE_ASSIGNMENT":
            return action.payload;
        default:
            return state;
        };
}

export default tokenPriceAssigner;