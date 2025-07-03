<template>
  <v-footer color="#2e2e2e" class="text-white py-8">
    <v-container class="text-center">
      <!-- Ikone društvenih mreža -->
      <div class="mb-4">
        <v-btn
          icon
          class="mx-2"
          variant="text"
          href="https://facebook.com"
          target="_blank"
        >
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn
          icon
          class="mx-2"
          variant="text"
          :href="`mailto:sainantonniodoo@mail.com?subject=Ask us anything!&body=Feel free to ask anything you want to know`"
          target="_blank"
        >
          <v-icon>mdi-gmail</v-icon>
        </v-btn>
        <v-btn
          icon
          class="mx-2"
          variant="text"
          href="https://google.com"
          target="_blank"
        >
          <v-icon>mdi-whatsapp</v-icon>
        </v-btn>
        <v-btn
          icon
          class="mx-2"
          variant="text"
          href="https://www.instagram.com/pizzeria.antonnio/"
          target="_blank"
        >
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
      </div>

      <!-- Linkovi -->
      <div class="mb-4">
        <v-btn class="text-white mx-2" variant="text" href="#">IMPRESUM</v-btn>
        <v-btn class="text-white mx-2" variant="text" href="#"
          >ZAŠTITA PODATAKA</v-btn
        >
        <v-btn class="text-white mx-2" variant="text" href="#"
          >PROMIJENI POSTAVKE KOLAČIĆA</v-btn
        >
      </div>

      <!-- Donja linija -->
      <v-divider color="cyan" class="my-4" thickness="1" />

      <!-- Napomena -->
      <p class="text-caption text-teal-lighten-3">
        <a
          class="text-teal-lighten-3"
          href="https://apwebing.netlify.app"
          target="_blank"
          >Dizajnirao APWebing. Sva prava pridržana.</a
        >
      </p>
    </v-container>
  </v-footer>
</template>

<script setup>
// Nema logike u ovom komponenti
</script>

<style scoped>
.v-footer {
  border-top: 1px solid #00bcd4;
}
</style>
