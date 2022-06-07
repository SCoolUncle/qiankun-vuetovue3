<template>
  <div>
    <Menu
      v-model:selectKeys="state.currentkey"
      mode="horizontal"
      @click="changeMenu"
    >
      <MenuItem :data="props.menuList"></MenuItem>
    </Menu>
  </div>
</template>
<script lang="ts" setup>
import MenuItem from "./MenuItem";
import { reactive, defineEmits, defineProps } from "vue";
import { Menu } from "ant-design-vue";
import { array } from "vue-types";
const props = defineProps({
  menuList: Array,
});
const emit = defineEmits(["change"]);
const state = reactive({
  currentkey: "",
});

function changeMenu({ item, key, keyPath }) {
  emit("change", { item, key, keyPath });
}
</script>
<style lang="less" scoped></style>
