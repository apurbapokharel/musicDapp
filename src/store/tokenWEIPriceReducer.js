//value token price in Eth is stored
const tokenWEIPriceAssigner = (state = null , action) => {
    // console.log(action.payload, action.type);
    switch(action.type){
        case "TOKENPRICEWEI_ASSIGNMENT":
            return action.payload;
        default:
            return state;
        };
}

export default tokenWEIPriceAssigner;