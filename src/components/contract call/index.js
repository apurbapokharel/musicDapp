// import Web3 from 'web3'
// loadWeb3()
// loadBlockchainData()

// async function loadWeb3() {
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
// }

// async function loadBlockchainData(){
//     const web3 = window.web3
//     const accounts = await web3.eth.getAccounts()
//     this.setState({account : accounts[0]})
//     console.log("account is", this.state.account)
//     const networkId = await web3.eth.net.getId()
//     const networkData = Music.networks[networkId]
//     if(networkData) {
//       const contract = web3.eth.Contract(Music.abi, networkData.address)
//       this.setState({contract: contract})
//       this.setState({ loading : false})
//       const musicCount = await contract.methods.musicCount().call()
//       //Load music
//       for (var i = 1; i <= musicCount; i++) {
//         const music = await contract.methods.music(i).call()
//         this.setState({
//           products: [...this.state.products, music]
//         })
//       }
//       console.log(this.state.products)
//     }
//     else {
//       window.alert('Music contract not deployed to detected network.')
//     }
//   }