<template>
    <header>
        <div class='l-content'>
            <el-button @click="handleMenu" plain icon='el-icon-menu' size='mini'></el-button>
            <h3 style='color:#fff'>Welcome to Allen's System👋</h3>
        </div>
        <div class='r-content'>
            <el-dropdown trigger='hover' size='mini'>
                <span>
                    <img :src="userImage">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Personal</el-dropdown-item>
                    <el-dropdown-item @click.native="logOut">Log out</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
export default {
    name:'Header',
    data(){
        return{
            userImage: require('../assets/user.jpg')
        }
    },
    methods:{
        handleMenu(){
            this.$store.commit('collapseMenu')
        },
        logOut(){
            this.$store.commit('clearToken')
            this.$store.commit('cleatMenu')
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="less" scoped>
    header{
        display:flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }
    .l-content{
        display:flex;
        align-items: center;
        .el-button{
            margin-right: 20px;
        }
    }
    .r-content{
        img{
            width:40px;
            height:40px;
            border-radius:50%;
            margin-right:10px;
        }
    }
</style>