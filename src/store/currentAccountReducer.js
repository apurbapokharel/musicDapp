const curentAccountAssigner = (state = null , action) => {
    // console.log(action.payload, action.type);
    switch(action.type){
        case "CURRENTADDRESS_ASSIGNMENT":
            return action.payload;
        default:
            return state;
        };
}

export default curentAccountAssigner;