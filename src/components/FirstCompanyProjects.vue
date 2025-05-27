<template>
  <section class="mb-16">
    <h3 class="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">
      Web Development Contributions at ASKI Group of Companies
    </h3>
    <p class="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
      At ASKI, I built multiple responsive, database-driven websites across the company's core and sub-brands. While designs were typically provided as PDF mockups, I converted each into fully functional and mobile-ready platforms using ASP.NET Web Forms, HTML, CSS, Bootstrap, JavaScript, and jQuery AJAX.
    </p>

    <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      <div v-for="project in projects" :key="project.title" class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
        <h4 class="text-lg font-semibold text-gray-800 dark:text-white mb-1">
          <a :href="project.link" target="_blank" class="text-indigo-600 dark:text-blue-400 hover:underline">
            {{ project.title }}
          </a>
        </h4>
        <p class="text-sm text-gray-700 dark:text-gray-300">{{ project.description }}</p>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-2 italic">Responsive and backed by live database integration.</p>
      </div>
    </div>

    <div class="mt-12 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md max-w-5xl mx-auto">
      <div class="flex items-start gap-4">
        <div class="text-indigo-500 dark:text-indigo-400 text-3xl">💳</div>
        <div>
          <h4 class="text-lg font-bold text-gray-800 dark:text-white mb-1">Highlight Project – ACASH (E-Wallet Platform)</h4>
          <p class="text-sm text-gray-700 dark:text-gray-300">
            ACASH was a full-featured electronic wallet system with separate desktop and mobile web interfaces. I was responsible for the full architecture and implementation, including the frontend, backend, and API layer used by its mobile counterpart.
          </p>
          <p class="text-sm text-gray-700 dark:text-gray-300 mt-2">
            A major milestone was the integration of <strong class="text-indigo-600 dark:text-blue-400">ECPay</strong>, allowing seamless transactions through third-party physical outlets like 7-Eleven. I handled both API consumption and creation for ECPay integration.
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-2 italic">
            While the main website is no longer active, the app version remains available on the Play Store.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'ASKI Group of Companies, Inc.',
    link: 'https://aski.com.ph/',
    description:
      'The primary company website and the most complex one I handled, containing extensive content for various business units. Required meticulous backend integration and planning.'
  },
  {
    title: 'Aski Skills and Knowledge Institute',
    link: 'https://aski-ski.edu.ph/',
    description:
      'Educational arm site rebuilt from scratch twice due to design revisions. Demonstrated resilience, attention to detail, and dedication to delivering clean, scalable code.'
  },
  {
    title: 'ASKI Mutual Benefit Association',
    link: 'https://askimba.com.ph/',
    description:
      'Developed a lightweight yet dynamic site for the mutual benefit unit. Implemented fully from scratch and integrated with backend systems.'
  },
  {
    title: 'LOLC Finance Philippines Inc.',
    link: 'https://lolcfinancephilippines.com',
    description:
      'Created for an international Sri Lankan client during their partnership with ASKI. Delivered a polished, responsive website built to custom client needs.'
  }
];
</script>
