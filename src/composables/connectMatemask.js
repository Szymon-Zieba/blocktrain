import { ethers } from 'ethers'

async function connectMatemask() {
    if(!window.ethereum){
        console.log('Brak matemask')
      }
    
  let provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send("eth_requestAccounts", [])
}

export { connectMatemask}