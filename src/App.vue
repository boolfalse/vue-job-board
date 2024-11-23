
<script setup>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import Items from "@/components/Items.vue";
</script>

<template>
  <Navbar />
  <Hero title="Home" subtitle="Welcome to the Home Page" />
  <HomeCards />
  <Items :limit="3" showButton />
</template>
