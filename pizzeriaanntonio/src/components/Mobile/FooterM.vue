<template>
  <v-footer color="#2e2e2e" class="text-white py-8">
    <v-container class="text-center">
      <!-- Ikone društvenih mreža -->
      <div class="mb-4 social-icons">
        <v-btn icon variant="text" href="https://facebook.com" target="_blank">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn
          icon
          variant="text"
          :href="`mailto:sainantonniodoo@mail.com?subject=Ask us anything!&body=Feel free to ask anything you want to know`"
          target="_blank"
        >
          <v-icon>mdi-gmail</v-icon>
        </v-btn>
        <v-btn icon variant="text" href="https://whatsapp.com" target="_blank">
          <v-icon>mdi-whatsapp</v-icon>
        </v-btn>
        <v-btn
          icon
          variant="text"
          href="https://www.instagram.com/pizzeria.antonnio/"
          target="_blank"
        >
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
      </div>

      <!-- Linkovi -->
      <div class="mb-4 footer-links">
        <v-btn class="text-white" variant="text" href="#">IMPRESUM</v-btn>
        <v-btn class="text-white" variant="text" href="#"
          >ZAŠTITA PODATAKA</v-btn
        >
        <v-btn class="text-white" variant="text" href="#"
          >PROMIJENI POSTAVKE KOLAČIĆA</v-btn
        >
      </div>

      <!-- Donja linija -->
      <v-divider color="cyan" class="my-4" thickness="1" />

      <!-- Napomena -->
      <p class="text-caption text-teal-lighten-3">
        <a
          href="https://apwebing.netlify.app"
          class="text-teal-lighten-3"
          target="_blank"
          >Dizajnirao APWebing. Sva prava pridržana.</a
        >
      </p>
    </v-container>
  </v-footer>
</template>

<script setup>
// Nema dodatne logike
</script>

<style scoped>
.v-footer {
  border-top: 1px solid #00bcd4;
}

.social-icons > * {
  margin: 0 8px;
  display: flex;
}

.footer-links > * {
  margin: 0 8px;
  font-size: 0.95rem;
  font-family: "Cinzel", serif;
}

/* ✅ MOBILNA VERZIJA */
@media (max-width: 600px) {
  .footer-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
  .social-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .footer-links > * {
    margin: 0 !important;
    font-size: 0.85rem;
  }

  .social-icons > * {
    margin: 0 !important;
  }

  .v-footer {
    padding: 24px 12px;
  }

  .text-caption {
    font-size: 0.75rem;
  }
}
</style>
