<template>
    <el-container style="height:100%">
        <el-aside width="auto">
            <Aside></Aside>
        </el-aside>
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <Tag></Tag>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Aside from "../components/Aside"
import Header from "../components/Header"
import Tag from "../components/Tag"
export default {
    name: "Main",
    components: {
        Aside,
        Header,
        Tag
    },
    data() {
        return {}
    },
}
</script>

<style>
.el-header {
    background-color: rgb(99, 99, 99);
}
.el-main{
    padding-top: 0;
}
</style>