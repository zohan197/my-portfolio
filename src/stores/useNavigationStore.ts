import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('section', {
  state: () => ({
    activeHash: '', // include the `#` to match your navLinks
  }),
  actions: {
    setActiveHash(hash: string) {
      this.activeHash = hash
    }
  }
})