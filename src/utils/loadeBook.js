import eBook from '../abis/eBook.json'

export default async function loadeBook() {
    const web3 = window.web3
    return new web3.eth.Contract(eBook.abi, "0x29F6eBae8438402c65C06A94F3ae37A71A71eb02") 
}