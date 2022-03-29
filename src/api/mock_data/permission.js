import Mock from 'mockjs'
export default {
  getMenu: config => {
    const { username, password } = JSON.parse(config.body)
    // 先判断用户是否存在
    // 判断账号和密码是否对应
    if (username === 'admin' && password === 'admin') {
      return {
        code: 20000,
        data: {
          menu: [
            {
              path: '/home',
              name: 'home',
              label: 'Home',
              icon: 's-home',
              url: 'home/index'
            },
            {
              path: '/mall',
              name: 'mall',
              label: 'Goods-Manage',
              icon: 'video-play',
              url: 'mall/index'
            },
            {
              path: '/user',
              name: 'user',
              label: 'User-Manage',
              icon: 'user',
              url: 'user/index'
            },
            {
              label: 'Others',
              icon: 'location',
              children: [
                {
                  path: '/page1',
                  name: 'page1',
                  label: 'Page1',
                  icon: 'setting',
                  url: 'others/page1.vue'
                },
                {
                  path: '/page2',
                  name: 'page2',
                  label: 'Page2',
                  icon: 'setting',
                  url: 'others/page2.vue'
                }
              ]
            }
          ],
          token: Mock.Random.guid(),
          message: 'Get success!'
        }
      }
    } else if (username === 'xiaoxiao' && password === 'xiaoxiao') {
      return {
        code: 20000,
        data: {
          menu: [
            {
              path: '/home',
              name: 'home',
              label: 'Home',
              icon: 's-home',
              url: 'home/index'
            },
            {
              path: '/video',
              name: 'video',
              label: 'Goods-Manage',
              icon: 'video-play',
              url: 'mall/index'
            }
          ],
          token: Mock.Random.guid(),
          message: 'Get success!'
        }
      }
    } else {
      return {
        code: -999,
        data: {
          message: 'password wrong'
        }
      }
    }
  }
}