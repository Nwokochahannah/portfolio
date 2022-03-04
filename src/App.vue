<template>
  <router-view />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
    created() {
      this.$store.watch(state => state.status,
      (obj) => {
        //do something on data change
        this.$toast.open({
        message: obj.message,
        type: obj.type,
        duration: 5000,
        position: 'top',
        dismissible: true,
        queue: true
      })
      console.log('status', obj);
    },
    {
      deep: true //add this if u need to watch object properties change etc.
    }
);
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
