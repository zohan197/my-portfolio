<template>
  <section
    class="relative min-h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden"
  >
    <!-- Background pattern -->
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-100/40 via-white dark:from-indigo-900/20 dark:via-gray-900"
    ></div>

    <div class="relative z-10 max-w-4xl mx-auto">
      <Motion
        tag="h1"
        class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: 0 }"
      >
        Kevin Leano
      </Motion>

      <Motion
        tag="h2"
        class="text-xl md:text-2xl text-indigo-600 dark:text-indigo-400 font-semibold mb-6"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: 0.2 }"
      >
        Full-Stack Developer
      </Motion>

      <Motion
        tag="p"
        class="text-gray-700 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: 0.4 }"
      >
        Full-Stack Developer with 7+ years of experience building scalable web and desktop applications. 
        Proficient in C#, ASP.NET, SQL, and modern frontend tools like Vue.js and JavaScript. 
        Passionate about crafting efficient solutions and collaborating across teams to deliver high-quality software.
      </Motion>

      <!-- Buttons container -->
      <div class="mt-6 flex justify-center gap-4 flex-wrap">
        <Motion
          tag="a"
          href="/Resume/Kevin_Leano_Resume.pdf"
          download
          class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded shadow transition-transform duration-300"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.6 }"
          @mouseover="(e) => e.currentTarget.style.transform = 'scale(1.05)'"
          @mouseleave="(e) => e.currentTarget.style.transform = 'scale(1)'"
        >
          Download Resume
        </Motion>

        <Motion
          tag="a"
          href="#projects"
          class="text-indigo-600 dark:text-indigo-400 font-medium flex items-center relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-indigo-600 after:dark:bg-indigo-400 after:transition-all after:duration-300 hover:after:w-full"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.8 }"
          @mouseover="(e) => e.currentTarget.style.transform = 'scale(1.05)'"
          @mouseleave="(e) => e.currentTarget.style.transform = 'scale(1)'"
        >
          ↓ See Projects
        </Motion>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { Motion } from '@motionone/vue'
</script>
