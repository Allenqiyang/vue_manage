<template>
  <el-row class="home" :gutter="0">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImage" />
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
      <el-card style="margin-top: 20px; height: 460px">
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
        <el-card
          v-for="item in countData"
          :key="item.name"
          :body-style="{display: 'flex', padding: 0}"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{background: item.color}"
          ></i>
          <div class="detail">
            <p class="num">${{item.value}}</p>
            <p class="txt">{{item.name}}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height: 280px">
        <div style="height: 280px" ref="echarts"></div>
      </el-card>
      <div class="graph">
        <el-card style="height: 260px">
          <div style="height: 240px" ref="userEcharts"></div>
        </el-card>
        <el-card style="height: 260px">
          <div style="height: 240px" ref="videoEcharts"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getData } from "../../api/data"
import * as echarts from "echarts"

export default {
  name: "Home",
  data(){
    return {
      userImage: require("../../assets/user.jpg"),
      tableData: [],
      tableLabel: {
        name: "Brand",
        todayBuy: "Today Buy",
        monthBuy: "Month Buy",
        totalBuy: "Total Buy"
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
        }
      ]
    }
  },
  mounted(){
    getData().then(response => {
      const {code, data} = response.data
      if(code === 1){
        this.tableData = data.tableData
        const orderData = data.orderData
        const xData = orderData.date
        const keyArray = Object.keys(orderData.data[0])
        const series = [];
        keyArray.forEach((key) =>
          series.push({
            name: key,
            data: orderData.data.map((item) => item[key]),
            type: "line"
          })
        )

        const option = {
          xAxis: { data: xData },
          yAxis: {},
          legend: { data: keyArray },
          series: series
        }

        echarts.init(this.$refs.echarts).setOption(option)

        const userOptions = {
          legend: {
            // 图例文字颜色
            textStyle: {
              color: "#333"
            },
          },
          grid: {
            left: "20%"
          },
          // 提示框
          tooltip: {
            trigger: "axis"
          },
          xAxis: {
            type: "category", // 类目轴
            data: data.userData.map((item) => item.date),
            axisLine: {
              lineStyle: {
                color: "#17b3a3"
              },
            },
            axisLabel: {
              interval: 0,
              color: "#333"
            }
          },
          yAxis: [
            {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: "#17b3a3"
                }
              }
            }
          ],
          color: [
            "#2ec7c9",
            "#b6a2de",
            "#5ab1ef",
            "#ffb980",
            "#d87a80",
            "#8d98b3",
          ],
          series: [
            {
              name: "new",
              data: data.userData.map((item) => item.new),
              type: "bar"
            },
            {
              name: "active",
              data: data.userData.map((item) => item.active),
              type: "bar"
            }
          ]
        }

        echarts.init(this.$refs.userEcharts).setOption(userOptions)

        const videoOptions = {
          tooltip: {
            trigger: "item"
          },
          color: [
            "#0f78f4",
            "#dd536b",
            "#9462e5",
            "#a6a6a6",
            "#e1bb22",
            "#39c362",
            "#3ed1cf"
          ],
          series: [
            {
              data: data.videoData,
              type: "pie"
            }
          ]
        }

        echarts.init(this.$refs.videoEcharts).setOption(videoOptions)
      }
      console.log(response)
    })
  }
}
</script>

<style>

</style>