import Web3 from 'web3'

export default async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.web3 = new Web3('wss://kovan.infura.io/ws/v3/83b3c94d24b244039493a50ec4e66362')
    }
  }