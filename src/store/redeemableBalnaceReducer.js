const redeemableBalanceAssigner = (state = null , action) => {
    // console.log(action.payload, action.type);
    switch(action.type){
      case "REDEEMABLE_BALANCE_ASSIGNMENT":
        return action.payload;
      default:
        return state;
    };
  }
  
  export default redeemableBalanceAssigner;