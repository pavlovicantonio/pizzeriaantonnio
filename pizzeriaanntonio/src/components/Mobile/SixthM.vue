<template>
  <div>
    <v-sheet style="padding: 16px; background-color: #222">
      <h1 style="font-family: 'Cinzel', serif; color: #af9458">Menu</h1>
    </v-sheet>

    <v-sheet
      class="d-flex flex-wrap justify-center"
      style="background-color: #222; padding: 32px; gap: 24px"
    >
      <h2 style="width: 100%; color: white; font-family: 'Cinzel', serif">
        Pizza
      </h2>
      <div v-for="pizza in pizzas" :key="pizza.key" class="pizza-card">
        <v-img
          :src="pizza.image"
          :alt="t(`pizzas.${pizza.key}.name`)"
          height="200"
          cover
        />
        <div class="pizza-info">
          <h3>{{ t(`pizza.${pizza.key}.name`) }}</h3>
          <p>{{ t(`pizza.${pizza.key}.desc`) }}</p>
          <span class="price">{{ pizza.price }} €</span>
        </div>
      </div>
    </v-sheet>

    <v-sheet
      class="d-flex flex-wrap justify-center"
      style="background-color: #222; padding: 32px; gap: 24px"
    >
      <h2 style="width: 100%; color: white; font-family: 'Cinzel', serif">
        {{ t("other") }}
      </h2>
      <div
        v-for="sandwich in sandwiches"
        :key="sandwich.key"
        class="pizza-card"
      >
        <v-img :src="sandwich.image" height="200" cover></v-img>
        <div class="pizza-info">
          <h3>{{ t(`sandwich.${sandwich.key}.name`) }}</h3>
          <p
            v-if="
              t(`sandwich.${sandwich.key}.desc`) !==
              `sandwich.${sandwich.key}.desc`
            "
          >
            {{ t(`sandwich.${sandwich.key}.desc`) }}
          </p>
          <span class="price">{{ sandwich.price }} €</span>
        </div>
      </div>
    </v-sheet>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const pizzas = [
  {
    key: "margarita_pizza",
    price: "8",
    image: "https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg",
  },
  {
    key: "marinara_pizza",
    price: "7",
    image: "https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg",
  },
  {
    key: "gustosa_pizza",
    price: "9",
    image: "https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg",
  },
  {
    key: "cottina_pizza",
    price: "8.50",
    image: "https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg",
  },
  {
    key: "capricciosa_pizza",
    price: "9",
    image: "https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg",
  },
  {
    key: "vegetariana_pizza",
    price: "10",
    image: "https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg",
  },
  {
    key: "dalmatina_pizza",
    price: "11",
    image: "https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg",
  },
  {
    key: "fantasia_pizza",
    price: "11",
    image: "https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg",
  },
  {
    key: "rustica_pizza",
    price: "10",
    image: "https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg",
  },
  {
    key: "diavola_pizza",
    price: "10",
    image: "https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg",
  },
  {
    key: "tonnina_pizza",
    price: "10",
    image: "https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg",
  },
  {
    key: "dolce_vita_pizza",
    price: "12",
    image: "https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg",
  },
  {
    key: "quatro_formaggi_pizza",
    price: "9",
    image: "https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg",
  },
  {
    key: "sapori_di_mare_pizza",
    price: "12",
    image: "https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg",
  },
  {
    key: "bianca_divina_pizza",
    price: "11",
    image: "https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg",
  },
  {
    key: "saporita_pizza",
    price: "11",
    image: "https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg",
  },
  {
    key: "smoked_pizza",
    price: "12",
    image: "https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg",
  },
  {
    key: "perla_di_bosco_pizza",
    price: "13",
    image: "https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg",
  },
  {
    key: "siciliana_pizza",
    price: "12",
    image: "https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg",
  },
];

const sandwiches = [
  {
    key: "sandwich_italiano",
    price: "10",
    image: "https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg",
  },
  {
    key: "sandwich_prosciutto",
    price: "9",
    image: "https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg",
  },
  {
    key: "lasagne",
    price: "12",
    image: "https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg",
  },
  {
    key: "menu_daily",
    price: "12",
    image: "https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg",
  },
];
</script>

<style scoped>
.pizza-card {
  width: 300px;
  background-color: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s;
}
.pizza-card:hover {
  transform: scale(1.03);
}
.pizza-info {
  padding: 16px;
  color: #fff;
}
.pizza-info h3 {
  margin: 0;
  font-family: "Cinzel", serif;
  color: #af9458;
}
.pizza-info p {
  margin: 8px 0;
  font-size: 14px;
}
.price {
  font-weight: bold;
  color: #ffcc66;
}

@media (max-width: 600px) {
  .pizza-card {
    width: 90vw;
  }
  .pizza-info {
    padding: 12px;
  }
  .pizza-info h3 {
    font-size: 1.2rem;
  }
  .pizza-info p {
    font-size: 13px;
  }
  .price {
    font-size: 1rem;
  }
  h1 {
    font-size: 1.8rem !important;
  }
  h2 {
    font-size: 1.4rem !important;
    margin-bottom: 1rem;
  }
}
</style>
