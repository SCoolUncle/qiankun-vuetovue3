<template>
  <div style="height: 100%">
    <Layout>
      <Layout.Header>
        <TopMenuVue
          :menuList="state.menuInfo"
          @change="handleMenu"
        ></TopMenuVue>
      </Layout.Header>
      <Layout>
        <Layout.Sider>
          <Button @click="changeGlabalState">测试globalstate</Button>
        </Layout.Sider>
        <Layout.Content>
          <!-- 需要判断当前是不是子应用 -->
          <div id="reactapp_container">content</div>
          <router-view></router-view>
        </Layout.Content>
      </Layout>
      <Layout.Footer class="footer-box">footer</Layout.Footer>
    </Layout>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { Layout, Button } from "ant-design-vue";
import { useRouter } from "vue-router";
import TopMenuVue from "@/components/menu/TopMenu.vue";
import { initGlobalState, registerMicroApps, start } from "qiankun";

const router = useRouter();
const state = reactive({
  menuInfo: [
    {
      title: "首页",
      key: "/",
      icon: "",
      disabled: false,
    },
    {
      title: "详情",
      key: "/detail",
      icon: "",
      disabled: false,
    },
    {
      title: "客服（子）",
      key: "/reactapp/service",
      icon: "",
      disabled: false,
    },
    {
      title: "关于（子）",
      key: "/reactapp/about",
      icon: "",
      disabled: false,
    },
  ],
});

function handleMenu({ item, key, keyPath }) {
  router.push(key);
  console.log("layout");
  console.log(item, key, keyPath);
}

const globalActions = initGlobalState({
  data: {},
});

function changeGlabalState() {
  globalActions.setGlobalState({
    data: {
      name: "change",
    },
  });
}
</script>
<style lang="less">
@bgcolor: #fff;
.ant-layout {
  height: 100%;
  .ant-layout-header {
    background: @bgcolor !important;
  }
  .ant-layout-sider {
    background: @bgcolor !important;
  }
  .ant-layout-has-sider {
    height: calc(100% - 119px);
  }
  .ant-layout-content {
    overflow-y: auto;
  }
  .ant-layout-footer {
    width: 100%;
    height: 50px;
    background: #fff;
    border-top: #eee solid 1px;
  }
}
</style>
