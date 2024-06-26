export const loginPageViewSnippet = `<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import LoginForm from '~/views/Auth/components/signin-form.vue'
import { useAuthStore } from '~/store/auth.store.ts'
import { iSignInForm } from '~/interfaces/auth.interfaces.ts';

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()

function onSubmit(payload: iSignInForm) {
  authStore.signIn(payload).then(() => router.push({ name: route.query.redirect?.toString() || 'Guide' }))
}
</script>

<template>
  <div class="">
    <h1>Sign In</h1>
    <login-form ref="loginForm" :loading="authStore.loading" @submit="onSubmit" />
  </div>
</template>
`
