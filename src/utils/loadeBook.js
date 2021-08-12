import eBook from '../abis/eBook.json'

export default async function loadeBook() {
    const web3 = window.web3
    return new web3.eth.Contract(eBook.abi, "0xDBCBCDCDaE34ed71AC978A9CCf03DB2ef15A7cE5") 
}