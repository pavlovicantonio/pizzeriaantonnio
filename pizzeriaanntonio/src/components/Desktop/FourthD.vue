<template>
  <v-sheet style="width: 100vw; height: 55vh; background-color: #222;" class="fourthD d-flex align-center justify-center flex-column">
    <h1 class="mb-5 mt-5" style="font-family: 'Great Vibes', cursive; color: #af9458; font-size: 3rem;">{{ t('gallery') }}</h1>
    
    <v-container fluid class="pa-0">
      <v-slide-group show-arrows ref="slideGroup">
        <v-slide-group-item v-for="(image, index) in images" :key="index">
          <v-img
            :src="image"
            height="200"
            width="300"
            class="ma-2 rounded hover-scale"
            cover
            @click="openGallery(index)"
            style="cursor: pointer;"
          ></v-img>
        </v-slide-group-item>
      </v-slide-group>
    </v-container>

    <!-- Lightbox modal -->
    <v-dialog v-model="galleryOpen" max-width="900" persistent>
      <v-card class="d-flex flex-column" style="background: transparent; box-shadow: none;">
        <div class="image-wrapper">
          <div class="image-container">
            <v-btn icon class="close-btn" @click="galleryOpen = false" aria-label="Zatvori galeriju">
              <v-icon size="28" color="white">mdi-close</v-icon>
            </v-btn>

            <v-btn icon class="nav-btn left" @click="prevImage" aria-label="Prethodna slika">
              <v-icon size="36" color="white">mdi-chevron-left</v-icon>
            </v-btn>

            <v-img
              :src="images[currentImage]"
              max-height="600"
              max-width="800"
              contain
              class="gallery-image"
            ></v-img>

            <v-btn icon class="nav-btn right" @click="nextImage" aria-label="Sljedeća slika">
              <v-icon size="36" color="white">mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

import { ref } from 'vue'

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

<style>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

.fourthD {
  background-color: #222;
}

.hover-scale {
  transition: transform 0.3s ease;
  cursor: pointer;
}

.hover-scale:hover {
  transform: scale(1.07);
  z-index: 10;
}

/* Pozadina za dijalog */
.v-dialog__content {
  background: rgba(0, 0, 0, 0.85) !important;
}

/* Wrapper za centriranje slike i elemenata */
.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
  padding: 20px 0;
}

/* Unutarnji kontejner koji ograničava širinu */
.image-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  width: 100%;
}

/* Slika */
.gallery-image {
  max-height: 600px;
  max-width: 800px;
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
  background: rgba(0,0,0,0.4);
  border-radius: 50%;
  transition: background-color 0.3s ease;
}
.close-btn:hover {
  background: rgba(0,0,0,0.7);
}

/* Strelice */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.4);
  border-radius: 50%;
  transition: background-color 0.3s ease;
  z-index: 20;
}
.nav-btn:hover {
  background: rgba(0,0,0,0.7);
}
.nav-btn.left {
  left: 8px;
}
.nav-btn.right {
  right: 8px;
}
</style>
