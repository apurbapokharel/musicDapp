//value token price in Eth is stored
const tokenETHPriceAssigner = (state = null , action) => {
    // console.log(action.payload, action.type);
    switch(action.type){
        case "TOKENPRICEETH_ASSIGNMENT":
            return action.payload;
        default:
            return state;
        };
}

export default tokenETHPriceAssigner;