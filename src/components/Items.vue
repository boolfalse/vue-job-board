
<script setup>
import Item from './Item.vue';
import {defineProps, onMounted, ref} from 'vue';
import axios from "axios";

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

const items = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3001/items');
    items.value = response.data;
  } catch (err) {
    console.error("Error fetching jobs!", err.message);
  }
});
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Items
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Item v-for="item in items.slice(0, limit || items.length)" :key="item.id" :item="item" />
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink to="/items" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">
      View All Items
    </RouterLink>
  </section>
</template>
