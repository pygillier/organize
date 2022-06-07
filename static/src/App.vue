<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <ui-top-app-bar><!-- the application title --></ui-top-app-bar>
  <ui-drawer>
  <ui-drawer-header>
    <ui-drawer-title>Title</ui-drawer-title>
    <ui-drawer-subtitle>Subtitle</ui-drawer-subtitle>
  </ui-drawer-header>
  <ui-drawer-content>
    <ui-nav>
      <ui-nav-item active>Activated link</ui-nav-item>
      <ui-nav-item>Unactivated link</ui-nav-item>
    </ui-nav>
  </ui-drawer-content>
</ui-drawer>
  <img alt="Vue logo" src="assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>
