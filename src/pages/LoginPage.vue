<template>
  <div class="w-full h-screen flex justify-center items-center bg-slate-50">
    <form class="min-w-[400px] min-h-[300px] rounded-lg bg-white shadow-md px-4 py-8 flex flex-col justify-between items-center">
      <span class="text-2xl font-medium">Arzon Top</span>
      <q-input v-model="form.username" outlined placeholder="Username" class="w-full" />
      <q-input type="password" v-model="form.password" outlined placeholder="Password" class="w-full" />
      <q-btn @click="login" color="secondary" class="min-w-[150px]">Sign In</q-btn>
    </form>
  </div>
</template>
<script setup>
import { Notify } from 'quasar'
import AuthService from "../services/auth.service.js"
import { useRouter } from "vue-router";
import { reactive } from "vue";

import { useCookies } from "../composible/Cookie.js"

const { setCookie } = useCookies()
const router = useRouter()
const form = reactive({
  username: "",
  password: "",
});

function login() {
  console.log(2122);
  if (form.password && form.username) {
    AuthService.Login(form).then((res) => {
      console.log(2222);
      setCookie('token', res.data.token, 1);
      console.log(23333);
      router.push('/')
    })
  } else[
    Notify.create({
      type: 'negative',
      message: 'Username or password is empty'
    })
  ]
}
</script>
