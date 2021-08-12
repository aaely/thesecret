import Dispensary from '../abis/Dispensary.json'

export default async function loadContract() {
    const web3 = window.web3
    return new web3.eth.Contract(Dispensary, "0xDBCBCDCDaE34ed71AC978A9CCf03DB2ef15A7cE5") 
}