<script >

export default{
    props: {
    list: Object,
    index: Number,
    },
    setup(){

    }
}
</script>

<template>
    <div class="eachOne" :class="{'eachOne1' : index === 0}">
        <div class="name">
            <span>{{list.name}}</span>
        </div>
        <div class="address">
            <span>{{list.adress}}</span>
        </div>
        <div class="iconBalance" :class="{'iconBalanceTOP' : index === 0}"> 
            <div class="balance">
                <span>{{list.balance}}</span>
            </div>
            <div class="icon" v-if="index == 0">  
                <img src="../../../public/trophy.svg" alt="trophy">
            </div>
        </div>
    </div>
</template>
<style scoped>
    .eachOne{
        display: flex;
        justify-content: space-between;
        font-size: 1.1rem;
        padding: 0.5rem;
        border-bottom: 0.1rem solid black;
        background: linear-gradient( rgb(255, 255, 255), 98%, rgb(175, 10, 10));
    }
    .eachOne1{
        background: linear-gradient( rgb(255, 255, 255), 95%, gold);
    }
    .address{
        text-align: center;
    }
    .iconBalance{
        display: flex;
    }
    .balance{
        font-size: 1.5rem;
    }
    .iconBalanceTOP{
        color:gold;
    }
    .icon{
        margin-left: 0.5rem;
    }
    img{
        height: 100%;
    }
</style>