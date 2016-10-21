<template>
    <div>
        <order-item :title="billInfo.serviceName">
            <template slot="extend">
                <div v-if="billInfo.orderType == 2" class="reflush" @click="doReflush">
                    <div class="inline icon-reflush"></div>
                    <span class="inline">刷新账单</span>
                </div>
            </template>
        </order-item>

        <order-item  :title="'订单总价'" :price="billInfo.totalPrice">
            <div class="item item-sub" slot="sub" v-if="list">
                <div class="list-group list-group-order">
                    <order-item :title="item.serviceName" :price="item.price" v-for="item in list"></order-item>
                </div>
            </div>
        </order-item>
        <!--<order-item v-else :title="'订单总价'" :price="billInfo.totalPrice"></order-item>-->
        <order-item v-if="billInfo.youHuiPrice" :title="'优惠金额'" :price="-billInfo.youHuiPrice"></order-item>


        <order-item v-if="coupon" :title="'代金券'" :info="coupon.discountName" :price="-coupon.money"></order-item>
        <template v-if="card">
            <order-item  v-if="card.discount < 10 && card.discount > 0" :title="'会员卡'" :info="card.cardName" :label="card.label" :price="card.discount" :unit="'折'"></order-item>
            <template v-else>
                <order-item :title="'会员卡'" :info="card.cardName" :label="card.label">
                    <template slot="extend">
                       <div v-if="coupon && !coupon.coexistWithDiscountCard" class="icon-prompt inline" @click="doPrompt">?</div>
                        无折扣
                    </template>
                </order-item>
            </template>
        </template>
        <order-item v-if="billInfo.hasPayedPrice" :title="'已付金额'" :price="billInfo.hasPayedPrice"></order-item>
        <order-item v-if="billInfo.needPayPrice" :title="'待付金额'" :price="billInfo.needPayPrice" :strong="true"></order-item>
    </div>
</template>

<script>
//    import OrderItem from "./base/OrderItem.vue"
//    var OrderItem = Vue.component('OrderItem')
    export default {
        props:{
            billInfo:{
                type: Object,
                required: true
            }
        },
        data(){
            return {
                coupon: null,
                list: null,
                card: null
            }
        },
        created(){
            this.list = this.billInfo.serviceFeeDetailList
            this.coupon = this.billInfo.coupon
            this.card = this.billInfo.card
        },
        methods:{
            doReflush(){
                window.location.reload()
            },
            doPrompt(){
                this.$dispatch('doConflictPrompt')
            }
        },
        components: {
//            OrderItem
        }
    }
</script>

<style>

</style>
