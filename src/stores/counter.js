import { defineStore } from 'pinia'
import { ref, computed, reactive } from 'vue'
export const useNumstore = defineStore('numstore', () => {
  const num = ref(10)
  const doubleNum = computed(() => num.value * 2)

  const increase = x => {
    num.value++
    console.log(x)
  }

  const decrease = x => {
    num.value--
    console.log(x)
  }

  return {
    num,
    doubleNum,
    increase,
    decrease,
  }
})
