<template>
    <el-form ref="form" label-width="200px" :model="form" :inline="inline">
        <el-form-item v-for="item in formLabel" :key="item.label" :label="item.label">
            <el-input 
                v-if="item.type === 'input'"
                :placeholder="'Please input '+item.label"
                v-model="form[item.model]">
            ></el-input>
            <el-switch v-if="item.type === 'switch'" v-model="form[item.model]"></el-switch>
            <el-date-picker
                v-if="item.type === 'date'"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="select date"
                v-model="form[item.model]"
            ></el-date-picker>
            <el-select
                v-if="item.type === 'select'"
                placeholder="select"
                v-model="form[item.model]"
            >
                <el-option
                    v-for="item in item.opts"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
        </el-form-item>
        <el-form-item><slot></slot></el-form-item>
    </el-form>
</template>

<script>
export default {
    name:'myForm',
    props:{
        formLabel: Array,   //标签数据
        form: Object,       //表单数据
        inline: Boolean
    }
}
</script>

<style>

</style>