<template>
  <section id="home" class="min-h-screen">
    <Hero/>
  </section>
  <section id="about" class="min-h-screen py-30 px-5">
    <About/>
  </section>
  <section id="projects" class="min-h-screen pt-20">
    <Projects/>
  </section>
  <section id="contact" class="py-15">
    <Contact/>
  </section>
</template>
<script setup lang="ts">
import Hero from '@/Pages/Hero.vue'
import About from '@/Pages/AboutMe.vue'
import Projects from '@/Pages/Projects.vue'
import Contact from '@/Pages/Contact.vue'
import { onMounted, ref, onBeforeUnmount } from 'vue'
import { useNavigationStore } from '@/stores/useNavigationStore'

const store = useNavigationStore()

let observer: IntersectionObserver

onMounted(() => {
  const sections = document.querySelectorAll('section[id]')
  if (!sections.length) {
    console.warn('No sections found for IntersectionObserver.')
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id')
          if (id) {
            store.setActiveHash(`#${id}`)
          }
        }
      })
    },
    {
      threshold: 0.3,
      rootMargin: '0px 0px -30% 0px' // Adjust as needed for better visibility
    }
  )

  sections.forEach((section) => observer.observe(section))
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>