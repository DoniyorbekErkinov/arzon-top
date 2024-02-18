<template>
  <div>sdfds</div>
</template>
<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useMainStore } from '../../stores/useMainStore'
const store = useMainStore()
const route = useRoute()
onMounted(() => {
  console.log(route.params.slug);
  store.getProductsByBrands(route.params.slug, 0)
})
</script>
