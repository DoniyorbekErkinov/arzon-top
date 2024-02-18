<template>
  <div class="w-full h-screen flex justify-center items-center bg-slate-50">
    <form
      class="min-w-[400px] min-h-[300px] rounded-lg bg-white shadow-md px-4 py-8 flex flex-col justify-between items-center"
    >
      <span class="text-2xl font-medium">Arzon Top</span>
      <q-input
        v-model="form.username"
        outlined
        placeholder="Username"
        class="w-full"
      />
      <q-input
        type="password"
        v-model="form.password"
        outlined
        placeholder="Password"
        class="w-full"
      />
      <q-btn @click="login" color="secondary" class="min-w-[150px]"
        >Sign In</q-btn
      >
    </form>
  </div>
</template>
<script setup>
import { Notify } from 'quasar'
import { usePost } from "../composible/ApiService";
import { useRouter } from "vue-router";
import { reactive } from "vue";
const router = useRouter()
const form = reactive({
  username: "",
  password: "",
});

function login() {
  if (form.password && form.username) {
    usePost({ url: "auth/api/token/", data: { ...form } }).then((res) => {
      console.log(res);
      localStorage.setItem("access", res.data.access)
      localStorage.setItem("refresh", res.data.refresh)
      Notify.create({
        type: 'positive',
        message: "Successfully logged in!"
      })
      router.push('/')

    }).catch((e) => {
      console.error(e);
      Notify.create({
        type: 'negative',
        message: e.response.data.detail || 'ERR_BAD_REQUEST'
      })
    })
  } else[
    Notify.create({
      type: 'negative',
      message: 'Username or password is empty'
    })
  ]
}
</script>
