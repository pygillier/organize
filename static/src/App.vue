<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
<div class="page--top-app-bar">
  <ui-top-app-bar
    content-selector="#content-main"
    :type="type"
    :title="title"
    @nav="openDrawer = true"
  >
    <template #toolbar="{ toolbarItemClass }">
      <ui-icon-button
        :class="toolbarItemClass"
        icon="file_download"
      ></ui-icon-button>
      <ui-icon-button :class="toolbarItemClass" icon="print"></ui-icon-button>
      <ui-icon-button
        :class="toolbarItemClass"
        icon="bookmark"
      ></ui-icon-button>
    </template>
  </ui-top-app-bar>

  <ui-drawer v-model="openDrawer" type="modal">
    <ui-drawer-header>
      <ui-drawer-title>Header here</ui-drawer-title>
    </ui-drawer-header>
    <ui-drawer-content>
      <ui-list>
        <ui-item active>
          <ui-item-first-content>
            <ui-icon>arrow_back</ui-icon>
          </ui-item-first-content>
          <ui-item-text-content>Back</ui-item-text-content>
        </ui-item>
        <ui-list-divider></ui-list-divider>
      </ui-list>
    </ui-drawer-content>
  </ui-drawer>
  <div id="content-main">
    <ui-grid class="demo-grid">
  <ui-grid-cell class="demo-cell" columns="2">6</ui-grid-cell>
  <ui-grid-cell class="demo-cell" columns="8"><HelloWorld/></ui-grid-cell>
  <ui-grid-cell class="demo-cell" columns="2">2</ui-grid-cell>
</ui-grid>
  </div>
</div>

</template>

<script>
export default {
  title: "Organize, GTD for fummies",
  data() {
    return {
      type: 0,
      title: 'Organize',
      openDrawer: false
    };
  }
};
</script>