<script setup>
</script>

<template>
  <ui-list :type="2">
  <ui-item v-for="i in 3" :key="i">
    <ui-item-text-content>
      <ui-item-text1>Line item</ui-item-text1>
      <ui-item-text2>Secondary text</ui-item-text2>
    </ui-item-text-content>
  </ui-item>
</ui-list>
  <ui-fab> <ui-icon :class="iconClass">add</ui-icon></ui-fab>

</template>
