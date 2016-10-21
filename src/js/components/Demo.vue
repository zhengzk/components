<template >
    <!--<alert>账单信息</alert>-->
    <bill-info :bill-info="billInfo"></bill-info>

    <pay-prompt v-if="promptText" :text="promptText" :title="promptTitle"></pay-prompt>
    <choice-prompt v-if="choicePrompt" :coupon-val="66" :card-val="77"></choice-prompt>
    <prompt v-if="backPrompt" :name="'Back'" :text="'还差一步了,确定要退出码?'+'<span class=\'especial\'>'+ leftTimeText+ '<\/span>' + '内还可以从订单列表继续支付,否则订单将自动取消哦~'"></prompt>
    <prompt v-if="channelPrompt" :name="'Channel'" :cancel="'不换了'" :confirm="'更换'" :text="'不使用会员余额,将不能享受折扣,确定更换方式'"></prompt>

    <div class="dashboard">
        <button type="button" class="btn btn-primary" @click="toggleChoicePrompt">choicePrompt</button>
        <button type="button" class="btn btn-primary" @click="toggleChannelPrompt">channelPrompt</button>
        <button type="button" class="btn btn-primary" @click="togglePayPrompt">promptText</button>
    </div>
</template>

<script>
    var billInfo = {
        "billLastUpdateTime": 1476425546000,
        "serviceName": "手部美甲",
        "totalPrice": 189.00,
        "hasPayedPrice": null,
        "originalPrice": 189.00,
        "needPayPrice": 189.00,
        "orderType": 2,
        "rangLiPrice": null,
        "youHuiPrice": null,
        "useCardNeedPayPrice": null,
        "notUseCardNeedPayPrice": 189.00,
        "stillNeedPayPrice": null,
        "serviceFeeDetailList": [{
            serviceName:'配送费',
            price: 25
        }],
        "card": {
            "cardId": 592,
            "accountId": 231720,
            "cardName": "人生海海",
            "desc": null,
            "useInstruction": null,
            "discount": 0.3,
            "balancePrice": 999.00,
            "status": null,
            "canNotChangeCard": false,
            "needPayPrice": 5.67,
            "balancePayPrice": 5.67,
            "stillNeedPayPrice": null,
            "vipcardDiscountPrice": null,
            "couponDiscountPrice": null,
            "hasDiscount": true
        },
        "coupon":{
            // "id":"", //id
            "discountName": "折扣券", //名称
            "desc":"说明", //描述
            "useInstruction": "",//使用说明
            "discount":"", //折扣
            "money": 30,  //优惠券面值
            "status": 1, //状态
            // "invalideDate":"", //失效时间
            "coexistWithDiscountCard": false //能否会员卡卡共用
        }
    }
    var backUrl = "http://m.daojia.com/to/back"
    var backType = 0


    import BillInfo from  "./demo/BillInfo.vue"
    import PayPrompt from './demo/PayPrompt.vue'
    import ChoicePrompt from './demo/ChoicePrompt.vue'

    import createEventManager from '../event-manger'

    var eventManger = createEventManager()

    export default {
        data(){
            return {
                billInfo: billInfo,
                leftTimeText:'15:00',
                choicePrompt: false,
                backPrompt: false,
                channelPrompt: false,
                promptText: '',
                promptTitle: '温馨提示'
            }
        },
        components: {
            BillInfo,
            PayPrompt,
            ChoicePrompt

        },
        created () {
            var own = this
            console.log('created');
            own.fetchBack();
        },
        events:{
            promptConfirm(){
                eventManger.trigger('promptConfirm')
                this.promptText = '';
            },
            /**
             * 确认离开返回上一页面
             **/
            confirmBack(){
                this.backPrompt = false
                if(backUrl){
                    window.location.replace(backUrl)
                }else{
                    window.history.back()
                }
            },
            /**
             * 取消确认离开
             **/
            cancelBack(){
                window.history.forward()
//                var router = this.$route.router
//                router.go({
//                    name:'pay',
//                    params:{
//                        step:'show'
//                    }
//                })
                //this.backPrompt = false
            },
            /**
             * 确认更换支付方式
             **/
            confirmChannel(){
                this.channelPrompt = false
                eventManger.trigger('confirmChannel')
            },
            /**
             * 取消更换支付方式
             **/
            cancelChannel(){
                this.channelPrompt = false
                eventManger.trigger('cancelChannel')
            },
            /**
             * 确认用券
             **/
            confirmUseCoupon(){
                this.choicePrompt = false
                eventManger.trigger('confirmUseCoupon')
                //doSomeThings
            },
            /**
             * 确认使用会员卡
             **/
            confirmUseCard(){
                this.choicePrompt = false
                eventManger.trigger('confirmUseCard')
                //doSomeThings
            }
        },
        route: {
            canReuse: function (transition) {
                var params = transition.to.params
                if(!params.step){
                    if(backUrl && backType){
                        window.location.replace(backUrl)
                    }
                }
                this.backPrompt = !params.step;
                return transition.from.name == transition.to.name;
            }

        },
        methods:{
            /**
             * 初始化返回逻辑
             */
            fetchBack(){
                var own= this
                if(backUrl){
                    var params = own.$route.params
                    if(!params.step){
                        var router = own.$route.router
                        router.go({
                            name:'index',
                            params:{
                                step:'show'
                            }
                        })
                    }
                }
                own.backPrompt = false;
            },
            toggleChoicePrompt(){
                this.choicePrompt = !this.choicePrompt
            },
            toggleChannelPrompt(){
                this.channelPrompt = !this.channelPrompt
            },
            togglePayPrompt(){
                if(this.promptText){
                    this.promptText = '';
                }else{
                    this.promptText = 'promptText';
                }
            }
        }
    }
</script>

<style scope>

    .dashboard .btn-primary{
        border-radius: 0;
        width: 120px;
        margin: 10px 25px;
        height: 100%;
        line-height: 100%;
    }
</style>
