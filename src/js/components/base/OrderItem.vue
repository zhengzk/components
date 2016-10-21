<template>
    <div class="list-group-item">
        <div class="item">
            <div class="item-main">
                <span class="order-name">{{title}}</span>
                <span v-if="info" class="order-info">{{info}}</span>
                <span v-if="label" class="notes">{{label}}</span>
            </div>
            <div class="item-extend">
                <span class="order-price" v-if="price">
                    <template v-if="strong">
                        <span class="order-focus">{{price}}</span>{{unit}}
                    </template>
                    <template v-else>
                        {{price}}{{unit}}
                    </template>
                </span>
                <slot name="extend"></slot>
            </div>
        </div>
        <slot name="sub"></slot>
    </div>
</template>
<style>
</style>
<script>
    export default{
        props: {
           title: String,
           info:  String,
           label: String,
           price: Number,
           strong: {
               type: Boolean,
               default: false
           },
           unit: {
               type: String,
               default: "元"
           }
        },
        data(){
            return{
            }
        },
        components:{
        }
    }
</script>
