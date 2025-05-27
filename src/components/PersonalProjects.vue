<template>
    <div class="mb-16">
    <h3 class="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-white">
      Personal Projects – Modern Web Development
    </h3>
    <p class="text-center text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
      These are projects I've created to sharpen and showcase my current skills in Vue.js, Tailwind CSS, and backend integration using Laravel or ASP.NET Core.
    </p>
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
      >
        <div v-if="project.screenshots && project.screenshots.length" class="mb-4">
          <div
            class="flex space-x-2 overflow-y-auto scrollbar-hide"
            tabindex="0"
            aria-label="Project screenshots carousel"
          >
            <img
              v-for="(shot, index) in project.screenshots"
              :key="index"
              :src="shot"
              :alt="`Screenshot ${index + 1} of ${project.title}`"
              class="h-28 rounded object-cover flex-shrink-0 cursor-pointer transition transform hover:scale-105"
              @click="openModal(project.screenshots, index)"
              role="button"
              tabindex="0"
              @keydown.enter.prevent="openModal(project.screenshots, index)"
            />
          </div>
        </div>
        <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
        <p class="text-gray-700 dark:text-gray-300 mb-4">{{ project.description }}</p>
        <a
          v-if="project.link !== '#'"
          :href="project.link"
          target="_blank"
          class="text-indigo-600 hover:underline font-medium"
          >View Project →</a
        >
      </div>
    </div>

    <!-- Modal for larger image preview with navigation -->
    <div
      v-if="modalOpen"
      @click.self="closeModal"
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-label="Project screenshot viewer"
      @keydown.left.prevent="prevImage"
      @keydown.right.prevent="nextImage"
      @keydown.esc.prevent="closeModal"
      tabindex="0"
    >
      <button
        @click="closeModal"
        class="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-500"
        aria-label="Close modal"
      >
        &times;
      </button>

      <button
        @click.stop="prevImage"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold hover:text-indigo-400 select-none"
        aria-label="Previous image"
      >
        ‹
      </button>

      <img
        :src="currentImage"
        alt="Screenshot preview"
        class="max-w-full max-h-[80vh] rounded shadow-lg"
      />

      <div class="absolute bottom-6 text-white text-sm bg-black bg-opacity-50 px-4 py-1 rounded-full">
        Image {{ currentIndex + 1 }} of {{ currentGallery.length }}
      </div>

      <button
        @click.stop="nextImage"
        class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold hover:text-indigo-400 select-none"
        aria-label="Next image"
      >
        ›
    </button>
    </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description:
      'A personal portfolio website built with Vue 3, Tailwind CSS, and deployed on Netlify.',
    link: 'https://github.com/zohan197/my-portfolio',
    screenshots: [
      '/screenshots/PortFolio/1Home.png',
      '/screenshots/PortFolio/2About.png',
      '/screenshots/PortFolio/3Projects.png',
      '/screenshots/PortFolio/4Contacts.png',
    ],
  },
  {
    id: 2,
    title: 'Job Tracker App',
    description: 'A job application tracker built with Laravel and Vue.js.',
    link: '#',
    screenshots: [
      '/screenshots/JobTracker/1Dashboard.png',
      '/screenshots/JobTracker/2Joblisting-1.png',
      '/screenshots/JobTracker/2Joblisting-2.png',
      '/screenshots/JobTracker/2Joblisting-3.png',
      '/screenshots/JobTracker/3Resumes-1.png',
      '/screenshots/JobTracker/4Settings.png',
      '/screenshots/JobTracker/5Login.png',
      '/screenshots/JobTracker/6Register.png',
      '/screenshots/JobTracker/7ForgotPassoword.png',
    ],
  },
  {
    id: 3,
    title: 'Inventory Management SPA',
    description:
      'An inventory system using ASP.NET Core backend and Vue.js frontend.',
    link: '#',
    screenshots: [
      '/screenshots/IMS/1Dashboard.png',
      '/screenshots/IMS/2Products-1.png',
      '/screenshots/IMS/2Products-2.png',
      '/screenshots/IMS/2Products-3.png',
      '/screenshots/IMS/3Orders-1.png',
      '/screenshots/IMS/3Orders-2.png',
      '/screenshots/IMS/4Categories-1.png',
      '/screenshots/IMS/4Categories-2.png',
      '/screenshots/IMS/5Reports.png',
      '/screenshots/IMS/6AccountSettings.png',
      '/screenshots/IMS/Login.png',
      '/screenshots/IMS/Register.png',
    ],
  },
]

const modalOpen = ref(false)
const currentImage = ref('')
const currentIndex = ref(0)
let currentGallery: string[] = []


function openModal(gallery: string[], index:number) {
  currentGallery = gallery
  currentIndex.value = index
  currentImage.value = gallery[index]
  modalOpen.value = true
  // Focus the modal for keyboard navigation
  setTimeout(() => {
    const modal = document.querySelector('[role="dialog"]') as HTMLElement | null
    modal?.focus()
  }, 0)
}

function closeModal() {
  modalOpen.value = false
  currentGallery = []
  currentIndex.value = 0
  currentImage.value = ''
}

function nextImage() {
  if (!currentGallery.length) return
  currentIndex.value = (currentIndex.value + 1) % currentGallery.length
  currentImage.value = currentGallery[currentIndex.value]
}

function prevImage() {
  if (!currentGallery.length) return
  currentIndex.value =
    (currentIndex.value - 1 + currentGallery.length) % currentGallery.length
  currentImage.value = currentGallery[currentIndex.value]
}
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>