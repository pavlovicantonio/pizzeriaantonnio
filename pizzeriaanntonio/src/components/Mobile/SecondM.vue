<template>
  <v-sheet class="secondM">

    <div class="content-wrapper">
      <!-- Tekstualni dio -->
      <v-container class="pa-0 text-center text-container">
        <h1 class="heading">{{ t('tryNew') }}</h1>
        <p class="paragraph">{{ t('welcome1') }}</p>
      </v-container>

      <!-- Horizontalni divider -->
      <v-divider
        class="my-4 horizontal-divider"
        :thickness="4"
        :opacity="40"
      />

      <!-- Slika ispod teksta -->
      <v-img
        src="@/assets/collage2.jpg"
        alt="Pizzeria interijer"
        contain
        rounded="lg"
        class="image-container"
      />
    </div>

  </v-sheet>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cinzel&display=swap');

.secondM {
  width: 100vw;
  height: 100vh;
  background-color: #222;

  display: flex;
  justify-content: center;  /* horizontalno centriranje */
  align-items: center;      /* vertikalno centriranje */
  box-sizing: border-box;
  text-align: center;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;  /* horizontalno centriranje sadržaja unutar wrappera */
}

.heading {
  font-family: 'Great Vibes', cursive;
  color: #af9458;
  font-size: 2.5rem;
}

.paragraph {
  font-family: 'Cinzel', serif;
  color: white;
  font-size: 1.1rem;
  margin-top: 0.5rem;
  padding-right: 15vw;
  padding-left: 15vw;
}

.horizontal-divider {
  color: #af9458;
  width: 80%;
  margin: 2rem 0;
}

.image-container {
  width: 90%;
  max-width: 500px;
}

@media (min-width: 600px) and (max-width: 900px) {
  .paragraph {
    font-size: 1.7rem; /* veći font za tablet */
    line-height: 1.6;  /* da bude ugodniji za čitanje */
  }
  .heading{
    font-size:4.5rem;
  }
}
</style>
