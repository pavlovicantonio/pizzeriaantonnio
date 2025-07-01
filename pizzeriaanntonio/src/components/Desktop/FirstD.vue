<template>
    <v-sheet class="firstD d-flex align-center justify-center">
        <h1  class="title">{{ t('welcome') }}</h1>
    </v-sheet>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

.firstD {
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url('@/assets/image.png');
    background-size: cover;
    background-position: center;
    padding: 0 1rem; /* malo paddinga za mobile */
    box-sizing: border-box;
}

.title {
    font-family: 'Great Vibes', cursive;
    font-size: 4.5rem;
    color: #af9458;
    text-align: center;
}

</style>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
