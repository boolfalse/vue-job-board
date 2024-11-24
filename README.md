
## Vue.js Job Board

- A simple job board application built with Vue.js based on the YouTube video ["Vue.js Crash Course 2024"](https://www.youtube.com/watch?v=VeNfHj6MhgA) by Brad Traversy.


#### Project Setup

- Clone the repository:
```sh
git clone git@github.com:boolfalse/vue-job-board.git && cd vue-job-board
```

- Install the dependencies:
```sh
npm install
```


#### Backend

- Crate a new file `src/data.json`:
```sh
touch src/data.json
```

- Copy below JSON data and paste it into a new created `src/data.json` (modify the data as needed):
```json
{
  "items": [
    {"id": "1", "title": "Item 1", "category": "Category 1", "description": "Description 1. lorem ipsum dolor sit amet, consectetur adipiscing elit", "producer": {"name": "Producer 1", "description": "Producer description 1", "email": "produces1@example.com", "phone": "+1234567890"}},
    {"id": "2", "title": "Item 2", "category": "Category 2", "description": "Description 2", "producer": {"name": "Producer 2", "description": "Producer description 2", "email": "produces2@example.com", "phone": "+1234567890"}},
    {"id": "3", "title": "Item 3", "category": "Category 3", "description": "Description 3", "producer": {"name": "Producer 3", "description": "Producer description 3", "email": "produces3@example.com", "phone": "+1234567890"}},
    {"id": "4", "title": "Item 4", "category": "Category 4", "description": "Description 4. lorem ipsum dolor sit amet, consectetur adipiscing elit", "producer": {"name": "Producer 4", "description": "Producer description 4", "email": "produces4@example.com", "phone": "+1234567890"}},
    {"id": "5", "title": "Item 5", "category": "Category 5", "description": "Description 5", "producer": {"name": "Producer 5", "description": "Producer description 5", "email": "produces5@example.com", "phone": "+1234567890"}}
  ]
}
```

- Run the development server:
```sh
npm run server
```


#### Frontend

- Compile and hot-reload for development:
```sh
npm run dev
```

- Compile and minify for production:
```sh
npm run build
```


#### Project Resources:

- YouTube video: [Vue.js Crash Course 2024](https://www.youtube.com/watch?v=VeNfHj6MhgA)
- Project on GitHub: [Vue.js crash course files. Vue Jobs project.](https://github.com/bradtraversy/vue-crash-2024)
- Blogpost on TraversyMedia: [Vue.js Crash Course (Full 2024)](https://www.traversymedia.com/blog/vue-crash-course)


#### Useful Resources:

- Vue.js [Docs](https://vuejs.org/)
- [Vite Configuration](https://vite.dev/config/).
- [Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)
- [Tailwind CSS](https://v2.tailwindcss.com/docs/guides/vue-3-vite) with Vue 3 and Vite
- PrimeVue icons from [PrimeIcons](https://github.com/primefaces/primeicons?tab=readme-ov-file)
- [{JSON} Placeholder](https://jsonplaceholder.typicode.com/)
- [Vue Toastification](https://vue-toastification.maronato.dev/)


#### Author:

- Website: [BoolFalse](https://boolfalse.com/)
