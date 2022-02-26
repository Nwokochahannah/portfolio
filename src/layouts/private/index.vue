<template>
  <side-bar/>
  <main class="PrivateLayout__main">
  <slot />
  </main>
</template>

<script>
import SideBar from './SideBar.vue'

export default {
    components: { SideBar },
    name: "PrivateLayout"
}
</script>

<style>

</style>