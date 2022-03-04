<template>
<div class="flex flex-col items-center justify-center h-full mb-4">
  <div class="w-1/2 h-auto">
  <h2 class="text-4xl font-bold text-center text-current">Admin Portal</h2>
  </div>
  <div class="w-1/2 h-auto">
    <form @submit="loginUser" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        email
      </label>
      <input  v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email address">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
    </div>

    <div class="flex items-center justify-between">
      <button :disabled="lifeCircle.isLoading" class="w-full bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        <svg v-if="lifeCircle.isLoading" class="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
  </svg>
       Login
      </button>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;{{year}} Hannah Co. All rights reserved.
  </p>
  </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
name: "AuthLogin",
data() {
  return {
    email: 'hannahnwokocha@gmail.com',
    password: '123456789',
    isLoading: false
  }
},
computed: {
  ...mapState(['lifeCircle']),
  year() {
    return new Date().getFullYear()
  }
},
 methods: {
    ...mapActions({
      login: 'login'
    }),
    loginUser(e) {
      e.preventDefault();
      const {email, password, login} = this;
      login({email, password});
   }
  },
}
</script>

<style scoped>
</style>