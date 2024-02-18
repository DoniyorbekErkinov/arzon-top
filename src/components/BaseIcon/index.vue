<script setup>
  import { watch, toRefs, defineAsyncComponent } from 'vue';
  const props = defineProps({
    name: {
      type: String,
      required: true,
      validate: (value) => {
        if (typeof value !== 'string') {
          return 'You should pass string type props';
        }
      }
    },
    folder: {
      type: String,
      validate: (value) => {
        if (typeof value !== 'string') {
          return 'You should pass string type props';
        }
      }
    }
  });
  toRefs(props);
  let icons = defineAsyncComponent(() => import(`./icons/${props.name}.vue`));

  watch(props, () => {
    icons = defineAsyncComponent(() => import(`./icons/${props.name}.vue`));
  });
</script>

<template>
  <component :is="icons"></component>
</template>
