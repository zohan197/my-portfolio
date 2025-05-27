<template>
  <section
    class="relative min-h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden"
  >
    <!-- Background pattern -->
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-100/40 via-white dark:from-indigo-900/20 dark:via-gray-900"
    ></div>

    <div class="relative z-10">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Kevin Leano
      </h1>
      <h2 class="text-xl md:text-2xl text-indigo-600 dark:text-indigo-400 font-semibold mb-6">
        Full-Stack Developer
      </h2>
      <p class="text-gray-700 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
        Full-Stack Developer with 7+ years of experience building scalable web and desktop applications. 
        Proficient in C#, ASP.NET, SQL, and modern frontend tools like Vue.js and JavaScript. 
        Passionate about crafting efficient solutions and collaborating across teams to deliver high-quality software.
      </p>

      <!-- Buttons -->
      <div class="mt-6 flex justify-center gap-4 flex-wrap">
        <a
          href="../src/assets/Kevin_Leano_Resume.pdf"
          download
          class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded shadow transition"
        >
          Download Resume
        </a>
        <a
          href="#projects"
          class="text-indigo-600 dark:text-indigo-400 hover:underline font-medium flex items-center"
        >
          ↓ See Projects
        </a>
      </div>

      
    </div>
  </section>
</template>

<script setup lang="ts">

</script>
