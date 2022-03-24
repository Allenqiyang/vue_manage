import axios from './axios'

export const getData = () => {
    return axios.request({
        url:'/home/getData'
    })
}