<template>
    <div class="my-select">
        <p class="select-title" @click="getOptions">{{selected}}<span :class="{'open': isOpen}"></span></p>
        <div class="options" v-if="isVisible">
            <p v-for="option in options" :key="option.value" @click="selectOption(option)">
                <span class="option-icon"></span>
                {{ option.name }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-select',
    props:{
        options: {
            type: Array,
            default(){
                return []
            }
        },
        selected: {
            type: String,
            default: ''
            }
        
    },

    data(){
        return{
            isVisible: false,
            isOpen: false
        }
    },

    methods: {
        getOptions(){
            this.isVisible = !this.isVisible;
            this.isOpen = !this.isOpen
        },
        selectOption(option){
            this.$emit('select', option);
            this.isVisible = false;
            this.isOpen = false;
        }
    },
    computed:{}
}
</script>

<style>
.select-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
   padding-left: 12px;
   color: #656565;
   cursor: pointer;
}
.select-title span{
    display: inline-block;
    width: 10px;
    height: 5px;
    margin-left: 14px;
    background-image: url('../images/arrow-grey.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}
.my-select{
    display: inline-block;
    width: 149px;
    border: 0.5px solid #232323;
    border-radius: 5px;
    background-color: #ffffff;
    padding: 1px 10px 3px 10px;
    font-weight: 300;
    font-size: 14px;
    line-height: 150%;
    color: #232323;
}
.option-icon{
    display: inline-block;
    width: 9px;
    height: 7px;
}
.options p{
    margin: 0;
    cursor: pointer;
    transition: all 200ms linear;
}
.options p:hover .option-icon{
    background-image: url('../images/Vector.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    transition: all 200ms linear;
}
.open{
    transform: rotate(180deg);
}
</style>