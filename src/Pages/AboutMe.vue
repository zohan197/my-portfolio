<template>
  <section class="mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center mb-12">
  <h2 class="text-4xl font-extrabold mb-6 text-indigo-600 dark:text-indigo-400">About Me</h2>
  <p class="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
    Hi! I'm <strong class="text-indigo-600 dark:text-indigo-400">Kevin Leano</strong>, a developer based in Cabanatuan City, Philippines. Over the past 7 years, I’ve built everything from enterprise applications to internal tools—always with a focus on performance, usability, and maintainability.
  </p>
  <p class="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-4">
    I work mostly with Vue.js on the frontend, and both .NET and PHP Laravel on the backend. Lately, I’ve been exploring React and expanding my frontend toolkit. I'm open to <span class="font-semibold text-indigo-600 dark:text-indigo-400">freelance work</span> and actively seeking <span class="font-semibold text-indigo-600 dark:text-indigo-400">full-time remote opportunities</span>.
  </p>
  <p class="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-4">
    Outside of coding, I’m into gaming (PS5 and PC), and I enjoy experimenting in the kitchen. Whether I’m debugging code or recipes, I love the challenge of creating things that work.
  </p>
</div>


    <div
      ref="techStackRef"
      :class="[
        'bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-10 max-w-6xl mx-auto transition-all duration-700 ease-in-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      ]"
    >
      <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">Tech Stack</h3>

      <div class="space-y-10">
        <div v-for="(stack, index) in techStacks" :key="index">
          <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
            <div
              v-for="tech in stack"
              :key="tech.name"
              class="flex flex-col items-center text-center transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              <img :src="tech.icon" :alt="tech.name" class="w-10 h-10 mb-2" />
              <span class="text-sm text-gray-700 dark:text-gray-200">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import { useInView } from '@/composables/useInView';

const backendStack = [
  { name: 'C#', icon: '/icons/csharp.svg' },
  { name: '.NET Core', icon: '/icons/dotnetcore.svg' },
  { name: 'VB.NET', icon: '/icons/dotnet.svg' },
  { name: 'ASP.NET', icon: '/icons/dotnet.svg' },
  { name: 'PHP', icon: '/icons/php.svg' },
  { name: 'Laravel', icon: '/icons/laravel.svg' },
  { name: 'MySQL', icon: '/icons/mysql.svg' },
  { name: 'SQL Server', icon: '/icons/sqlserver.svg' }
];

const frontendStack = [
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'Vue.js', icon: '/icons/vue.svg' },
  { name: 'HTML5', icon: '/icons/html5.svg' },
  { name: 'CSS3', icon: '/icons/css3.svg' },
  { name: 'jQuery', icon: '/icons/jquery.svg' }
];

const toolsStack = [
  { name: 'Azure DevOps', icon: '/icons/azure.svg' },
  { name: 'GitHub', icon: '/icons/github.svg' },
  { name: 'Git', icon: '/icons/git.svg' },
  { name: 'Postman', icon: '/icons/postman.svg' },
  { name: 'GitLab', icon: '/icons/gitlab.svg' }
];

const techStacks = [backendStack, frontendStack, toolsStack];

const { target: techStackRef, isVisible } = useInView();
</script>
