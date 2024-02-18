<template>
  <q-page class="p-8">
    <div class="grid grid-cols-4 gap-5 w-full">
      <div class="cursor-pointer" v-for="(item, i) in store.brands" :key="i" @click="goToSomePage(item.slug)">
        <div class="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
          <q-img loading="lazy" spinner-color="white" height="64px" style="width: 64px; " class="h-16 w-16" :src="item.image" fit="fill"/>
          <span class="text-xl font-semibold">{{item.name}}</span>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import {onMounted, onUnmounted} from 'vue'
import { useMainStore } from 'src/stores/useMainStore';
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useMainStore()
function goToSomePage(item) {
  router.push({name: 'BrandPosts', params: {slug: item}})
}
function handleScroll() {

}
onMounted(() => {
  store.getBrands()
  document.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll)
})
</script>
