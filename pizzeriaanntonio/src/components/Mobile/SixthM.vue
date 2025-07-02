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
        Pizze
      </h2>
      <div v-for="pizza in pizzas" :key="pizza.name" class="pizza-card">
        <v-img :src="pizza.image" :alt="pizza.name" height="200" cover></v-img>
        <div class="pizza-info">
          <h3>{{ pizza.name }}</h3>
          <p>{{ pizza.description }}</p>
          <span class="price">{{ pizza.price }} €</span>
        </div>
      </div>
    </v-sheet>

    <v-sheet
      class="d-flex flex-wrap justify-center"
      style="background-color: #222; padding: 32px; gap: 24px"
    >
      <h2 style="width: 100%; color: white; font-family: 'Cinzel', serif">
        Sendviči
      </h2>
      <div
        v-for="sandwich in sandwiches"
        :key="sandwich.name"
        class="pizza-card"
      >
        <v-img
          :src="sandwich.image"
          :alt="sandwich.name"
          height="200"
          cover
        ></v-img>
        <div class="pizza-info">
          <h3>{{ sandwich.name }}</h3>
          <p>{{ sandwich.description }}</p>
          <span class="price">{{ sandwich.price }} €</span>
        </div>
      </div>
    </v-sheet>
  </div>
</template>

<script setup>
const pizzas = [
  {
    name: "Cock-a-Doodle Bacon",
    description:
      "Creamy garlic Parmesan sauce, grilled chicken, smoked bacon, diced Roma tomatoes, Parmesan crust",
    price: "10.50",
    image: "https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg",
  },
  {
    name: "Pretzel Piggy",
    description:
      "Garlic Parmesan sauce, mushrooms, bacon, spinach, pretzel crust edge",
    price: "11.00",
    image: "https://www.dominos.co.in/files/items/Non-Veg_Supreme.jpg",
  },
  {
    name: "Giddy-Up BBQ Chicken",
    description:
      "BBQ sauce, grilled chicken, fresh red onions, cheddar on the edge",
    price: "10.75",
    image: "https://www.dominos.co.in/files/items/Pepper_Barbeque_&_Onion.jpg",
  },
  {
    name: "Margherita",
    description: "Tomato, mozzarella, and fresh basil — a timeless classic.",
    price: "8.50",
    image: "https://www.dominos.co.in/files/items/Margherit.jpg",
  },
];

const sandwiches = [
  {
    name: "Classic Club",
    description:
      "Turkey, ham, bacon, lettuce, tomato, and mayo on toasted bread.",
    price: "6.50",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
  },
  {
    name: "Italian Sub",
    description:
      "Salami, ham, mortadella, provolone, lettuce, tomato, and Italian dressing.",
    price: "7.00",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
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
