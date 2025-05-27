<template>
  <div class="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700 shadow-sm">

      <nav class="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <h1
        @click="scrollToTop" 
        class="text-3xl cursor-pointer select-none font-bold tracking-tight text-primary flex items-center font-mono">
          <span class="text-4xl text-indigo-600 dark:text-indigo-400">K</span><span class="text-gray-700 dark:text-gray-300">L</span>
        </h1>
        <!-- Desktop Navigation -->
        <ul class="hidden md:flex items-center space-x-6 text-sm font-medium">
          <li v-for="link in navLinks" :key="link.to.hash">
            <RouterLink
              :to="link.to"
              class="group relative px-4 py-2 font-semibold transition duration-300 ease-in-out"
              :class="{
                'text-indigo-600 dark:text-indigo-400': isActive(link.to.hash),
                'text-gray-700 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400': !isActive(link.to.hash)
              }"
            >
              {{ link.label }}
              <Transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0 translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-2"
            >
              <span
                v-if="isActive(link.to.hash)"
                class="absolute left-1/2 bottom-0 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 via-indigo-400 to-gray-700 dark:to-gray-400 animate-gradient-x"
                style="width: 3.5rem; transform: translateX(-50%);"
              />
            </Transition>
            </RouterLink>
          
          </li>
          <li>
            <Button
              variant="ghost"
              size="icon"
              :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
              @click="toggleDarkMode"
            >
              <component :is="isDark ? Sun : Moon" class="w-5 h-5" />
            </Button>
          </li>
        </ul>

        <!-- Mobile Controls -->
        <div class="md:hidden flex items-center space-x-2">
          <Button variant="ghost" size="icon" @click="toggleDarkMode">
            <component :is="isDark ? Sun : Moon" class="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" @click="mobileMenuOpen = !mobileMenuOpen">
          <component :is="mobileMenuOpen ? XMarkIcon : Bars3Icon" class="w-6 h-6" />
        </Button>

        </div>
      </nav>

      <!-- Mobile Nav -->
      <!-- Mobile Nav -->
      <Motion
        tag="div"
        v-if="mobileMenuOpen"
        :initial="{ opacity: 0, y: -20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.3 }"
        class="md:hidden px-4 pt-2 pb-4 space-y-1"
      >
        <RouterLink
          v-for="link in navLinks"
          :key="link.to.hash"
          :to="link.to"
          
          class="block rounded-md transition relative"
          :class="{
            'text-primary font-semibold bg-muted': isActive(link.to.hash),
            'hover:bg-muted text-muted-foreground': !isActive(link.to.hash)
          }"
          @click="mobileMenuOpen = false"
        >
          <!-- Left gradient border for active -->
          <span
            v-if="isActive(link.to.hash)"
            class="absolute left-0 top-0 h-full w-1 rounded-tr-md rounded-br-md"
            style="background: linear-gradient(180deg, #4f46e5, #818cf8, #4f46e5);"
          ></span>

          <!-- Link text with left padding -->
          <span class="block pl-4 py-2 relative z-10">
            {{ link.label }}
          </span>
        </RouterLink>
      </Motion>
    </header>

    <main class="relative flex-grow w-full px-0 pt-12 z-0"> <!-- z-0 creates stacking context -->
  <!-- SVG background -->
  <svg
    class="absolute inset-0 w-full h-full opacity-20 dark:opacity-30 pointer-events-none z-0"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    viewBox="0 0 800 600"
  >
    <defs>
      <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.2" />
        <stop offset="100%" stop-color="#818cf8" stop-opacity="0.2" />
      </linearGradient>
    </defs>
    <polygon points="0,0 800,0 800,600" fill="url(#grad)" />
    <path d="M0 0 L200 300 L400 0 L600 300 L800 0 L800 600 L0 600 Z"
          fill="none" stroke="#4f46e5" stroke-opacity="0.1" stroke-width="2" />
  </svg>

  <!-- Noise overlay -->
  <div class="absolute inset-0 bg-noise opacity-10 pointer-events-none z-0"></div>

  <!-- Slot content -->
  <div class="relative z-10">
    <slot />
  </div>
</main>

    <!-- Footer -->
<footer class="border-t border-gray-200 dark:border-gray-700 py-6 text-center text-sm space-y-2">
  <div class="flex justify-center gap-6">
    <!-- Socials -->
    <div class="flex justify-center space-x-6">
      <a
        href="https://www.linkedin.com/in/kevin-leano-445710198/"
        target="_blank"
        rel="noopener"
        class="text-gray-600 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400 transition"
      >
        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.966 0-1.5-.696-1.5-1.56 0-.885.546-1.56 1.534-1.56.989 0 1.5.675 1.5 1.56 0 .864-.511 1.56-1.534 1.56zm13.5 11.3h-3v-5.5c0-1.379-.494-2.319-1.728-2.319-.943 0-1.504.635-1.751 1.248-.09.218-.113.521-.113.826v5.745h-3s.04-9.327 0-10.3h3v1.459c.398-.615 1.112-1.493 2.705-1.493 1.975 0 3.455 1.288 3.455 4.057v6.277z"
          />
        </svg>
      </a>
      <a
        href="https://github.com/zohan197"
        target="_blank"
        rel="noopener"
        class="text-gray-600 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400 transition"
      >
        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.604-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.467-2.381 1.236-3.221-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.004 2.043.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.655 1.653.242 2.873.119 3.176.771.84 1.234 1.911 1.234 3.221 0 4.609-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.216.694.825.576 4.765-1.589 8.2-6.086 8.2-11.386 0-6.627-5.373-12-12-12z"
          />
        </svg>
      </a>
      <a
        href="mailto:kevinleano19@gmail.com"
        class="text-gray-600 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400 transition"
      >
        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path
            d="M12 12.713l11.985-8.713H.015L12 12.713zm0 2.574L.015 6v12h23.97V6L12 15.287z"
          />
        </svg>
      </a>
    </div>
  </div>
  <div class="text-muted-foreground">
    © {{ new Date().getFullYear() }} Kevin Leano — Built with Vue, Tailwind, and shadcn
  </div>
</footer>

  </div>
</template>


<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { Sun, Moon } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Motion } from '@motionone/vue'
import { useNavigationStore } from '@/stores/useNavigationStore'

const mobileMenuOpen = ref(false)
const isDark = ref(true) // Default to dark mode
const route = useRoute()
const store = useNavigationStore()

const navLinks = [
  { to: { path: '/', hash: '#home' }, label: 'Home' },
  { to: { path: '/', hash: '#about' }, label: 'About' },
  { to: { path: '/', hash: '#projects' }, label: 'Projects' },
  { to: { path: '/', hash: '#contact' }, label: 'Contact' },
]

function isActive(linkTo: string) {
  if (route.path !== '/') return false

  return store.activeHash === linkTo
}

function scrollToTop() {
  window.scrollTo({ top: 0 , behavior: 'smooth' })
}

const applyDarkMode = (value: boolean) => {
  const html = document.documentElement
  if (value) html.classList.add('dark')
  else html.classList.remove('dark')
  localStorage.setItem('theme', value ? 'dark' : 'light')
}

const toggleDarkMode = () => {
  isDark.value = !isDark.value
}

watch(isDark, applyDarkMode)

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  isDark.value = savedTheme
    ? savedTheme === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches
  applyDarkMode(isDark.value)

})

</script>

