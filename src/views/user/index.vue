<template>
    <div class="manage">
        <el-dialog
            :title="operateType === 'add' ? 'add User' : 'update User'"
            :visible.sync="isShow"
        >
            <Form :formLabel="">

            </Form>
        </el-dialog>
    </div>
</template>

<script>
import Form from "../components/Form"
export default {
    name: 'User',
    components:{
        Form  
    },
    data() {
        return {
            operateType: 'add',
            isShown: false
        }
    },
}
</script>

<style>

</style>