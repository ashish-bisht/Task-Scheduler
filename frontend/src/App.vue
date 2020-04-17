<template>
  <v-app style="background-image: linear-gradient(#f5f7fa, #c3cfe2);">
    <NavBar />
    <v-content>
      <router-view :key="$route.fullPath" />
    </v-content>
  </v-app>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap');
$body-font-family: 'Oxygen';
</style>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'App',

  components: { NavBar },

  data: () => ({
    //
  })
}
</script>
