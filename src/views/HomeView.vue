
<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import Items from "@/components/Items.vue";
</script>

<template>
  <Hero />
  <HomeCards />
  <Items :limit="3" :showButton="true" />
</template>
