import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import LandingHome from '../webComponents/landingPage/LandingHome';
import Upload from './upload';
import Music from '../../abis/Musicc.json';
import DappTokenInstance from '../../abis/DappToken.json'
import DappTokenSaleInstance from '../../abis/DappTokenSale.json'
import MusicContract from '../../abis/MusicContract.json'
import {
  ADD_SONGS,
  ADD_MUSIC_CONTRACT,
  ADD_MUSIC_COUNT,
  ADD_TOKEN_CONTRACT,
  ADD_TOKENSALE_CONTRACT,
  ADD_TOKENPRICEETH,
  ADD_TOKENSOLD,
  ADD_TOKENHELD,
  ADD_CURRENTADDRESS,
  ADD_TOKENPRICEWEI,
  ADD_MUSICCONTRACT_CONTRACT,
  ADD_REDEEMABLE_BALANCE,
} from "../../store/actions";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { getSongCount, getMusicIdentifiers } from '../API Caller/RESTFetcher'

function Index(){
    const history = useHistory();
    const[loading, setLoading] = useState()
    const[count, setCount] = useState()
    const dispatch = useDispatch();
    
    useEffect(() => {
        async function loadData(){
            await fetchDatafromDB()
            await loadWeb3()
            await loadBlockchainData()
        }
        loadData()
    }, []);
   
    async function fetchDatafromDB(){
      
    }

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
        window.ethereum.on('accountsChanged', function (accounts) {
            console.log(accounts);
            dispatch(ADD_CURRENTADDRESS(accounts[0]))
            history.push('/')
        })
    }
    
    async function loadBlockchainData(){
      var musicCount, musicData
        // await getSongCount()
        // .then((value) => {
        //   musicCount = value
        // })
        // .catch(() => {
        //   console.log("music count fetch error");
        // })
        await getMusicIdentifiers()
        .then((value) => {
          console.log(value);
          musicData = value
        })
        .catch(() => {
          console.log("music count fetch error");
        })

        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()
        const songs = []
        // setAccount(accounts[0]) //works
        dispatch(ADD_CURRENTADDRESS(accounts[0]))
        console.log(musicCount, musicData);
        const networkId = await web3.eth.net.getId()
        const networkData = Music.networks[networkId]
        if(networkData) {
            const contract = web3.eth.Contract(Music.abi, networkData.address)
            dispatch(ADD_MUSIC_CONTRACT(contract))
            setLoading(false)
            const musicCount = await contract.methods.musicCount().call()
            dispatch(ADD_MUSIC_COUNT(musicCount.toNumber()))
            //Load music
            for (var i = 1; i <= musicCount; i++) {
                  const music = await contract.methods.music(i).call()
                  // console.log('musics', music);
                  songs.push(music)
            }
            console.log(songs)
            dispatch(ADD_SONGS(songs))
        }
        else { 
            window.alert('Music contract not deployed to detected network.')
        }
        const networkData1 = DappTokenInstance.networks[networkId]
        if(networkData1) {
            const contract = web3.eth.Contract(DappTokenInstance.abi, networkData1.address)
            dispatch(ADD_TOKEN_CONTRACT(contract))
            const tokenHeld = await contract.methods.balanceOf(accounts[0]).call()
            dispatch(ADD_TOKENHELD(tokenHeld.toNumber()/10**10))
        }          
        
        const networkData2 = DappTokenSaleInstance.networks[networkId]
        if(networkData2) {
            const contract = web3.eth.Contract(DappTokenSaleInstance.abi, networkData2.address)
            dispatch(ADD_TOKENSALE_CONTRACT(contract))
            const price = await contract.methods.tokenPrice().call()
            // console.log(price)
            const count = await contract.methods.tokensSold().call()
            // // console.log(count)
            dispatch(ADD_TOKENPRICEWEI(price.toNumber()))
            dispatch(ADD_TOKENPRICEETH(web3.utils.fromWei(price.toString(), 'Ether')))
            dispatch(ADD_TOKENSOLD(count.toNumber()/10**10))
        }
        
        const networkData3 = MusicContract.networks[networkId]
        if(networkData3){
          const contract = web3.eth.Contract(MusicContract.abi, networkData3.address)
          dispatch(ADD_MUSICCONTRACT_CONTRACT(contract))
          const redeemableBalnce = await contract.methods.balanceOf(accounts[0]).call()
          dispatch(ADD_REDEEMABLE_BALANCE(redeemableBalnce.toNumber()/10**10))
        }
        //console.log('musicContract address', networkData.address);
    }

    return (
        <>
            {loading ? <p> LOADING...</p> : <LandingHome/>}
        </>
    )
}

export default Index
