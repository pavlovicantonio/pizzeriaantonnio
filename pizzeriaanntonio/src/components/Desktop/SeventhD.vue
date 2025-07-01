<template>
  <v-sheet class="seventhD d-flex text-center align-center justify-center flex-column">
    <div>
      <h1 style="color: #af9458; font-family: 'Cinzel', serif; font-size: 3rem;">Our</h1>
      <h1 style="color: white; font-family: 'Great Vibes', cursive;">Services</h1>
      <div class="underline mt-2 mx-auto"></div>
    </div>

    <div class="div-services mt-10 d-flex">

      <div class="service-wrapper d-flex flex-column align-center">
        <div class="services d-flex align-center justify-center">
          <v-icon class="services-icon">mdi-paw</v-icon>
        </div>
        <span class="label-text">{{ t('pets') }}</span>
      </div>

      <div class="service-wrapper d-flex flex-column align-center">
        <div class="services d-flex align-center justify-center">
          <v-icon class="services-icon">mdi-wifi</v-icon>
        </div>
        <span class="label-text">{{ t('wifi') }}</span>
      </div>

      <div class="service-wrapper d-flex flex-column align-center">
        <div class="services d-flex align-center justify-center">
          <v-icon class="services-icon">mdi-human-wheelchair</v-icon>
        </div>
        <span class="label-text">{{ t('accessibility') }}</span>
      </div>

      <div class="service-wrapper d-flex flex-column align-center">
        <div class="services d-flex align-center justify-center">
          <v-icon class="services-icon">mdi-air-conditioner</v-icon>
        </div>
        <span class="label-text">{{ t('airConditioning') }}</span>
      </div>

      <div class="service-wrapper d-flex flex-column align-center">
        <div class="services d-flex align-center justify-center">
          <v-icon class="services-icon">mdi-food-takeout-box</v-icon>
        </div>
        <span class="label-text">{{ t('takeaway') }}</span>
      </div>

      <div class="service-wrapper d-flex flex-column align-center">
        <div class="services d-flex align-center justify-center">
          <v-icon class="services-icon">mdi-table-chair</v-icon>
        </div>
        <span class="label-text">{{ t('seating') }}</span>
      </div>

      <div class="service-wrapper d-flex flex-column align-center">
        <div class="services d-flex align-center justify-center">
          <v-icon class="services-icon">mdi-calendar-check</v-icon>
        </div>
        <span class="label-text">{{ t('reservations') }}</span>
      </div>

    </div>
  </v-sheet>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cinzel&display=swap');

.seventhD {
  height: 85vh;
  width: 100vw;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url('@/assets/pizzeriaantonnio.png');
  background-size: cover;
  background-position: bottom;
}

.underline {
  width: 60px;
  height: 4px;
  background-color: #af9458;
}

.div-services {
  display: flex;
  gap: 45px;
  flex-wrap: wrap;
  justify-content: center;
}

.service-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 170px;
}

.services {
  height: 130px;
  width: 130px;
  border-radius: 80px;
  background-color: #af9458;
  border: 5px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.services-icon {
  color: white;
  font-size: 60px;
}

.label-text {
  margin-top: 10px;
  color: white;
  font-weight: 600;
  font-family: 'Cinzel', serif;
  font-size: 1rem;
  text-align: center;
}
</style>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
