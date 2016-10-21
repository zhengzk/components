Alert<template>
    <div class="modal modal-default fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button v-if="close" type="button" class="close" data-dismiss="modal" aria-label="Close" @click="doCancel">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <slot name="title">
                        <h4 v-if="title" class="modal-title">{{title}}</h4>
                    </slot>
                </div>
                <div class="modal-body">
                    <slot name="body">
                        <p>{{text}}</p>
                    </slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer">
                        <div class="btn-group">
                            <button type="button" class="btn btn-flat" data-dismiss="modal" @click="doCancel">取消</button>
                            <button type="button" class="btn btn-flat" @click="doSave">保存</button>
                        </div>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .modal-default{
        display: block;
        background: rgba(0,0,0,.5);
    }
    .modal-content{
        overflow: hidden;
    }
    .modal-header{
        text-align: center;
    }
    .modal-header h3{
        font-weight: normal;
    }
    .modal-dialog {
        position: absolute;
        width: 80%;
        top: 50%;
        left: 50%;
        margin-left: -40%;
    }
    .modal-dialog .btn-default{
        color: #e6454a;
    }
</style>
<script>
    export default{
        props: {
            title: {
                type: String
            },
            text: {
                type: String
            },
            close: {
                type: Boolean,
                default: true
            }
        },
        data(){
            return{
            }
        },
        methods: {
            doCancel () {
                this.$dispatch('dialogCancel');
            },
            doSave () {
                this.$dispatch('dialogConfirm');
            }
        },
        components:{
        }
    }
</script>
