<template>
    <prompt :confirm="'使用该券'" :cancel="'使用会员折扣'" :text="'使用当前代金券将不能同时享受会员折扣， 请确认是否继续使用该券？'">
        <div class="price-box" slot="extra">
            <div class="price-item">代金券省<span class="especial">{{couponVal}}元</span></div>
            <div class="price-item">会员卡最多省<span class="especial">{{cardVal}}元</span></div>
        </div>
    </prompt>
</template>
<style>
    .prompt-box .price-box{
        display: flex;
        display: -webkit-flex;
        text-align: left;
        margin: 15px 25px;
    }
    .prompt-box .price-item{
        -webkit-flex: 1;
        flex: 1;
    }
</style>

<script>
//    import Prompt from "../base/Prompt.vue"
    export default {
        props:{
            couponVal:{
                type: Number
            },
            cardVal:{
                type: Number
            }
        },
        data(){
            return {
            }
        },
        created () {
        },
        events:{
            confirmPrompt(){
                this.$dispatch('confirmUseCoupon')
            },
            cancelPrompt(){
                this.$dispatch('confirmUseCard')
            }
        },
        components: {
//            Prompt
        }
    }
</script>

<style>

</style>
