<template>
  <v-sheet
    class="fourthM d-flex align-center justify-center flex-column"
    style="width: 100vw; height: 35vh; background-color: #222;"
  >
    <h1
      class="mb-4 mt-4"
      style="font-family: 'Great Vibes', cursive; color: #af9458; font-size: 2rem;"
    >
      {{ t('gallery') }}
    </h1>

    <v-container fluid class="pa-0">
      <v-slide-group show-arrows ref="slideGroup">
        <v-slide-group-item
          v-for="(image, index) in images"
          :key="index"
        >
          <v-img
            :src="image"
            height="120"
            width="180"
            class="ma-1 rounded hover-scale"
            cover
            @click="openGallery(index)"
            style="cursor: pointer;"
          />
        </v-slide-group-item>
      </v-slide-group>
    </v-container>

    <!-- Lightbox modal -->
    <v-dialog v-model="galleryOpen" max-width="90vw" persistent>
      <v-card
        class="d-flex flex-column"
        style="background: transparent; box-shadow: none;"
      >
        <div class="image-wrapper">
          <div class="image-container">
            <v-btn
              icon
              class="close-btn"
              @click="galleryOpen = false"
              aria-label="Zatvori galeriju"
            >
              <v-icon size="32" color="white">mdi-close</v-icon>
            </v-btn>

            <v-btn
              icon
              class="nav-btn left"
              @click="prevImage"
              aria-label="Prethodna slika"
            >
              <v-icon size="40" color="white">mdi-chevron-left</v-icon>
            </v-btn>

            <v-img
              :src="images[currentImage]"
              max-height="320"
              max-width="280"
              contain
              class="gallery-image"
            ></v-img>

            <v-btn
              icon
              class="nav-btn right"
              @click="nextImage"
              aria-label="Sljedeća slika"
            >
              <v-icon size="40" color="white">mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { t } = useI18n()

const images = [
  'https://picsum.photos/600/400?random=1',
  'https://picsum.photos/600/400?random=2',
  'https://picsum.photos/600/400?random=3',
  'https://picsum.photos/600/400?random=4',
  'https://picsum.photos/600/400?random=5',
  'https://picsum.photos/600/400?random=6',
  'https://picsum.photos/600/400?random=7',
]

const galleryOpen = ref(false)
const currentImage = ref(0)

function openGallery(index) {
  currentImage.value = index
  galleryOpen.value = true
}

function nextImage() {
  currentImage.value = (currentImage.value + 1) % images.length
}

function prevImage() {
  currentImage.value = (currentImage.value - 1 + images.length) % images.length
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

.fourthM {
  background-color: #222;
}

/* Hover efekt i tranzicija na slikama u slideru */
.hover-scale {
  transition: transform 0.3s ease;
  cursor: pointer;
}

.hover-scale:hover {
  transform: scale(1.07);
  z-index: 10;
}

/* Pozadina dijaloga */
.v-dialog__content {
  background: rgba(0, 0, 0, 0.85) !important;
}

/* Wrapper za centriranje slike i elemenata */
.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 320px;
  padding: 10px 0;
}

/* Unutarnji kontejner koji ograničava širinu */
.image-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 280px;
  width: 100%;
}

/* Slika u dijalogu */
.gallery-image {
  max-height: 320px;
  max-width: 280px;
  width: 100%;
  border-radius: 8px;
  object-fit: contain;
  user-select: none;
  z-index: 10;
}

/* Gumb za zatvaranje (X) */
.close-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 20;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  transition: background-color 0.3s ease;
  padding: 8px;
}
.close-btn:hover {
  background: rgba(0, 0, 0, 0.7);
}

/* Strelice za navigaciju */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  transition: background-color 0.3s ease;
  z-index: 20;
  padding: 12px;
}
.nav-btn:hover {
  background: rgba(0, 0, 0, 0.7);
}
.nav-btn.left {
  left: 8px;
}
.nav-btn.right {
  right: 8px;
}
</style>
