
<script setup>
import axios from 'axios';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { reactive, onMounted } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import BackButton from "@/components/BackButton.vue";

const route = useRoute();

const itemId = route.params.id;

const state = reactive({
  item: {},
  isLoading: true,
});

const deleteItem = async () => {
  alert("Delete item logic goes here!");
};

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:3001/items/${itemId}`);
    state.item = response.data;
  } catch (err) {
    console.error("Error fetching item!", err.message);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <BackButton />
  <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
    <PulseLoader />
  </div>
  <section v-else class="bg-green-50">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
            <h1 class="text-3xl font-bold mb-4">{{ state.item.title }}</h1>
            <div class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
              <i class="pi pi-tag text-xl text-orange-700 mr-2"></i>
              <p class="text-orange-700">{{ state.item.category }}</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-green-800 text-lg font-bold mb-6">Item Description</h3>
            <p class="mb-4">{{ state.item.description }}</p>
          </div>
        </main>

        <aside>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Producer Info</h3>
            <h2 class="text-2xl">{{ state.item.producer.name }}</h2>
            <p class="my-2">
              {{ state.item.producer.description }}
            </p>
            <hr class="my-4" />
            <h3 class="text-xl">Email:</h3>
            <p class="my-2 bg-green-100 p-2 font-bold">{{ state.item.producer.email }}</p>
            <h3 class="text-xl">Phone:</h3>
            <p class="my-2 bg-green-100 p-2 font-bold">{{ state.item.producer.phone }}</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">Manage Item</h3>
            <RouterLink :to="`/items/edit/${state.item.id}`" class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
              Edit Item
            </RouterLink>
            <button @click="deleteItem" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
              Delete Item
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
