const musicContrackAssigner = (state = null , action) => {
  // console.log(action.payload, action.type);
  switch(action.type){
    case "MUSIC_CONTRACT_ASSIGNMENT":
      return action.payload;
    default:
      return state;
  };
}

export default musicContrackAssigner;