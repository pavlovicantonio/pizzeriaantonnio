<template>
  <v-sheet class="firstM d-flex align-center justify-center">
    <h1 class="title">{{ t('welcome') }}</h1>
  </v-sheet>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

.firstM {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('@/assets/image.png');
  background-size: cover;
  background-position: center;
  padding: 0 1rem;
  box-sizing: border-box;
  text-align: center;
}

/* Manji font za mobilne uređaje */
.title {
  font-family: 'Great Vibes', cursive;
  font-size: 2.8rem;
  color: #af9458;
  line-height: 1.2;
  word-break: break-word;
}
@media (min-width: 600px) and (max-width: 900px) {
  .title {
    font-size: 5.5rem; /* veći font za tablet */
  }
}
</style>
