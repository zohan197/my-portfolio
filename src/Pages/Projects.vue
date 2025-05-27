<template>
  <div class="max-w-5xl mx-auto px-4 py-12">
    <h2 class="text-3xl font-bold mb-8 text-center text-indigo-600">Projects</h2>
    <PersonalProjects/>
    <FirstCompanyProjects/>
    <SecondCompanyProjects/>
  </div>
</template>

<script setup lang="ts">
import PersonalProjects from '@/components/PersonalProjects.vue';
import FirstCompanyProjects from '@/components/FirstCompanyProjects.vue';
import SecondCompanyProjects from '@/components/SecondCompanyProjects.vue';
</script>

