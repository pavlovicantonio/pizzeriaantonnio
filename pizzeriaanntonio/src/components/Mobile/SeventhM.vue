<template>
  <v-sheet class="seventhD d-flex text-center align-center justify-center flex-column">
    <div class="mt-10">
      <h1 class="services-title">{{ t('our') }}</h1>
      <h1 class="services-subtitle">{{ t('services') }}</h1>
      <div class="underline mt-2 mx-auto"></div>
    </div>

    <div class="div-services mt-10 mb-10 d-flex">
      <div class="service-wrapper d-flex flex-column align-center" v-for="(icon, i) in icons" :key="i">
        <div class="services d-flex align-center justify-center">
          <v-icon class="services-icon">{{ icon.name }}</v-icon>
        </div>
        <span class="label-text">{{ t(icon.label) }}</span>
      </div>
    </div>
  </v-sheet>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const icons = [
  { name: 'mdi-paw', label: 'pets' },
  { name: 'mdi-wifi', label: 'wifi' },
  { name: 'mdi-human-wheelchair', label: 'accessibility' },
  { name: 'mdi-air-conditioner', label: 'airConditioning' },
  { name: 'mdi-food-takeout-box', label: 'takeaway' },
  { name: 'mdi-table-chair', label: 'seating' },
  { name: 'mdi-calendar-check', label: 'reservations' },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cinzel&display=swap');

.seventhD {
  height: auto;
  width: 100vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('@/assets/pizzeriaantonnio.png');
  background-size: cover;
  background-position: bottom;
}

.underline {
  width: 60px;
  height: 4px;
  background-color: #af9458;
}

.services-title {
  color: #af9458;
  font-family: 'Cinzel', serif;
  font-size: 3rem;
}

.services-subtitle {
  color: white;
  font-family: 'Great Vibes', cursive;
  font-size: 2.5rem;
}

.div-services {
  display: flex;
  gap: 45px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 16px;
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

/* ✅ MOBILNA VERZIJA */
@media (max-width: 600px) {
  .services-title {
    font-size: 2rem;
  }

  .services-subtitle {
    font-size: 2rem;
  }

  .services {
    height: 90px;
    width: 90px;
    border-radius: 50px;
  }

  .services-icon {
    font-size: 40px;
  }

  .label-text {
    font-size: 0.9rem;
    max-width: 90px;
  }

  .service-wrapper {
    min-width: 110px;
  }

  .div-services {
    gap: 24px;
    margin-top: 2rem !important;
  }
}
</style>
