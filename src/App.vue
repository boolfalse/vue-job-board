
<script>
import { ref, reactive } from 'vue';

export default {
  setup() {
    const message = "Working with the Vue 3 Composition API (long version)";
    const status = ref('active');
    const items = ref([
      { id: 1, name: "Apple" },
      { id: 2, name: "Banana" },
      { id: 3, name: "Cherry" },
    ]);
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

    return {
      message,
      status,
      items,
      link,
      setRandomStatus,
    };
  },
}
</script>

<template>
  <h2>{{ message }}</h2>
  <p v-if="status === 'active'">Status is active!</p>
  <p v-else-if="status === 'pending'">Status is pending!</p>
  <p v-else>Status is inactive!</p>

  <hr>

  <h3>Change Status:</h3>
<!--  <button v-on:click="setRandomStatus">Set Random Status</button>-->
  <button @click="setRandomStatus">Set Random Status</button>

  <hr>

  <h3>Items:</h3>
  <ul>
    <li v-for="item in items" :key="item.id">{{ item.name }}</li>
  </ul>

  <hr>
  <h3>Link</h3>
<!--  <a v-bind:href="link.url" v-bind:title="link.title" target="_blank">{{ link.title }}</a>-->
  <a :href="link.url" :title="link.title" target="_blank">{{ link.title }}</a>
</template>
