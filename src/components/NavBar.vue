<script>
import {connectMatemask} from '../composables/connectMatemask'

export default{
    setup(){
        return {
            connectMatemask,
        }
    }
}
</script>

<template>
  <main class="nav">
    <div class="logo ">
        <img class="nav-img" src="https://uploads-ssl.webflow.com/6171448652164b56c4542b0f/617260db1f601c38d783b6c5_logo%20(1).svg">
    </div>
    <div class="text-div">
        <span class="text ">
            blockTrain
        </span>
    </div>
    <div class="text-div">
        <button v-on:click="connectMatemask()" class="button">
            Connect Matemask
        </button>
    </div>
  </main>
</template>

<style scoped>
    .nav{
        background-color: rgb(192, 9, 9);
        height: 10vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
        width: 99%;
    }
    .logo{
        margin: 3rem;
        
    }
    .nav-img{
        width:7rem;
        height:7rem;
    }
    .text-div{
        margin: 3rem;
    }
    .button{
        border:none;
        background: none;
        border-radius: 30px;
        font-size: 1.2rem;
        cursor: pointer;
    }
    .button:hover{
        opacity: 0.7;
    }
    .button:active{
        transform: translateY(0.1rem);
    }
    .text{
        font-size: 3rem;
    }
</style>