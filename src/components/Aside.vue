<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <h3>Allen's System</h3>
    <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.path" :key="item.path">
      <i :class="'el-icon-'+item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu v-for="item in hasChildren" :index="item.path" :key="item.path">
      <template slot="title">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group v-for="(subItem,subIndex) in item.children" :key="subItem.path">
        <el-menu-item @click="clickMenu(subItem)" :index="subIndex">{{subItem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      menu:[
        {
          path:'/',
          name:'home',
          label:'Home',
          icon:'s-home',
          url:'Home/Home'
        },
        {
          path:'/mall',
          name:'mall',
          label:'Goods-Manage',
          icon:'video-play',
          url:'MallManage/MallManage'
        },
        {
          path:'/user',
          name:'user',
          label:'User-Manage',
          icon:'user',
          url:'UserManage/UserManage'
        },
        {
          label:'Others',
          icon:'location',
          children:[
            {
              path:'/page1',
              name:'page1',
              label:'page1',
              icon:'setting',
              url:'Other/PageOne'
            },
            {
              path:'/page2',
              name:'page2',
              label:'page2',
              icon:'setting',
              url:'Other/PageTwo'
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item){
      this.$router.push({
        name:item.name
      })
      this.$store.commit('selectMenu',item)
    }
  },
  computed:{
    noChildren(){
      return this.menu.filter(item => !item.children)
    },
    hasChildren(){
      return this.menu.filter(item => item.children)
    },
    isCollapse(){
      return this.$store.state.tab.isCollapse
    }
  }
};
</script>

<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
  height:100%;
  h3{
    color:grey;
    text-align: center;
    line-height: 48px;
  }
}
</style>