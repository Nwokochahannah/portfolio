<template>
  <nav class="PrivateLayout__sideBar">
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/dashboard">Settings</router-link>
          <button @click="logout">
            Logout
        </button>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'Sidebar',
      methods: {
    ...mapActions(['logout']),
  }
}
</script>

<style scoped>
.PrivateLayout__sideBar {
    display: flex;
    flex-direction: column;
    width: 280px;
    height: 100vh;
    border: 1px solid rgb(196, 196, 196);
    float: left;
}
</style>>