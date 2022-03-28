<template>
    <div class="manage">
        <el-dialog
            :title="operateType === 'add' ? 'add User' : 'update User'"
            :visible.sync="isShow"
        >
            <my-form
                :formLabel="operateFormLabel"
                :form="operateForm"
                :inline="true"
                ref="form"
            ></my-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="isShow=false">cancel</el-button>
                <el-button type="primary" @click="confirm">confirm</el-button>
            </div>
        </el-dialog>
        <div class="manage-header">
            <el-button type="primary" @click="addUser">New User</el-button>
            <my-form
                :formLabel="formLabel"
                :form="searchForm"
                :inline="true"
                ref="form"
            >
                <el-button type="primary" @click="getList(searchForm.keyword)">Search</el-button>
            </my-form>
        </div>
        <my-table
            :tableData="tableData"
            :tableLabel="tableLabel"
            :config="config"
            @changePage="getList()"
            @edit="editUser"
            @delete="deleteUser"
        ></my-table>
    </div>
</template>

<script>
import myForm from "../../components/myForm.vue"
import myTable from "../../components/myTable.vue"
import { getUser } from "../../api/data"
export default {
    name: 'User',
    components:{
        myForm,
        myTable
    },
    data() {
        return {
            operateFormLabel: [
                {
                    model: 'name',
                    label: 'name',
                    type: 'input'
                },
                {
                    model: 'age',
                    label: 'age',
                    type: 'input'
                },
                {
                    model: 'sex',
                    label: 'gender',
                    type: 'select',
                    opts: [
                        {
                            label: '男',
                            value: 1
                        },
                        {
                            label: '女',
                            value: 0
                        }
                    ]
                },
                {
                    model: 'birth',
                    label: 'birth',
                    type: 'date'
                },
                {
                    model: 'addr',
                    label: 'address',
                    type: 'input'
                }
            ],
            operateForm:{
                name: "",
                addr: "",
                age: "",
                birth: "",
                sex: ""
            },
            formLabel:[
                {
                    model:"keyword",
                    label:'',
                    type:'input'
                }
            ],
            searchForm:{
                keyword:''
            },
            tableData:[],
            tableLabel:[
                {
                    prop: 'name',
                    label:'Name'
                },
                {
                    prop: 'age',
                    label:'Age'
                },
                {
                    prop: 'sexLabel',
                    label:'Gender'
                },
                {
                    prop: 'birth',
                    label:'Birth',
                    width: 200
                },
                {
                    prop: 'addr',
                    label:'Address',
                    width: 320
                },
            ],
            config:{
                page: 1,
                total: 30
            },
            operateType: 'add',
            isShow: false
        }
    },
    methods: {
        confirm(){
            if(this.operateType === 'edit'){
                this.$axios.post('/user/edit',this.operateForm).then(response => {
                    console.log(response)
                    this.isShow = false
                    this.getList()
                })
            }else{
                this.$axios.post('/user/add',this.operateForm).then(response => {
                    console.log(response)
                    this.isShow = false
                    this.getList()
                })
            }
        },
        addUser(){
            this.isShow = true,
            this.operateType = 'add',
            this.operateForm = {
                name: "",
                addr: "",
                age: "",
                birth: "",
                sex: ""
            }
        },
        getList(name = ''){
            this.config.loading = true
            name ? (this.config.page = 1) : ''
            getUser({
                page: this.config.page,
                name
            }).then(response => {
                this.tableData = response.data.list.map(item => {
                    item.sexLabel = item.sex === 0 ? '女' : '男'
                    return item
                })
                this.config.total = response.data.count
                this.config.loading = false
            })
        },
        editUser(row){
            this.operateType = 'edit'
            this.isShow = true
            this.operateForm = {...row}
        },
        deleteUser(row){
            this.$confirm("Are you sure you want to delete","Attention",{
                confirmButtonText: "Confirm",
                cancelButtonText: "Cancel",
                type: "warning"
            }).then(() => {
                const id = row.id
                this.$axios.post("/user/delete",{
                    params: {id}
                }).then(() => {
                    this.$message({
                        type: "success",
                        message: "User deleted successfully"
                    })
                    this.getList()
                })
            })
        }
    },
    created() {
        this.getList()
    }
}
</script>

<style lang="less" scoped>
.manage-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>