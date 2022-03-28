import Mock from 'mockjs'
import homeApi from './mock_data/home.js'
import userApi from './mock_data/user.js'

Mock.mock('/home/getData',homeApi.getStaticData)
Mock.mock(/user\/add/,'post',userApi.createUser)
Mock.mock(/user\/edit/,'post',userApi.updateUser)
Mock.mock(/user\/getUser/,'get',userApi.getUserList)
Mock.mock(/user\/delete/,'post',userApi.deleteUser)