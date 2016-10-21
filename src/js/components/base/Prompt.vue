<template>
    <div class="prompt-box">
        <div class="box">
            <h3 v-if="title">{{{title}}}</h3>
            <p  v-if="text" class="text">{{{text}}}</p>
            <slot name="extra"></slot>
            <div class="btn-box">
                <div class="confirm" @click="doConfirm">{{confirm}}</div>
                <div class="cancel" @click="doCancel">{{cancel}}</div>
            </div>
        </div>
    </div>
</template>
<style>
    .prompt-box {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,.5);
        z-index: 10;
    }

    .prompt-box .box {
        /*width: 85%;*/
        /*width: 280px;*/
        width: 295px;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 20;
        background: #fff;
        border-radius: 5px;
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        text-align: center;
        overflow-y: hidden;;
    }

    .prompt-box .box h3 {
        margin: 20px 0 10px;
        font-size: 17px
    }

    .prompt-box .text {
        margin: 15px 25px;
        text-align: left;
        position: relative
    }

    .prompt-box .btn-box {
        height: 44px;
        line-height: 44px;
        margin: 0 auto;
        font-size: 16px;
        border-top: 1px solid #e0e0e0;
        color: #e6454a;
        display: flex;
        display: -webkit-flex
    }

    .prompt-box .btn-box .confirm,.prompt-box .btn-box .cancel {
        -webkit-flex: 1;
        flex: 1;
    }

    .prompt-box .btn-box .confirm:hover,.prompt-box .btn-box .cancel:hover {
        background-color: #f5f7fa;
    }

    .prompt-box .btn-box .confirm{
        border-right: 1px solid #e0e0e0;
    }
</style>
<script>
    export default{
        props:{
            name: String,
            title: String,
            text: String,
            confirm: {
                type: String,
                default:'确定'
            },
            cancel: {
                type: String,
                default:'取消'
            }
        },
        data(){
            return{
            }
        },
        methods:{
            doConfirm(){
                this.$dispatch('confirm'+(this.name || 'Prompt'))
            },
            doCancel(){
                this.$dispatch('cancel'+(this.name || 'Prompt'))
            }
        },
        components:{
        }
    }
</script>