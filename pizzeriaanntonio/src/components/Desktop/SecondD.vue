<template>
  <v-sheet class="firstD d-flex align-center justify-center">
    <v-sheet class="secondD d-flex flex-row pa-6 ga-6">

      <!-- Lijevi dio: Meni -->
      <v-container class="pa-0 d-flex justify-center flex-column text-container" >
        <h1 style="font-family: 'Great Vibes', cursive; color: #af9458;">Probajte nešto novo</h1>
        <p style="font-family: 'Cinzel', serif; color: white;">
          Nova pizzeria u Šišanu donosi dašak Napulja ravno na vaš stol! Naše napoletanske pizze rade se s posebnom pažnjom – od dugotrajne fermentacije tijesta do pečenja u peći na drva. Osim pizze, u ponudi su i ukusni sendviči te domaći deserti, idealni za svaki trenutak dana. Uživajte u opuštenom ambijentu uz laganu glazbu i prijateljsku atmosferu – savršeno mjesto za bijeg od svakodnevice.
        </p>
      </v-container>

      <!-- Vertikalna linija -->
      <v-divider :thickness="4" :opacity="40" vertical class="custom-divider mx-4 divider-desktop"/>

      <!-- Desni dio: Slika -->
      <v-img
        src="@/assets/collage2.jpg"
        alt="Pizzeria interijer"
        contain
        rounded="lg"
        class="image-container"
      ></v-img>

    </v-sheet>
  </v-sheet>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cinzel&display=swap');

.firstD {
  width: 100vw;
  height: 100vh;
  background-color: #222;
}

.secondD {
  background-color: transparent;
  height: 85vh;
  width: 98vw;
  overflow-y: auto;

  /* desktop layout: horizontal */
  flex-direction: row;
}

/* Tekst i slika širine */
.text-container {
  width: 50%;
  padding-right: 1rem;
}
.image-container {
  width: 50%;
  z-index: 0;
}

/* Divider boja */
.custom-divider {
  color: #af9458;
}

/* Prilagodba fontova za desktop */
.text-container h1 {
  font-size: 3.5rem;
}
.text-container p {
  font-size: 1.3rem;
}

/* --- MOBILE --- */
@media (max-width: 768px) {
  .secondD {
    /* vertikalno slaganje */
    flex-direction: column;
    height: auto;
  }

  .text-container,
  .image-container {
    width: 100% !important;
    padding: 0 !important;
  }

  /* Sakrij vertikalni divider na mobilnim */
  .divider-desktop {
    display: none;
  }

  .text-container h1 {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
  }

  .text-container p {
    font-size: 1rem;
  }

  .image-container {
    margin-top: 1rem;
  }
}
</style>
