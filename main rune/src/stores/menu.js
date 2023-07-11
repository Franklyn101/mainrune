import { ref, computed } from 'vue'
import { defineStore } from 'pinia'





export const useMenuStore = defineStore('menu', () => ({
    isOpen: false,
    toggleMenu() {
      this.isOpen = !this.isOpen;
      (this.isOpen)
    }
  }));
  