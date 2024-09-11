<template>
    <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: 'Helvetica', 'Arial', sans-serif;
}

#app {
  width: 100%;
  height: 100%;
}
</style>