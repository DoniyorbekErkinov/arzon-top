<template>
  <div class="min-h-[400px] bg-white rounded-lg shadow-md flex flex-col justify-between">
    <img class="w-full h-2/3 object-contain" v-if="props.item" :src="props.item?.image"/>
    <div class="px-4">
      <div class="hover:text-blue-600 cursor-pointer text-lg text-gray-600 font-medium" @click="goProduct(props.item.id)" >{{props.item.title}}</div>
    </div>
    <div class="px-4 flex justify-between items-center">
      <span class="text-lg text-sky-600 font-semibold">{{props.item.current_price}} sum</span>
      <a :href="props.item?.url" target="_blank">
        <BaseIcon class="h-6 w-6 text-blue-500" name="eye"/>
      </a>
    </div>
    <div v-if="props.item?.marketplace">
      <div class="flex px-4 mb-4">
        <img class="w-5 h-5 rounded-full" :src="props.item?.marketplace.logo"/>
        <router-link to="/" class="ml-2 text-lg font-normal">{{props.item?.marketplace.name}}</router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import BaseIcon from '../components/BaseIcon/index.vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})

function goProduct(itemId) {
  console.log(itemId);
  router.push({name: 'SinglePost', params: {id: itemId}})
}
</script>
