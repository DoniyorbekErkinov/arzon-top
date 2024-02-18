<template>
  <div class="p-8">
    <div class="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-5 w-full">
      <div class="h-[550px]" v-for="(item, i) in store.products" :key="i">
        <CardComp class="h-[500px]" :item="item"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted} from 'vue'
import { useMainStore } from 'src/stores/useMainStore';
import CardComp from 'src/components/CardComp.vue';
const store = useMainStore()
function handleScroll() {

}
onMounted(() => {
  store.getProducts()
  document.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll)
})
</script>
