<script>
import MainView from './components/MainView.vue'
export default{
  components:{MainView},
  setup(){
    function changeTitle(title){
      document.title = title
    }
    changeTitle("Neti")
  }
}

</script>

<template>
  <header>
    <div class="wrapper">
      <MainView />
    </div>
  </header>

  <main>
  </main>
</template>

<style>
  *{
    margin: 0;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
</style>
