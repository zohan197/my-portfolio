<template>
  <section class="mx-auto">
    <div class="text-center mb-10">
      <h2 class="text-3xl font-bold mb-8 text-center text-indigo-600">About Me</h2>
      <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
        I'm <strong class="text-indigo-600 dark:text-indigo-400">Kevin Leano</strong>, a passionate Full Stack Developer and Software Engineer based in Cabanatuan City, Philippines, with over 7 years of professional experience. I specialize in building robust and scalable applications using a wide range of modern web technologies. I'm currently focused on mastering Vue.js and plan to explore React in the near future.
      </p>
      <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
        I am open to <span class="text-indigo-600 dark:text-indigo-400 font-medium">freelance work</span> and actively seeking <span class="text-indigo-600 dark:text-indigo-400 font-medium">full-time remote opportunities</span>. I enjoy building tools that make people's lives easier and constantly learning new technologies. Outside of work, I’m a passionate gamer (PS5 and PC) and love spending time cooking.
      </p>
    </div>

    <div class="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 max-w-5xl mx-auto">
      <!-- <h3 class="text-3xl font-bold mb-8 text-center text-indigo-600">About Me</h2> -->
      <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Tech Stack</h3>
      <div class="space-y-6">
        <div>
          <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
            <div v-for="tech in backendStack" :key="tech.name" class="flex flex-col items-center text-center transform transition-transform hover:scale-110">
              <img :src="tech.icon" :alt="tech.name" class="w-10 h-10 mb-2" />
              <span class="text-sm text-gray-700 dark:text-gray-200">{{ tech.name }}</span>
            </div>
          </div>
        </div>
        <div>
          <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
            <div v-for="tech in frontendStack" :key="tech.name" class="flex flex-col items-center text-center transform transition-transform hover:scale-110">
              <img :src="tech.icon" :alt="tech.name" class="w-10 h-10 mb-2" />
              <span class="text-sm text-gray-700 dark:text-gray-200">{{ tech.name }}</span>
            </div>
          </div>
        </div>
        <div>
          <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
            <div v-for="tech in toolsStack" :key="tech.name" class="flex flex-col items-center text-center transform transition-transform hover:scale-110">
              <img :src="tech.icon" :alt="tech.name" class="w-10 h-10 mb-2" />
              <span class="text-sm text-gray-700 dark:text-gray-200">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const backendStack = [
  { name: 'C#', icon: '../src/assets/icons/csharp.svg' },
  { name: '.NET Core', icon: '../src/assets/icons/dotnetcore.svg' },
  { name: 'VB.NET', icon: '../src/assets/icons/dotnet.svg' },
  { name: 'ASP.NET', icon: '../src/assets/icons/dotnet.svg' },
  { name: 'PHP', icon: '../src/assets/icons/php.svg' },
  { name: 'Laravel', icon: '../src/assets/icons/laravel.svg' },
  { name: 'MySQL', icon: '../src/assets/icons/mysql.svg' },
  { name: 'SQL Server', icon: '../src/assets/icons/sqlserver.svg' }
];

const frontendStack = [
  { name: 'JavaScript', icon: '../src/assets/icons/javascript.svg' },
  { name: 'Vue.js', icon: '../src/assets/icons/vue.svg' },
  { name: 'HTML5', icon: '../src/assets/icons/html5.svg' },
  { name: 'CSS3', icon: '../src/assets/icons/css3.svg' },
  { name: 'jQuery', icon: '../src/assets/icons/jquery.svg' }
];

const toolsStack = [
  { name: 'Azure DevOps', icon: '../src/assets/icons/azure.svg' },
  { name: 'GitHub', icon: '../src/assets/icons/github.svg' },
  { name: 'Git', icon: '../src/assets/icons/git.svg' },
  { name: 'Postman', icon: '../src/assets/icons/postman.svg' },
  { name: 'GitLab', icon: '../src/assets/icons/gitlab.svg' }
];
</script>

<style scoped>
section {
  scroll-margin-top: 80px;
}
</style>