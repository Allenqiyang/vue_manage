<template>
    <div class="tabs">
        <el-tag
            size="small"
            v-for="(tag,index) in tags"
            :key="tag.name"
            :closable="tag.name !== 'home'"
            :effect="$route.name === tag.name ? 'dark' : 'plain'"
            @click="change(tag)"
            @close="close(tag,index)"
        >{{tag.label}}</el-tag>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'tag',
    data() {
        return {
            
        }
    },
    computed: mapState({
        tags: state => state.tab.tabsList
    }),
    methods: {
        change(item){
            this.$router.push({name: item.name})
        },
        close(tag,index){
            this.$store.commit('closeTag',tag)
            if(tag.name !== this.$route.name) 
            return
            if(index === this.tags.length - 1){
                this.$router.push({
                    name: this.tags[index - 1].name
                })
            }else{
                this.$router.push({
                    name: this.tags[index].name
                })
            }
        }
    }
}
</script>

<style lang="less" scoped>
.tabs{
    padding:10px;
    .el-tag{
        margin-right:10px;
        cursor:pointer;
    }
}
</style>