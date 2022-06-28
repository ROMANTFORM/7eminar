<template>
    <div class="filter-container" >
        <ul class="filter-list">
            <li class="filter-list__item" @click="openList">
                <div class="item-container">
                    <span class="item__icon"></span>
                    <span class="item__text">відео</span>
                </div>
                <div class="item-arrow" :class="{openArrow: isOpen}"></div>
            </li>
            <transition name="slide-fade">
            <div class="filter-sublist" v-if="isOpen">
                <li class="sublist__item">Усі відео (456)</li>
                <li class="sublist__item">Мої відео (15)</li>
                <li class="sublist__item">Безкоштовно (45)</li>
                <li class="sublist__item">Новинки (34)</li>
                <li class="sublist__item">Останні переглянуті (32)</li>
            </div>
            </transition>

            <li class="filter-list__item">
                <div class="item-container">
                    <span class="item__icon--s"></span>
                    <span class="item__text">КОНСУЛЬТАЦІЇ</span>
                </div>
                <div class="item-arrow"></div>
            </li>
            <li class="filter-list__item">
                <div class="item-container">
                    <span class="item__icon--s"></span>
                    <span class="item__text">ДОКУМЕНТИ</span>
                </div>
                <div class="item-arrow"></div>
            </li>
            <li class="filter-list__item">
                <div class="item-container">
                    <span class="item__icon--s"></span>
                    <span class="item__text">ТЕМИ</span>
                </div>
                <div class="item-arrow"></div>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
    name: 'my-filter',
    data(){
        return{
           isOpen: false,
        }
    },

    methods: {
        openList(){
            this.isOpen = !this.isOpen
        }
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>