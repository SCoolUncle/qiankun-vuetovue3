<template>
  <template v-for="menuItem in menuList">
    <Menu.Item v-if="!menuItem.children" :key="menuItem.key">
      <template #icon></template>
      {{ menuItem.title }}
    </Menu.Item>
    <Menu.SubMenu v-else :key="menuItem.key">
      <template #title>{{ menuItem.title }}</template>
      <MenuItem :data="menuItem.children"></MenuItem>
    </Menu.SubMenu>
  </template>
</template>
<script lang="ts" setup>
import { reactive, defineProps, computed } from "vue";
import { Menu } from "ant-design-vue";
const props = defineProps({
  data: Array,
});
const menuList = computed(() => props.data);
const state = reactive({
  currentkey: "",
});
</script>
<style lang="less" scoped></style>
