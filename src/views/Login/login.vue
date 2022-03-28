<template>
<div class="login">
    <img src="../../assets/TeaGardensMunnar.jpg" ref="back">
    <el-form
        @focus="onfocus"
        :model="form"
        status-icon
        :rules="rules"
        ref="form"
        label-width="100px"
        class="login-container"
    >
        <h3 class="login_title">⭐Login⭐</h3>
        <el-form-item
            label="Username"
            label-width="80px"
            prop="username"
            class="username"
        >
            <el-input
                @focus="onfocus"
                @blur="onblur"
                type="input"
                v-model="form.username"
                auto-complete="off"
                placeholder="input username"
            ></el-input>
        </el-form-item>
        <el-form-item
            label="Password"
            label-width="80px"
            prop="password"
        >
            <el-input
                @focus="onfocus"
                @blur="onblur"
                type="password"
                v-model="form.password"
                auto-complete="off"
                placeholder="input password"
            ></el-input>
        </el-form-item>
        <el-form-item class="login_submit">
            <el-button type="primary" @click="login" class="login_submit">Enter</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
import Mock from 'mockjs'
import {getMenu} from '../../api/data'
export default {
    name: 'login',
    data() {
        return {
            form:{

            },
            rules:{
                username:[
                    { required:true,message: 'input the username',trigger:"blur"},
                    {
                        min:3,
                        message: 'not less than 3 characters',
                        trigger:"blur"
                    }
                ],
                password:[
                    { required:true,message: 'input the password',trigger:"blur"}
                ]
            }
        }
    },
    methods:{
        login(){
            getMenu(this.form).then(response => {
                if(response.code === 20000){
                    
                }else{
                    this.$message.warning(response.data.message)
                }
            })
            const token = Mock.random.guid()    //用mock模拟一个随机数作为token
            this.$store.commit('setToken', token)
            this.$router.push({name: 'home'})
        },
        onfocus(){
            this.$refs.back.style = 'width:100%; filter:blur(5px); opacity:0.5'
        },
        onblur(){
            this.$refs.back.style = 'width: 100%;'
        }
    }
}
</script>

<style lang="less" scoped>
.login{
    display: flex;
    justify-content: center;
    align-items: center;
    // background: url(../../assets/TeaGardensMunnar.jpg);
    width: 100%;
    height: 100%;
    // background-size: 100%;
    // filter: blur(5px);
}
img{
    width: 100%;
}
.onBlur{
    width: 100%;
    filter: blur(2px);
}
.login-container{
    border-radius: 15px;
    background-clip: padding-box;
    margin: 150px auto;
    width: 350px;
    padding:35px 35px 15px 35px;
    background-color:rgb(252, 252, 252);
    border:1px solid #e0dfdf;
    box-shadow:0 0 25px #cac6c6;
    position: absolute;
}
.login_title{
    margin: 0px auto 40px auto;
    text-align:center;
    color: #505458;
}
.login_submit{
    margin:10px auto 0 auto;
}
</style>