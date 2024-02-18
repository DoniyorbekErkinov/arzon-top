<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-slate-50 overflow-x-hidden">
      <q-list class="w-full">
        <q-item-label header class="text-xl font-semibold text-slate-900 border-b border-b-slate-200">
          <router-link to="/">
            Arzon Top
          </router-link>
        </q-item-label>

        <q-item-section class="p-2 w-full" v-for="(link, i) in linksList" :key="i">
          <router-link :class="i == 0 ? 'px-4' : 'px-2'" class="w-full text-xl font-semibold" :to="link.link">
              {{ link.title }}
          </router-link>
        </q-item-section>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-slate-100 ">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";


export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);
    const linksList = ref([
      {
        title: "Posts",
        link: "/posts",
      },
      {
        title: "Brands",
        link: "/brands",
      },
    ]);

    return {
      linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
