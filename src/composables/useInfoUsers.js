import { ref, onMounted, onUnmounted, computed } from 'vue'
import { ethers } from "ethers"
import { contract } from './newContract'
import { useAllUsers } from '../store/getAllUsers'

export default function useInfoUsers(timeForUpdate){
    let intervalId = null

    const listOfWorkers = ref([])

    const updateListOfWorkers = async () => {
        listOfWorkers.value = await useAllUsers().listOfWorkers()
    }
    
    const getBalanceOf = () => {listOfWorkers.value.forEach(async(element) =>  {
            const balance = await contract.balanceOf(element.adress) 

            element.balance = ethers.utils.formatEther(balance)
        })
    }
    
    const sortedlistOfWorkers = computed(() => {
            return listOfWorkers.value.sort((a,b) => b.balance - a.balance)
    })

    onMounted( async () => {
        await updateListOfWorkers()
        getBalanceOf()

    })
    onMounted(() => {
        intervalId = setInterval(getBalanceOf, timeForUpdate)
    })
    onUnmounted(() => {
        clearInterval(intervalId)
    })

    return {sortedlistOfWorkers, updateListOfWorkers}
}