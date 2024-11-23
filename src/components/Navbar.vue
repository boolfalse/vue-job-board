
<script setup>
import logo from '@/assets/img/logo.png';
import { useRoute } from "vue-router";

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <nav class="bg-green-700 border-b border-green-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <RouterLink to="/" class="flex flex-shrink-0 items-center mr-4">
            <img class="h-10 w-auto" :src="logo" alt="Items" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2">Items</span>
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink to="/" :class="[ 'text-white', 'px-3', 'py-2', 'rounded-md',
                  isActiveLink('/') ? 'bg-green-900' : 'hover:bg-gray-900 hover:text-white' ]">
                Home
              </RouterLink>
              <RouterLink to="/items" :class="[ 'text-white', 'px-3', 'py-2', 'rounded-md',
                  isActiveLink('/items') ? 'bg-green-900' : 'hover:bg-gray-900 hover:text-white' ]">
                Items
              </RouterLink>
              <RouterLink to="/items/add" :class="[ 'text-white', 'px-3', 'py-2', 'rounded-md',
                  isActiveLink('/items/add') ? 'bg-green-900' : 'hover:bg-gray-900 hover:text-white' ]">
                Add Item
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
