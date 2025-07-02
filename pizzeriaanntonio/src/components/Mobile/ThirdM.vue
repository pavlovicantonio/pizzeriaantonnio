<template>
  <v-sheet
    class="thirdM d-flex align-center justify-center"
    style="width: 100vw; height: 100vh;"
  >
    <v-container
      class="d-flex align-center justify-center flex-column content-container"
      style="background-color: #222; border: 8px solid #af9458;"
    >
      <v-icon class="icon" size="48">mdi-map-marker</v-icon>
      <p class="address-text">Centar 54, 52100, Šišan, Hrvatska</p>
      <a
        href="https://www.google.com/maps/place/Pizzeria+Antonnio/@44.8524669,13.9411943,19z/data=!3m1!4b1!4m6!3m5!1s0x47632d016f34a55b:0x53223ff64c12fb1b!8m2!3d44.8524669!4d13.941838!16s%2Fg%2F11mdb53tkw?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
      >
        <v-btn class="btn" color="#af9458" dark>{{ t('contact_find_us') }}</v-btn>
      </a>
    </v-container>
  </v-sheet>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cinzel&display=swap');

.thirdM {
  background-image: url('@/assets/worldmap2.svg');
  background-size:initial;
  background-position: center;
  background-repeat: no-repeat;
}

.content-container {
  padding: 1.5rem 1.2rem;
  border-radius: 12px;
  max-width: 320px;
  width: 90vw;
  box-sizing: border-box;
  text-align: center;
}

.icon {
  color: white;
  margin-bottom: 0.5rem;
}

.address-text {
  font-family: 'Cinzel', serif;
  color: white;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.btn {
  font-family: 'Cinzel', serif;
  font-weight: bold;
  min-width: 150px;
  text-transform: none;
  font-size: 1rem;
}

/* Opcionalno: prilagodba za još manje ekrane */
@media (max-width: 360px) {
  .address-text {
    font-size: 1rem;
  }

  .btn {
    min-width: 130px;
    font-size: 0.9rem;
  }
}
</style>
