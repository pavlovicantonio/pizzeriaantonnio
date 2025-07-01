<template>
  <v-sheet class="firstD d-flex justify-center">
    <v-sheet class="secondD d-flex flex-row pa-6 ga-6">

      <!-- Lijevi dio: Meni -->
      <v-container class="pa-0 d-flex justify-center flex-column text-container" >
        <h1 style="font-family: 'Great Vibes', cursive; color: #af9458;">{{ t('tryNew') }}</h1>
        <p style="font-family: 'Cinzel', serif; color: white;">
            {{ t('welcome1') }}
        </p>
      </v-container>

      <!-- Vertikalna linija -->
      <v-divider :thickness="4" :opacity="40" vertical class="custom-divider mx-4 divider-desktop"/>

      <!-- Desni dio: Slika -->
      <v-img
        src="@/assets/collage2.jpg"
        alt="Pizzeria interijer"
        contain
        rounded="lg"
        class="image-container"
      ></v-img>

    </v-sheet>
  </v-sheet>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cinzel&display=swap');

.firstD {
  width: 100vw;
  height: 100vh;
  background-color: #222;
}

.secondD {
  background-color: transparent;
  height: 85vh;
  width: 98vw;
  overflow-y: auto;
  align-items: center; /* dodatno */
  display: flex;
  flex-direction: row; /* desktop */
}

/* Širine za desktop */
.text-container {
  width: 50%;
  padding-right: 1rem;
}
.text-container p{
    font-size: 1.3rem;
    min-height: 4em; /* prilagodi prema potrebi */
}
.image-container {
  width: 50%;
  z-index: 0;
}

/* Divider boja */
.custom-divider {
  color: #af9458;
}

/* Sakrij vertikalni divider na mobilnim */
.divider-desktop {
  display: block;
}

/* FONT veličine za desktop */
.text-container h1 {
  font-size: 3.5rem;
}
.text-container p {
  font-size: 1.3rem;
}
</style>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>