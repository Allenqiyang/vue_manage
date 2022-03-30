import Cookie from 'js-cookie'
export default{
    state:{
        isCollapse:true,
        tabsList:[
            {
                path:'/',
                name:'home',
                label:'Home',
                icon:'home'
            }
        ],
        currentMenu:null,
        menu:[]     //用来存储动态添加路由的数据
    },
    mutations:{
        collapseMenu(state){
            state.isCollapse = !state.isCollapse;
        },
        selectMenu(state,value){
            if(value.name !== 'home'){
                state.currentMenu = value
                const result = state.tabsList.findIndex(item => item.name === value.name)
                if(result === -1){
                    state.tabsList.push(value)
                }else{
                    state.currentMenu = null
                }
            }
        },
        closeTag(state,value){
            const result = state.tabsList.findIndex(item => item.name === value.name)
            state.tabsList.splice(result, 1)
        },
        setMenu(state,value){
            state.menu = value
            Cookie.set('menu',JSON.stringify(value))
        },
        clearMenu(state){
            state.menu = []
            Cookie.remove('menu')
        },
        addMenu(state,value){
            if(!Cookie.get('menu')) return
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            const menuArray = []
            //动态添加数据
            menu.forEach(item => {
                if(item.children){
                    item.children = item.children.map(item => {
                        item.component = () => import(`../views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                }else{
                    item.component = () => import(`../views/${item.url}`)
                    menuArray.push(item)
                }
            })
            // 动态添加路由
            menuArray.forEach(item => {
                value.addRoute('Main',item)
            })
        }
    }
}