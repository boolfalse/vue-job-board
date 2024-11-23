
<script setup>
import Item from './Item.vue';
import { defineProps, ref } from 'vue';

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

const items = ref([
  { id: 1, title: "Item 1", description: "This is item 1", category: "Category 1" },
  { id: 2, title: "Item 2", description: "This is item 2, if want to read more click on more button", category: "Category 2" },
  { id: 3, title: "Item 3", description: "This is item 3", category: "Category 3" },
  { id: 4, title: "Item 4", description: "This is item 4", category: "Category 4" },
  { id: 5, title: "Item 5", description: "This is item 5, if want to read more click on more button", category: "Category 5" },
]);
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
