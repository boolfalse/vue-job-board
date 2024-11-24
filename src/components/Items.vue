
<script setup>
import Item from './Item.vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { onMounted, reactive } from 'vue';
import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  items: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get('/api/items');
    state.items = response.data;
  } catch (err) {
    toast.error(err.message); // Error fetching items!
  } finally {
    state.items = [];
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Items
      </h2>
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Item v-for="item in state.items.slice(0, limit || state.items.length)" :key="item.id" :item="item" />
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink to="/items" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">
      View All Items
    </RouterLink>
  </section>
</template>
