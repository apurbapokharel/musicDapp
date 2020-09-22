import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';

async function Upload () {
    const[dummy, setDuymmy] = useState()
    // console.log(props, props.account);
    const musics = await useSelector(state => state.musics);
    const musicContract = await useSelector(state => state.musicContract);

    console.log(musics, musicContract);

    // const musicCount = await musicContract.methods.musicCount().call()
    // console.log('music count is', musicCount);
    // //Load music
    // for (var i = 1; i <= musicCount; i++) {
    //     const music = await musicContract.methods.music(i).call()
    //     console.log('musics', music);
    //     // this.setState({
    //     //     products: [...this.state.products, music]
    //     // })
    //     // setMusics([...musics, music]) //works
    // }
    return(
        null
    )
}

export default Upload