import { ethers } from "ethers"
import { abi } from "./abi"
 
    const provider = new ethers.providers.JsonRpcProvider(`https://forno.celo.org`)
    const addressNETIR = '0xCD256E4FafEf4bA5a135668ed44552113146e84f' 
    const contract = new ethers.Contract(addressNETIR, abi, provider)  

export {contract, provider}