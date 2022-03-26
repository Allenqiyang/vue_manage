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
        currentMenu:null
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
        }
    }
}