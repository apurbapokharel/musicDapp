import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import LandingHome from '../webComponents/landingPage/LandingHome';
import Upload from './upload';
import Music from '../../abis/Musicc.json';

import  {ADD_SONGS, ADD_MUSIC_CONTRACT} from '../../store/actions'
import { useSelector, useDispatch } from 'react-redux';

function Index()
{
    const[account, setAccount] = useState("")
    const[musicContract, setMusicContract] = useState()
    const[loading, setLoading] = useState()
    const[musics, setMusics] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadData(){
            await loadWeb3()
            await loadBlockchainData()
        }
        loadData()
        // dispatch(ADD_SONGS(musics))
    }, []);
   
    async function loadWeb3() {
        if (window.ethereum) {
          window.web3 = new Web3(window.ethereum) //import web3 
          await window.ethereum.enable()
        }
        else if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
          window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
      }
    
    async function loadBlockchainData(){
        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()
        setAccount(accounts[0]) //works

        const networkId = await web3.eth.net.getId()
        const networkData = Music.networks[networkId]
        if(networkData) {
            const contract = web3.eth.Contract(Music.abi, networkData.address)
            // console.log(contract);
            setMusicContract(contract) //works
            dispatch(ADD_MUSIC_CONTRACT(contract))
            setLoading(false)
            const musicCount = await contract.methods.musicCount().call()
            //Load music
            for (var i = 1; i <= musicCount; i++) {
                const music = await contract.methods.music(i).call()
                console.log('musics', music);
                // this.setState({
                //     products: [...this.state.products, music]
                // })
                setMusics([...musics, music]) //works
            }
            // console.log(musics)
            // dispatch(ADD_SONGS(musics))
        }
        else {
            window.alert('Music contract not deployed to detected network.')
        }        
    }
    return(
        <> 
            <LandingHome/>
        </>
    )
}

export default Index
