<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu mode="horizontal" router>
          <template v-for="(item, index) in menuList">
            <template v-if="item.meta.visible">
              <el-menu-item v-if="!item.children" :key="item.key" :index="item.path">{{item.name}}</el-menu-item>
              <sub-menu v-else :data="item" :path="item.path" :key="item.key"></sub-menu>
            </template>
          </template>
        </el-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import SubMenu from "./components/subMenu";

export default {
  data() {
    return {};
  },
  components: {
    "sub-menu": SubMenu
  },
  computed: {
    menuList() {
      return this.$router.options.routes;
    }
  },
  created() {
    console.log(this.menuList);
  },
  methods: {}
};
</script>


<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
