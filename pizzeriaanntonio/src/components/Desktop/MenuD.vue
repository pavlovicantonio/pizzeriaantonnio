<template>
  <v-sheet style="width: 100vw; position: fixed; top: 0; left: 0; right: 0; z-index: 10;">
    <div class="nav-bar d-flex justify-center align-center position-relative">
      <!-- Hamburger menu za mobile -->
      <v-btn
        variant="text"
        class="hamburger-btn d-md-none position-absolute left-0"
        @click="drawer = !drawer"
        aria-label="Open menu"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <!-- Left nav za desktop -->
      <div class="nav-left d-flex ga-2 position-absolute left-0 d-none d-md-flex">
        <v-btn variant="text" class="nav-link">{{ t('location') }}</v-btn>
        <v-btn variant="text" class="nav-link">{{ t('gallery') }}</v-btn>
        <v-btn variant="text" class="nav-link">{{ t('workHours') }}</v-btn>
      </div>

      <!-- Center logo -->
      <div class="nav-logo">
        <v-img src="@/assets/logoresized2.png" width="200" height="80" />
      </div>

      <!-- Right nav za desktop -->
      <div class="nav-right d-flex ga-2 position-absolute right-0 d-none d-md-flex">
        <v-btn variant="text" class="nav-link">Menu</v-btn>
        <v-btn variant="text" class="nav-link">{{ t('contact') }}</v-btn>

        <v-menu offset-y>
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              variant="text"
              style="color: white; min-width: auto; display: flex; align-items: center;"
            >
              <v-avatar size="24" class="mr-2">
                <img :src="currentLanguage.flag" :alt="currentLanguage.name" />
              </v-avatar>
              <span>{{ currentLanguage.name }}</span>
              <v-icon class="ml-1">mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="lang in languages"
              :key="lang.code"
              @click="changeLanguage(lang.code)"
            >
              <v-list-item-title class="d-flex align-center">
                <v-avatar size="24" class="mr-2">
                  <img :src="lang.flag" :alt="lang.name" />
                </v-avatar>
                <span :style="{ fontWeight: lang.code === locale ? 'bold' : 'normal' }">
                  {{ lang.name }}
                </span>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>

    <!-- Drawer za mobile -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      fixed
      right
      class="d-md-none"
      style="background-color: #222;"
    >
      <v-list>
        <v-list-item @click="drawer = false">
          <v-list-item-title>{{ t('location') }}</v-list-item-title>
        </v-list-item>
        <v-list-item @click="drawer = false">
          <v-list-item-title>{{ t('gallery') }}</v-list-item-title>
        </v-list-item>
        <v-list-item @click="drawer = false">
          <v-list-item-title>{{ t('workHours') }}</v-list-item-title>
        </v-list-item>
        <v-list-item @click="drawer = false">
          <v-list-item-title>Menu</v-list-item-title>
        </v-list-item>
        <v-list-item @click="drawer = false">
          <v-list-item-title>{{ t('contact') }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const drawer = ref(false)

const languages = [
  { code: 'hr', name: 'Hrvatski', flag: 'https://flagcdn.com/w40/hr.png' },
  { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
  { code: 'de', name: 'Deutsch', flag: 'https://flagcdn.com/w40/de.png' },
  { code: 'it', name: 'Italiano', flag: 'https://flagcdn.com/w40/it.png' },
]

const currentLanguage = computed(() => {
  return languages.find(lang => lang.code === locale.value) || languages[0]
})

const changeLanguage = (lang) => {
  locale.value = lang
  drawer.value = false // zatvori drawer ako je otvoren
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel&display=swap');

.nav-bar {
  background-color: #222;
  height: 80px;
  position: relative;
  z-index: 2;
  padding: 0 16px;
}

.nav-link {
  color: white;
  font-family: 'Cinzel', serif;
  font-size: 18px;
  text-transform: none;
}

.hamburger-btn {
  color: white;
  margin-left: 8px;
  min-width: auto;
}

/* Hide elements on mobile */
.d-md-none {
  display: none;
}

/* Show hamburger on small screens */
@media (max-width: 768px) {
  .d-md-none {
    display: inline-flex !important;
  }
  .d-md-flex {
    display: none !important;
  }
  .nav-logo v-img {
    width: 150px !important;
    height: 60px !important;
  }
}
</style>
