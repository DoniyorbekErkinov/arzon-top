<template>
  <div>sdfsdf</div>
</template>
<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router';
import { useMainStore } from 'src/stores/useMainStore';
const store =useMainStore()
const route = useRoute()
onMounted(() => {
  console.log(route.params.id);
  store.getProductById(route.params.id)
})
</script>
