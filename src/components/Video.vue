<template>
    <div class="section">
        <div class="main-container">
            <div class="video-content__container">
                <my-filter/> 
                <div class="video-content">
                    <h1 class="section-title">Усі відео</h1>
                    <hr>
                    <div class="catalog-controls">
                        <my-select
                        :options="this.options"
                        :selected="this.selected"
                        @select="optionSelect"
                        ></my-select>
                        <button class="filter-btn btn-tile" :class="{activeTile: this.tile}" @click="openTile"></button>
                        <button class="filter-btn btn-list" :class="{activeList: !this.tile}" @click="openList"></button>
                    </div>
                    <ul class="video-tile" v-if="this.tile">
                        <li 
                        v-for="card in sortedData" 
                        :key="card.id" 
                        class="video-tile__card"
                        >
                            <img :src="`${card.covers.main}`" alt="pic" class="card__img">
                            <span class="card__date">{{card.date.substring(0, 10)}}</span>
                            <div class="card-info__container">
                                <p class="card__text">{{card.title}}</p>
                                <div class="card__rating">
                                    <span class="rating__point">5.0</span>
                                    <span class="rating__star"></span>
                                    <span class="rating__star"></span>
                                    <span class="rating__star"></span>
                                    <span class="rating__star"></span>
                                    <span class="rating__star"></span>
                                    <span class="rating__count">(231)</span>
                                </div>
                                <div class="card-btn__container">
                                    <button class="card__btn">Дивитися<span></span></button>
                                    <input class="my-checkbox" type="checkbox" name="like" :id="card.id">
                                    <label :for="card.id"></label>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul class="video-list" v-if="!this.tile">
                        <li 
                        class="video-list__card" 
                        v-for="card in sortedData" 
                        :key="card.id">
                        <div class="card-list__img-container">
                          <img :src="`${card.covers.main}`" alt="pic" class="card-list__img">  
                        </div>
                        
                        <div class="card-list__info-container">
                            <span class="card-list__date">{{card.date.substring(0, 10)}}</span>
                            <p class="card-list__text">{{card.title}}</p>
                            <div class="card-list__rating">
                                <span class="rating__point">5.0</span>
                                <span class="rating__star"></span>
                                <span class="rating__star"></span>
                                <span class="rating__star"></span>
                                <span class="rating__star"></span>
                                <span class="rating__star"></span>
                                <span class="rating__count">(231)</span>
                            </div>
                        </div>

                        <div class="card-list-btn__container">
                            <button class="card__btn">Дивитися<span></span></button>
                            <input class="my-checkbox" type="checkbox" name="like" :id="card.id">
                            <label class="card-list__label" :for="card.id"></label>
                        </div>

                        </li>
                    </ul> 
                    <button class="load-more__btn" @click="loadMore"><span></span>Показати ще...</button>
                </div> 

            </div>  
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import myFilter from './Filter.vue'
import mySelect from './mySelect.vue'

export default {
    name: 'my-video',
    components: {
        myFilter,
        mySelect,
    },
    data(){
        return{
           options: [
            {name: 'Спочатку нові', value: 1},
            {name: 'Популярні', value: 2},
            {name: 'За рейтингом', value: 3},
           ],
           selected: 'Сортувати',
           sortedItems: [],
           tile: true, 
        }
    },
    computed:{ 
        ...mapGetters(["GET_DATA", "GET_SEARCH"]),
        sortedData(){
            if(this.sortedItems.length){
                return this.sortedItems
            } else {
                return this.GET_DATA
            }
        }
        },
    methods: {
        optionSelect(option){
            this.selected = option.name;
            this.sortedItems = [];
            let ctx = this;
            this.GET_DATA.map(function(item){
                if(item.options.popular){
                   ctx.sortedItems.push(item) 
                }
            })
        },
        loadMore(){
            this.$store.dispatch('UPDATE_LIMIT');
            this.$store.dispatch('GET_DATA_FROM_API');
        },
        openTile(){
            this.tile = true
        },
        openList(){
            this.tile = false
        },
        sortProductBySearch(value){
            if(value){
               this.sortedItems = this.sortedItems.filter(item => {
                item.title.toLowerCase().include(value.toLowerCase())
            }) 
            } else {
                return
            }
            
        }
    },

    watch:{
        GET_SEARCH(){
            this.sortProductBySearch(this.GET_SEARCH)
        }
    },

    mounted(){
        this.$store.dispatch('GET_DATA_FROM_API')
    }
}
</script>

<style>

</style>
