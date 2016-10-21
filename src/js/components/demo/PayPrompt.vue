<template>
    <dialog :close="false" :text="text">
        <h3 slot="title">{{title}}</h3>
        <div slot="footer">
            <button @click="doAction" class="btn btn-default btn-flat">我知道了</button>
        </div>
    </dialog>
</template>

<script>
//    import Dialog from '../base/Dialog.vue'
    export default {
        props:{
            title: {
                type: String,
                default: "温馨提示"
            },
            text: String
        },
        data(){
            return {
            }
        },
        created () {
        },
        methods: {
            doAction(){
                this.$dispatch('promptConfirm')
            }
        },
        events:{
//            dialogClose () {
//                this.promptText = "";
//                this.promptTitle = "";
//            },
//            dialogConfirm () {
//                this.promptText = "";
//                this.promptTitle = "";
//            }
        },
        components: {
//            Dialog
        }
    }
</script>

<style>

</style>
