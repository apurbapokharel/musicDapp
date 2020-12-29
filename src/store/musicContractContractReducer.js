const musicContrackContractAssigner = (state = null , action) => {
    // console.log(action.payload, action.type);
    switch(action.type){
      case "MUSICCONTRACT_CONTRACT_ASSIGNMENT":
        return action.payload;
      default:
        return state;
    };
  }
  
  export default musicContrackContractAssigner;