<template>
    <el-row class='home' :gutter="20">
        <el-col :span='8' style="margin-top:20px">
            <el-card shadow="hover">
                <div class="user">
                    <img :src="userImage">
                    <div class="userInfo">
                        <p class="name">Allen</p>
                        <p class="access">Administer</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>last login: <span>2022-3-20</span></p>
                    <p>last place: <span>ShenZhen</span></p>
                </div>
            </el-card>
            <el-card style="margin-top:20px;height:460px;">
                <el-table :data="tableData">
                    <el-table-column
                        v-for="(val,index) in tableLabel"
                        :key="index"
                        :prop="index"
                        :label="val"
                    >
                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16" style="margin-top:20px">
            <div class="num">
                <el-card v-for="item in countData" :key="item.name" :body-style="{display:'flex',padding:0}">
                    <i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}"></i>
                    <div class="detail">
                        <p class="num">${{item.value}}</p>
                        <p class="txt">{{item.name}}</p>
                    </div>
                </el-card>
            </div>
            <el-card style="height:280px"></el-card>
            <div class="graph">
                <el-card style="height:260px"></el-card>
                <el-card style="height:260px"></el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'Home',
    data(){
        return{
            userImage: require('../../assets/user.jpg'),
            tableData:[
                {
                    name: 'oppo',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: 'vivo',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: 'Apple',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: 'Xiaomi',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: 'Samsung',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: 'Meizu',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                }
            ],
            tableLabel:{
                name:"Brand",
                todayBuy:"Today Buy",
                monthBuy:"Month Buy",
                totalBuy:"Total Buy"
            },
            countData: [
                {
                    name: "今日支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "今日收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                },
                {
                    name: "今日未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                },
                {
                    name: "本月支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "本月收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                },
                {
                    name: "本月未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                },
            ],
        }
    },
}
</script>

<style>

</style>