<script>
import {ref} from 'vue'
import {startPayment} from '../../composables/useTransaction.js'

export default {
    props: {
    list: Object,
    },
    setup() {  
        let points = ref('')

        return { 
            startPayment,
            points,
        }
    }
}
</script>

<template>
        <div class="form">
            <input v-model="points" name="ether" type="text" placeholder="Liczba punktów">
            <button v-on:click="startPayment(list.adress, points)" class="sendEthButton">
                +
            </button>
        </div>
</template>

<style scoped>
    .form{
        display: flex;
        margin-left: 3rem;
        height: 100%;
    }
    input{
        outline: none;
        padding: 0.1rem;
        border: 0.1rem solid black;
        text-align: center;
    }
    input:hover{
        box-shadow: 0 0 1rem black;
    }
    input:focus-visible{
        background: rgb(219, 219, 219);
    }
    button{
        margin-left: 0.3rem;
        background-color: #aa1d04;
        border: none;
        color: white;
        padding: 0.5rem 1.5rem;
        text-decoration: none;
        cursor: pointer;
        font-size: 2rem;
    }
    button:hover{
        box-shadow: 0 0 1rem black;
    }
    button:active{
        opacity: 0.6;
        transform: translateY(0.1rem);
    }
</style>