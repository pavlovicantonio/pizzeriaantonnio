<template>
    <v-sheet style="width: 100 vw; height: 100vh;" class="thirdD d-flex align-center justify-center">
        <v-container class="d-flex align-center justify-center flex-column" style="width: auto; height: auto; background-color: #222; border: 10px solid #af9458;">
            <v-icon class="icon">mdi-map-marker</v-icon>        
            <p style="font-family: 'Cinzel', serif; color: white;">Centar 54, 52100, Šišan, Hrvatska</p>
            <a href="https://www.google.com/maps/place/Pizzeria+Antonnio/@44.8524669,13.9411943,19z/data=!3m1!4b1!4m6!3m5!1s0x47632d016f34a55b:0x53223ff64c12fb1b!8m2!3d44.8524669!4d13.941838!16s%2Fg%2F11mdb53tkw?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D" target="_blank"><v-btn class="mt-5" style="font-family: 'Cinzel', serif; font-weight: bold; min-width: 170px; background-color: #af9458; color: white;">{{ t('contact_find_us') }}</v-btn></a>
        </v-container>
    </v-sheet>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cinzel&display=swap');

.thirdD{
    background-image: url('@/assets/worldmap2.svg');
    background-size: cover; 
    background-position: center;
}
.icon{
    color: white;
}
</style>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>