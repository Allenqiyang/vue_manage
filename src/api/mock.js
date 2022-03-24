import Mock from 'mockjs'
import homeApi from './mock_data/home.js'

Mock.mock('/home/getData',homeApi.getStaticData)