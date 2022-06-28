<template>
  <div>

    <header class="header">
      <div class="main-container">
        <div class="header-container">

          <div class="mob-burger__btn" >
            <button @click="openMenu"></button>
          </div>

          <div class="logo-container"></div>
          <div class="input-container">
            <input type="text" class="search-input" placeholder="Шукайте будь-що..." v-model="searchValue">
            <button class="search__btn" @click="onSearch(searchValue)"></button>
          </div>
            

            <div class="autorize-block">
              <div class="account">
                <span class="account__img"></span>
                <span class="account__count"></span>
                <span class="account__text">person@gmail.com</span>
              </div>

              <div class="notification">
                <span class="notification__count"></span>
              </div> 
            </div>
        </div>
      </div>
    </header>

    <nav class="nav">
      <div class="main-container">
        <div class="nav-container">
          <div>
            <router-link to="/" exact-active-class = "_active" class="nav-link">Усі відео</router-link>
            <router-link to="/docs" class="nav-link">Документи</router-link>
            <router-link to="/themes" class="nav-link">Теми</router-link>
            <router-link to="/automatics" class="nav-link">Автоматизація</router-link>
            <router-link to="/sections" class="nav-link">Рубрики</router-link>
            <router-link to="/consultant" class="nav-link">Особистий консультант</router-link> 
          </div>
          <button class="subscribe-btn">передлатити</button>
        </div>
        
      </div> 
    </nav>

    <transition name="slide-fade">
    <div class="mob-nav" v-if="openBurger">
      
        <router-link to="/" class="mob-nav-link">Усі відео</router-link>
        <router-link to="/docs" class="mob-nav-link">Документи</router-link>
        <router-link to="/themes" class="mob-nav-link">Теми</router-link>
        <router-link to="/automatics" class="mob-nav-link">Автоматизація</router-link>
        <router-link to="/sections" class="mob-nav-link">Рубрики</router-link>
        <router-link to="/consultant" class="mob-nav-link">Особистий консультант</router-link> 
      
    </div>
    </transition>
    
    <router-view/>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default{
    name: 'my-header',
    data(){
      return{
        openBurger: false,
        searchValue: ''
      }
    },
    
    methods:{
     ...mapActions(['UPDATE_SEARCH']),
      onSearch(value){
        console.log("---->", typeof value)
        this.UPDATE_SEARCH(value)
      },

      openMenu(){
        this.openBurger = !this.openBurger
      }
    }
}
</script>

<style>

</style>