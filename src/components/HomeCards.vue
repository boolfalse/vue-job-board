
<script setup>
import Card from '@/components/Card.vue';
</script>

<template>
  <section class="py-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card>
          <h2 class="text-2xl font-bold">Card 1</h2>
          <p class="mt-2 mb-4">Card 1 description</p>
          <a href="/items" class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">Browse Items</a>
        </Card>
        <Card bg="bg-green-100">
          <h2 class="text-2xl font-bold">Card 2</h2>
          <p class="mt-2 mb-4">Card 2 description</p>
          <a href="/items/add" class="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600">Add Item</a>
        </Card>
      </div>
    </div>
  </section>
</template>
