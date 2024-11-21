
<script>
export default {
  name: "App",
  data() {
    return {
      message: "Working with the Options API",
      status: "active",
      items: [
        { id: 1, name: "Apple" },
        { id: 2, name: "Banana" },
        { id: 3, name: "Cherry" },
      ],
      link: {
        url: "https://vuejs.org/guide/quick-start.html",
        title: "Vue.js",
      },
    }
  },
  methods: {
    getNewStatus() {
      return Math.random() > 0.33 ? "active" : Math.random() > 0.66 ? "pending" : "inactive";
    },
    setRandomStatus() {
      while (true) {
        const randomStatus = this.getNewStatus();
        if (randomStatus !== this.status) {
          this.status = randomStatus;
          break;
        }
      }
    }
  }
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
