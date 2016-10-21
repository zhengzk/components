<template>
    <div class="item{{extClass? ' '+ extClass : ''}}" @click="itemClick">
        <div class="item-thumb">
            <div class="ico-hollow">
                <img v-if="imgUrl" :src="imgUrl" title="title"/>
                <!--<svg class="ico-graph"><g transform="translate(-293 12) scale(0.5 0.5)"><path d="M660 66h-32a6 6 0 0 1-6-6V26a6 6 0 0 1 6-6h6v-4a3 3 0 0 1 3-3h3V5h-12.5a1.5 1.5 0 0 1 0-3h27a1.5 1.5 0 0 1 0 3H648v8h3a3 3 0 0 1 3 3v4h6a6 6 0 0 1 6 6v34a6 6 0 0 1-6 6zM645 5h-2v8h2V5zm6 11h-14v4h14v-4zm12 10a3 3 0 0 0-3-3h-32a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h32a3 3 0 0 0 3-3V26zm-31.5 20a1.5 1.5 0 0 1-1.5-1.5v-15a1.5 1.5 0 0 1 3 0v15a1.5 1.5 0 0 1-1.5 1.5z" /></g></svg>-->
            </div>
        </div>
        <div class="item-main">
            <div class="item-hd">
                <h3>{{ title }}</h3>
                <span v-if="note" class="notes">{{note}}</span>
            </div>
            <div class="item-bd">
                <p>{{text}}</p>
            </div>
        </div>
        <slot></slot>
        <!--<div class="item-extend">-->
            <!--<div class="order-select">-->
                <!--<svg class="ico-select"><g transform="scale(0.333 0.333)">-->
                    <!--<path class="cls-1" d="M254,300a30,30,0,1,1,30-30A30,30,0,0,1,254,300Zm0-57a27,27,0,1,0,27,27A27,27,0,0,0,254,243Z" transform="translate(-220 -236)"/>-->
                <!--</g></svg>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>
<style>

</style>
<script>
    export default{
        props:{
            extClass: String,
            imgUrl: String,
            title: String,
            note: String,
            text: String
        },
        data(){
            return {
            }
        },
        methods: {
            itemClick(){
                this.$dispatch('itemClick')
            }
        },
        components:{
        }
    }
</script>
