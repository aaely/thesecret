export default async function loadAccount() {
    try {
        const web3 = window.web3
        // Load account
        const account = await web3.eth.getAccounts()
        const userAccount = account[0]
        return userAccount
    } catch (error) {
        console.log(error)
    }
}