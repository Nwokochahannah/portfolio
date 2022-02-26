<template>
  <h3>Login view</h3>
  <p v-if="lifeCircle.isLoading">loading...</p>
  <button @click="loginUser"  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Login
  </button>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
name: "AuthLogin",
data() {
  return {
    emailAddress: 'hello@hannah.com',
    password: '12&asd93$jd9ej923@jaidu23ada032m9an@$Ijsdad',
    isLoading: false
  }
},
computed: {
  ...mapState(['lifeCircle'])
},
 methods: {
    ...mapActions({
      login: 'login'
    }),
    loginUser() {
       this.login({emailAddress: this.emailAddress, password: this.password});
   }
  },
}
</script>

<style>

</style>