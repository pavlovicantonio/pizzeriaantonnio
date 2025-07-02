<template>
  <div class="menu-wrapper d-md-none">
    <!-- Gornja traka -->
    <v-app-bar
      color="#222"
      height="64"
      class="d-flex align-center justify-space-between"
      flat
    >
      <v-btn icon @click="menuOpen = !menuOpen">
        <v-icon color="white">mdi-menu</v-icon>
      </v-btn>

      <v-img
        src="@/assets/logoresized2.png"
        width="140"
        height="50"
        class="mx-auto"
      />

      <div style="width: 40px"></div>
      <!-- Prazan prostor radi poravnanja -->
    </v-app-bar>

    <!-- Padajući meni -->
    <v-expand-transition>
      <v-sheet v-if="menuOpen" class="mobile-menu" color="#111">
        <v-container fluid>
          <v-btn
            block
            variant="text"
            class="menu-link"
            @click="(menuOpen = false), scrollTo('find')"
            >{{ t("location") }}</v-btn
          >
          <v-btn
            block
            variant="text"
            class="menu-link"
            @click="(menuOpen = false), scrollTo('gallery')"
            >{{ t("gallery") }}</v-btn
          >
          <v-btn
            block
            variant="text"
            class="menu-link"
            @click="(menuOpen = false), scrollTo('hours')"
            >{{ t("workHours") }}</v-btn
          >
          <v-btn
            block
            variant="text"
            class="menu-link"
            @click="(menuOpen = false), scrollTo('menu')"
            >Menu</v-btn
          >
          <v-btn
            block
            variant="text"
            class="menu-link"
            @click="(menuOpen = false), scrollTo('contact')"
            >{{ t("contact") }}</v-btn
          >

          <v-divider class="my-2" />

          <!-- Jezik odabir -->
          <div class="language-select px-2">
            <div class="text-white text-caption mb-1">{{ t("language") }}</div>
            <v-row dense>
              <v-col v-for="lang in languages" :key="lang.code" cols="6">
                <v-btn
                  block
                  variant="outlined"
                  color="white"
                  class="justify-start"
                  @click="selectLanguage(lang.code)"
                >
                  <v-avatar size="20" class="mr-2">
                    <img :src="lang.flag" />
                  </v-avatar>
                  {{ lang.name }}
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </v-sheet>
    </v-expand-transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const menuOpen = ref(false);
const { t, locale } = useI18n();

const languages = [
  { code: "hr", name: "Hrvatski", flag: "https://flagcdn.com/w40/hr.png" },
  { code: "en", name: "English", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "de", name: "Deutsch", flag: "https://flagcdn.com/w40/de.png" },
  { code: "it", name: "Italiano", flag: "https://flagcdn.com/w40/it.png" },
];

const selectLanguage = (lang) => {
  locale.value = lang;
  menuOpen.value = false;
};

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>

<style scoped>
.mobile-menu {
  position: fixed; /* fiksna pozicija */
  top: 64px; /* ispod app bara */
  left: 0;
  width: 100vw;
  z-index: 99;
  padding-bottom: 8px;
  background-color: #111; /* ovo je fallback ako Vuetify ne ubaci boju iz "color" prop */
  max-height: calc(100vh - 64px); /* da ne prelazi ekran */
  overflow-y: auto; /* omogućuje skrolanje unutar menija ako je predug */
}

.menu-link {
  color: white;
  justify-content: flex-start;
  font-size: 16px;
  text-transform: none;
}
</style>
