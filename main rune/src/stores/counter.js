import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counters',() => ({

     count : 0,
     increaseCount (){
      this.count++
      alert(count)
    },

     decreaseCount (){
      this.count--
      if (this.count <= 0) {
        this.count = 0
      }
    }
  

  
}));


export const useMenuStore = defineStore('menu', () => ({
  isOpen: false,
  toggleMenu() {
    this.isOpen = !this.isOpen;
    alert(this.isOpen)
  }
}));
