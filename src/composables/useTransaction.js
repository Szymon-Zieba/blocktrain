import { ethers } from 'ethers'
import { contract } from './newContract'

async function startPayment(userAdress, ether) {
  let provider = new ethers.providers.Web3Provider(window.ethereum)
  let signer = provider.getSigner()
  contract.connect(signer).transfer(userAdress, ethers.utils.parseEther(ether));
}

export { startPayment }