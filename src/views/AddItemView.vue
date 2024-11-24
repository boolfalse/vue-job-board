
<script setup>
import router from '@/router';
import { reactive } from 'vue';
import axios from 'axios';

const form = reactive({
  category: '',
  title: '',
  description: '',
  producer: {
    name: '',
    description: '',
    email: '',
    phone: '',
  },
});

const handleSubmit = async () => {
  const newItem = {
    category: form.category,
    title: form.title,
    description: form.description,
    producer: {
      name: form.producer.name,
      description: form.producer.description,
      email: form.producer.email,
      phone: form.producer.phone,
    },
  };

  try {
    const response = await axios.post('http://localhost:3001/items', newItem);
    console.log("Item added successfully.");
    router.push(`/items/${response.data.id}`);
  } catch (err) {
    console.error("Error fetching item!", err.message);
  }
};
</script>

<template>
  <section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <form @submit.prevent="handleSubmit">
          <h2 class="text-3xl text-center font-semibold mb-6">Add Item</h2>

          <div class="mb-4">
            <label for="type" class="block text-gray-700 font-bold mb-2">Item Category</label>
            <select v-model="form.category"
                    id="category"
                    name="category"
                    class="border rounded w-full py-2 px-3"
                    required>
              <option value="">Select a Category</option>
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
              <option value="Category 3">Category 3</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Item Title</label>
            <input type="text"
                   v-model="form.title"
                   id="name"
                   name="name"
                   class="border rounded w-full py-2 px-3 mb-2"
                   placeholder="eg. Beautiful Apartment In Miami"
                   required
            />
          </div>

          <div class="mb-4">
            <label for="description" class="block text-gray-700 font-bold mb-2">Item Description</label>
            <textarea id="description"
                      v-model="form.description"
                      name="description"
                      class="border rounded w-full py-2 px-3"
                      rows="4"
                      placeholder="Item Description"></textarea>
          </div>

          <h3 class="text-2xl mb-5">Producer Info</h3>

          <div class="mb-4">
            <label for="producer" class="block text-gray-700 font-bold mb-2">Producer Name</label>
            <input type="text"
                   v-model="form.producer.name"
                   id="producer"
                   name="producer"
                   class="border rounded w-full py-2 px-3"
                   placeholder="Producer Name"
            />
          </div>

          <div class="mb-4">
            <label for="producer_description" class="block text-gray-700 font-bold mb-2">Producer</label>
            <textarea id="producer_description"
                      v-model="form.producer.description"
                      name="producer_description"
                      class="border rounded w-full py-2 px-3"
                      rows="4"
                      placeholder="Producer Description"></textarea>
          </div>

          <div class="mb-4">
            <label for="contact_email" class="block text-gray-700 font-bold mb-2">Producer Email</label>
            <input type="email"
                   v-model="form.producer.email"
                   id="email"
                   name="email"
                   class="border rounded w-full py-2 px-3"
                   placeholder="Producer Email"
                   required
            />
          </div>
          <div class="mb-4">
            <label for="phone" class="block text-gray-700 font-bold mb-2">Producer Phone</label>
            <input type="tel"
                   v-model="form.producer.phone"
                   id="phone"
                   name="phone"
                   class="border rounded w-full py-2 px-3"
                   placeholder="Producer Phone"
            />
          </div>

          <div>
            <button type="submit" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline">
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
