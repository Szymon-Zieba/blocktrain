import { defineStore } from 'pinia'
import { ethers } from 'ethers'

export const useAdressStore =  defineStore({
    id: 'useAdressStore',
    state: () => {
      return {
        signerAdress: "",
        signer: null
      }
    },
    actions: {
      async getSignerAdress(){
        try{
          let provider = new ethers.providers.Web3Provider(window.ethereum)
          let signer = provider.getSigner()
          this.signerAdress = await signer.getAddress()
        }
        catch(err){
          console.log("Brak danych o adresie użytkownika")
        }
      }
    }
})
