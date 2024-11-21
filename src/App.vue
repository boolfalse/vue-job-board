
<script setup>
import { ref, reactive, onMounted } from 'vue';

const message = "Working with the Vue 3 Composition API (short version)";
const status = ref('active');
const items = ref([]);
const newItemName = ref('');
const link = reactive({
  url: "https://vuejs.org/guide/quick-start.html",
  title: "Vue.js",
});

const setRandomStatus = () => {
  const statuses = ['active', 'pending', 'inactive'];
  while (true) {
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    if (randomStatus !== status.value) {
      status.value = randomStatus;
      break;
    }
  }
};
const addItem = () => {
  if (newItemName.value.trim() === '') {
    alert('Please enter an item name!');
    return;
  }

  items.value.push({
    id: items.value.length + 1,
    name: newItemName.value,
  });

  newItemName.value = '';
};
const deleteItem = (index) => {
  items.value.splice(index, 1);
};

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const data = await response.json();
    items.value = data.map((item) => ({
      id: item.id,
      name: item.title,
    }));
  } catch (err) {
    console.error(err.message);
  }
});
</script>

<template>
  <h2>{{ message }}</h2>
  <p v-if="status === 'active'">Status is active!</p>
  <p v-else-if="status === 'pending'">Status is pending!</p>
  <p v-else>Status is inactive!</p>

  <hr>

  <h3>Change Status:</h3>
  <button @click="setRandomStatus">Set Random Status</button>

  <hr>

  <form @submit.prevent="addItem">
    <label for="item">Item:</label>
    <input type="text"
           placeholder="Enter item name"
           id="item"
           v-model="newItemName"
    />
    <button type="submit">Add Item</button>
  </form>

  <h3>Items:</h3>
  <ul>
    <li v-for="(item, index) in items" :key="item.id">
      <button @click="deleteItem(index)">X</button>
      <span>{{ item.name }}</span>
    </li>
  </ul>

  <hr>
  <h3>Link</h3>
  <a :href="link.url" :title="link.title" target="_blank">{{ link.title }}</a>
</template>
