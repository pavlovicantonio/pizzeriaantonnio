<template>
  <v-sheet>
    <v-sheet v-if="$vuetify.display.mdAndUp">
      <MenuD />
      <FirstD id="home" />
      <SecondD id="about" />
      <ThirdD id="find" />
      <FourthD id="gallery" />
      <FifthD id="hours" />
      <SixthD id="menu" />
      <SeventhD id="services" />
      <EighthD id="contact" />
      <FooterD />
    </v-sheet>

    <v-sheet v-else>
      <MenuM />
      <FirstM id="home" />
      <SecondM id="about" />
      <ThirdM id="find" />
      <FourthM id="gallery" />
      <FifthM id="hours" />
      <SixthM id="menu" />
      <SeventhM id="services" />
      <EighthM id="contact" />
      <FooterM />
    </v-sheet>
  </v-sheet>
</template>

<script setup>
import MenuD from "@/components/Desktop/MenuD.vue";
import FirstD from "@/components/Desktop/FirstD.vue";
import SecondD from "@/components/Desktop/SecondD.vue";
import ThirdD from "@/components/Desktop/ThirdD.vue";
import FourthD from "@/components/Desktop/FourthD.vue";
import FifthD from "@/components/Desktop/FifthD.vue";
import SixthD from "@/components/Desktop/SixthD.vue";
import SeventhD from "@/components/Desktop/SeventhD.vue";
import EighthD from "@/components/Desktop/EighthD.vue";
import FooterD from "@/components/Desktop/FooterD.vue";

import MenuM from "@/components/Mobile/MenuM.vue";
import FirstM from "@/components/Mobile/FirstM.vue";
import SecondM from "@/components/Mobile/SecondM.vue";
import ThirdM from "@/components/Mobile/ThirdM.vue";
import FourthM from "@/components/Mobile/FourthM.vue";
import FifthM from "@/components/Mobile/FifthM.vue";
import SixthM from "@/components/Mobile/SixthM.vue";
import SeventhM from "@/components/Mobile/SeventhM.vue";
import EighthM from "@/components/Mobile/EighthM.vue";
import FooterM from "@/components/Mobile/FooterM.vue";
</script>
