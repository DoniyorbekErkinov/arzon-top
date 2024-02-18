<template>
  <div
    class="p-8 q-pa-md overflow-y-auto scrollbarActive"
    ref="scrollPageSourceRef"
  >
    <div
      class="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-5 w-full"
    >
      <div class="h-[550px]" v-for="(item, i) in store.products" :key="i">
        <CardComp class="h-[500px]" :item="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useMainStore } from "src/stores/useMainStore";
import CardComp from "src/components/CardComp.vue";
const store = useMainStore();

function handleScroll() {
  store.products_offset += store.products_limit
  store.getProducts()
}

onMounted(() => {
  if (store.products.length === 0) {
    store.getProducts();
  }
  console.log(store.products_offset);
  document.addEventListener("scroll", () => {
    let bottomOfWindow = Math.round(document.documentElement.scrollTop + window.innerHeight) == document.documentElement.offsetHeight;
    if (bottomOfWindow) {
      handleScroll()
    }
  });
});

onUnmounted(() => {
  document.removeEventListener("scroll", () => {
    let bottomOfWindow = Math.round(document.documentElement.scrollTop + window.innerHeight) == document.documentElement.offsetHeight;
    if (bottomOfWindow) {
      handleScroll()
    }
  });
});
</script>
