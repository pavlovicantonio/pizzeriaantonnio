<template>
  <v-sheet class="py-10 d-flex flex-column align-center">
    <div class="text-center mb-6">
      <h2 class="font-weight-bold" style="font-size: 2.5rem; color: #af9458; font-family: 'Cinzel', serif;">{{ t('our') }}</h2>
      <div class="opening-title">{{ t('openingTimesTitle') }}</div>
      <div class="underline mt-2 mx-auto"></div>
    </div>

    <v-container class="text-center" style="max-width: 400px;">
      <v-row v-for="(day, i) in translatedDays" :key="i" justify="space-between" class="mb-1">
        <v-col class="text-start font-weight-bold" style="font-size: 1.5rem; color: #222; font-family: 'Great Vibes', serif;" cols="6">{{ day.name }}</v-col>
        <v-col class="text-end" style="font-size: 1.5rem; color: #af9458; font-family: 'Cinzel, serif';" cols="6">{{ day.hours }}</v-col>
      </v-row>
    </v-container>

    <v-container class="text-center mt-15">
    <h1 style="font-family: 'Cinzel', serif; color: #af9458; font-size: 2.5rem;">{{ t('available') }}</h1>
    <h1 style="color: #222; font-family: 'Great Vibes', cursive; font-size: 2.5rem;">{{ t('paymentOptions') }}</h1>
    <div class="underline mt-2 mx-auto mb-8"></div>

    <v-row justify="center" align="center" class="gap-8">
        <v-col cols="auto" class="d-flex flex-column align-center">
        <div class="icon-circle">
            <v-icon size="48" color="white">mdi-cash-multiple</v-icon>
        </div>
        <div class="icon-label">{{ t('cash') }}</div>
        </v-col>
        <v-col cols="auto" class="d-flex flex-column align-center">
        <div class="icon-circle">
            <v-icon size="48" color="white">mdi-credit-card</v-icon>
        </div>
        <div class="icon-label">{{ t('card') }}</div>
        </v-col>
    </v-row>
    </v-container>

  </v-sheet>
</template>


<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const days = [
  { key: 'monday', hours: '15:00 – 23:00' },
  { key: 'tuesday', hours: 'Closed' },
  { key: 'wednesday', hours: '15:00 – 23:00' },
  { key: 'thursday', hours: '15:00 – 23:00' },
  { key: 'friday', hours: '15:00 – 23:00' },
  { key: 'saturday', hours: '15:00 – 23:00' },
  { key: 'sunday', hours: '15:00 – 23:00' },
]

const translatedDays = computed(() =>
  days.map(day => ({
    name: t(`days.${day.key}`),
    hours: day.hours === 'Closed' ? t('closed') : day.hours
  }))
)
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cinzel&display=swap');

.opening-title {
  font-family: 'Great Vibes', cursive;
  font-size: 2rem;
  font-weight: 500;
  color: #222;
}

.underline {
  width: 60px;
  height: 4px;
  background-color: #af9458;
}

.open {
  color: #af9458;
  font-size: 1.5rem;
}

.closed {
  color: red;
  font-size: 1.5rem;
  font-family: 'Cinzel', serif;
  font-weight: 700;
}

.icon-circle {
  background-color: #af9458;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}

.icon-label {
  font-size: 1.2rem;
  font-family: 'Cinzel', serif;
  color: #222;
  font-weight: 550;
   width: 100px;          /* fiksna širina */
  text-align: center;    /* centriraj tekst unutar tog prostora */
  white-space: nowrap;   /* spriječi prelamanje */
  overflow: hidden;
  text-overflow: ellipsis; 
}

.underline {
  width: 60px;
  height: 4px;
  background-color: #af9458;
}

</style>
