<template>
    <div>
        <el-form ref="ElInputItemForm" :model="ElInputItemForm" :inline="true"  label-width="150px">
            <el-row>
                <el-col :span="24">
                    <span>1:反复关闭当前弹窗，多次仅操作地址选项，查看内存占用，内存正确释放</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <span>2:反复关闭当前弹窗，多次仅操作姓名输入框选项，查看内存占用，内存无法释放</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <span>3:反复关闭当前弹窗，多次操作姓名输入框+地址选项，查看内存占用，因为姓名输入框影响，内存无法释放</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item class="new-label-title">
                        <label slot="label" class="g-t-red">姓名</label>
                        <el-input placeholder="请输入姓名" maxlength="20" v-model="ElInputItemForm.patientName"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item class="new-label-title">
                        <label slot="label">地址</label>
                        <el-cascader
                                ref="locationSelect"
                                v-model="ElInputItemForm.location"
                                :options="provinceData"
                                @change="handleChange">
                        </el-cascader>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
    import chinaCity from "../data/chinaCity.json";

    export default {
        name: "ElInputItem",
        props: {
            msg: String,
        },
        data() {
            return {
                provinceData: [],
                ElInputItemForm: {
                    value1: "",
                    patientName: "",
                    location: ["320000", "320100", "sxq320100"],
                    attackProvince: "江苏省",
                    attackCity: "南京市",
                    attackDistrict: "市辖区",
                }
            };
        },
        created() {
            console.group("%c%s", "color:green", "---created:DateItem.vue");
            this.getChinaCity();
        },
        beforeDestroy() {
            console.group("%c%s", "color:blue", "---beforeDestroy:DateItem.vue");
        },
        methods: {
            getChinaCity() {
                const data = chinaCity;
                const options = data.map(item => {
                    const {code, name, cityList} = item;
                    let children = null;
                    if (cityList && cityList.length) {
                        children = cityList.map(item => {
                            const {code, name, areaList} = item;
                            let children = null;
                            if (areaList && areaList.length) {
                                children = areaList.map(item => {
                                    const {code, name} = item;
                                    return {
                                        label: name,
                                        value: code,
                                    }
                                })
                                /*手动添加市辖区*/
                                const sxqCode = 'sxq' + code; //唯一值
                                children.unshift({
                                    label: '市辖区',
                                    value: sxqCode,
                                })
                            }
                            return {
                                label: name,
                                value: code,
                                children
                            }
                        })
                    }
                    return {
                        label: name,
                        value: code,
                        children
                    }
                });
                this.provinceData = Object.freeze(options);
            },
            handleChange() {
                const checkedNodes = this.$refs['locationSelect'].getCheckedNodes();
                const [a, b, c] = checkedNodes[0].pathLabels;
                this.ElInputItemForm.attackProvince = a;
                this.ElInputItemForm.attackCity = b;
                this.ElInputItemForm.attackDistrict = c;
            }
        },
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .el-col {
        text-align: left;

    }
    .el-col >>> span{
        line-height: 20px;
        font-size:16px;
    }
</style>
