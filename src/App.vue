<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import examples from "./components/examples.vue";
</script>

<template>
  <div>
    <nav
      class="
        flex flex-row
        justify-center
        -mb-px
        text-lg text-blue-200
        font-bold
      "
    >
      <router-link
        class="mr-8 py-3 no-underline border-n-2"
        to="/"
        active-class=" text-purple-600"
        >Home</router-link
      >
      <router-link
        class="mr-8 py-3 no-underline border-n-2"
        to="/example1"
        active-class=" text-blue-500"
        >Example 1
      </router-link>
      <router-link
        class="mr-8 py-3 no-underline border-n-2"
        to="/example2"
        active-class=" text-pink-400"
        >Example 2
      </router-link>
      <router-link
        class="mr-8 py-3 no-underline border-n-2"
        to="/example3"
        active-class=" text-pink-600"
        >Example 3
      </router-link>
      <router-link
        class="mr-8 py-3 no-underline border-n-2"
        to="/tailwind"
        active-class=" text-gray-400"
        >Tailwind</router-link
      >
    </nav>

    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
