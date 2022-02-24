<template>
  <Header />
    <main class="LayoutDefault__main">
      <slot/>
    </main>
  <Footer />
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
    name: 'PublicLayout',
    components: {
        Header,
        Footer
    },
    setup(){
        const store = useStore();

        let auth = computed(() => store.state.auth);

        return {
            auth,
        }
  }
}
</script>

<style>

</style>