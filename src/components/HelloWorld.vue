<template>
<div class="hello">

    <div>
        使用chrome DevTools查看内存分配情况，DateTime操作后，内存持续增加，Date和TimePicker无此现象
    </div>

    <el-button type="primary" plain @click="openDialog">测试DateTime【点击多次查看内存分配】</el-button>

    <el-button type="primary" style='margin-left:10px;' plain @click="openDialog1">测试Date【点击多次查看内存分配】</el-button>


    <el-button type="primary" style='margin-left:10px;' plain @click="openDialog2">测试el-input【点击多次查看内存分配】</el-button>

    <el-dialog title="测试DateTime" :visible.sync="dialogVisible" v-if="dialogVisible" width="30%" :before-close="handleClose">
        <DateTimeItem></DateTimeItem>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>

    <el-dialog title="测试Date" :visible.sync="dialogVisible1" v-if="dialogVisible1" width="30%" :before-close="handleClose">
        <DateItem></DateItem>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible1 = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
        </span>
    </el-dialog>

    <el-dialog title="测试ElInput" :visible.sync="dialogVisible2" v-if="dialogVisible2" width="50%" :before-close="handleClose">
        <ElInputItem></ElInputItem>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible2 = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
        </span>
    </el-dialog>
</div>
</template>

<script>
import DateTimeItem from "./DateTimeItem.vue";
import DateItem from "./DateItem.vue";
import ElInputItem  from "./ElInputItem.vue";
export default {
    name: "HelloWorld",
    components: { DateTimeItem: DateTimeItem, DateItem: DateItem , ElInputItem: ElInputItem},
    props: {
        msg: String,
    },
    data() {
        return {
            dialogVisible: false,
            dialogVisible1: false,
            dialogVisible2: false,
        };
    },
    methods: {
        openDialog() {
            this.dialogVisible = true;
        },
        openDialog1() {
            this.dialogVisible1 = true;
        },
        openDialog2() {
            this.dialogVisible2 = true;
        },
        handleClose() {
            this.dialogVisible =false;
            this.dialogVisible1 =false;
            this.dialogVisible2 =false;
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
