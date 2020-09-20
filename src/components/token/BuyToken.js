import React, { Component } from 'react'
// import DappTokenInstance from '../abis/DappToken.json'
// import DappTokenSaleInstance from '../abis/DappTokenSale.json'
import Web3 from 'web3';
// import Main2 from './Main2'

class BuyToken extends Component {

    render() {
        console.log("yo");
        return (
            <p>Buy</p>
           
        )
    }
//   async componentWillMount(){
//     await this.loadWeb3()
//     await this.loadBlockchainData()
//   }

//   async loadBlockchainData(){
//     const web3 = window.web3
//     const accounts = await web3.eth.getAccounts()
//     this.setState({account : accounts[0]})
//     const networkId = await web3.eth.net.getId()
//     const networkData = DappTokenInstance.networks[networkId]
//     if(networkData) {
//       const contract = web3.eth.Contract(DappTokenInstance.abi, networkData.address)
//       this.setState({contract1: contract})
//     }
//     const networkData2 = DappTokenSaleInstance.networks[networkId]
//     if(networkData2) {
//       const contract = web3.eth.Contract(DappTokenSaleInstance.abi, networkData2.address)
//       this.setState({contract2: contract})
//       this.setState({ loading : false})
//       // const name = await this.state.contract1.methods.name().call()
//       // console.log(name)
//       const price = await contract.methods.tokenPrice().call()
//       // console.log(price)
//       this.setState({tokenPriceWei: price.toNumber()})
//       // console.log(this.state.tokenPriceWei)
//       const count = await contract.methods.tokensSold().call()
//       // console.log(count)
//       this.setState({tokenPriceEther: web3.utils.fromWei(price.toString(), 'Ether')})
//       this.setState({tokensSold: count.toNumber()})
//       // console.log(this.state.tokenPriceEther, this.state.tokensSold)
//       const tokenHeld = await this.state.contract1.methods.balanceOf(this.state.account).call()
//       // console.log(this.state.account, tokenHeld.toNumber())
//       this.setState({tokenHeld: tokenHeld.toNumber()})

//     }  
//   }

//   async loadWeb3() { //this code is given to us by metamask
//     if (window.ethereum) {
//       window.web3 = new Web3(window.ethereum) //import web3 
//       await window.ethereum.enable()
//     }
//     else if (window.web3) {
//       window.web3 = new Web3(window.web3.currentProvider)
//     }
//     else {
//       window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
//     }
//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       account : '',
//       contract1: null,
//       contract2: null,
//       productCount: 0,
//       loading: true,
//       tokenPriceEther: null,
//       tokenPriceWei: null,
//       tokensSold: '',
//       tokenHeld: null
//     };
//     //function binding
//     this.buyTokens = this.buyTokens.bind(this)
//     this.transferTokens = this.transferTokens.bind(this)
//   }

//   buyTokens(tokens){
//     this.setState({loading: true}, () => {
//       this.state.contract2.methods.buyTokens(tokens, this.state.account).send({from: this.state.account, value : tokens * this.state.tokenPriceWei })
//       this.setState({loading: false})
//     })
//   }

//   transferTokens(to, tokens){
//     this.setState({loading: true}, () => {
//       this.state.contract1.methods.transfer(to, tokens, this.state.account).send({from: this.state.account })
//       this.setState({loading: false})
//     })
//   }
//     render() {
//         return (
//           <div>
//               <div className="container-fluid mt-5">
//                 <div className="row">
//                     <main role="main" className="col-lg-12 d-flex">
//                     { this.state.loading
//                       ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
//                       : <Main2 
//                           tokenPriceEther = {this.state.tokenPriceEther}
//                           tokensSold = {this.state.tokensSold}
//                           tokenHeld = {this.state.tokenHeld}
//                           account = {this.state.account}
//                           buyTokens = {this.buyTokens}
//                           transferTokens = {this.transferTokens}
//                       />
//                   }
//                     </main> 
//                 </div>
//               </div> 
//           </div>
//         );
//       }
    }
    
export default BuyToken;
