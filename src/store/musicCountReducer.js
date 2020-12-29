const musicCountAssigner = (state = null , action) => {
    // console.log(action.payload, action.type);
    switch(action.type){
      case "MUSIC_COUNT_ASSIGNMENT":
        return action.payload;
      default:
        return state;
    };
  }
  
  export default musicCountAssigner;