<script >
import UserInfo from './ContentMain/UserInfo.vue'
import useInfoUsers from '../composables/useInfoUsers.js'
import AddTokens from './ContentMain/AddTokens.vue'
import {useAdressStore} from '../store/getSignerAdress'

 export default{
     components: {UserInfo, AddTokens},
    setup() {
        const {sortedlistOfWorkers} = useInfoUsers(10 * 1000)

        const adressAdmin = "0x107335EB8C6f100BFee0D62f6A915B24Bca1922b" 
        
        const userAdressStore = useAdressStore()
        try{
            userAdressStore.getSignerAdress()
        }catch(err){
            console.log(err)
        }
        return{ 
            sortedlistOfWorkers,
            adressAdmin,
            userAdressStore       
        }
    }
 }
</script>

<template>
    <div class='all'>
        <div class="eachUser mt2"  v-for="(list, index) in sortedlistOfWorkers" :key="list">
            <UserInfo class="user" :list="list" :index="index"/>
            <AddTokens v-if="userAdressStore.signerAdress == adressAdmin" :list="list" class="admin" /> 
        </div>
    </div>
</template>

<style scoped>
    .all{
        margin: 3%;
    }
    .eachUser{
        display: flex;
    }
    .user{
        width: 100%;
        float: left
    }
    .admin{
        float: right;
    }
</style>

<style >
    .mt2{
        margin-top: 2rem;
    }
    .mt3{
        margin-top: 3rem;
    }
    .mt4{
        margin-top: 4rem;
    }
    .mb2{
        margin-top: 2rem;
    }
    .mb3{
        margin-top: 3rem;
    }
    .mb4{
        margin-top: 4rem;
    }
    .pa1{
        padding: 1rem;
    }
</style>

