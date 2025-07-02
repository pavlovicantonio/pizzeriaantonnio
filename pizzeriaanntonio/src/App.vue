<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
[id] {
  scroll-margin-top: 10vh; /* prilagodi visini app-bara */
}

@media (min-width: 768px) {
  [id] {
    scroll-margin-top: 10vh;
  }
}
</style>
