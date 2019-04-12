<template>
  <div id="app">
     <keep-alive> 
        <router-view v-if="$router.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$router.meta.keepAlive"></router-view>

    <router-view name="footer-bar"/>
  </div>
</template>
<script>
    export default {

    }
</script>
<style lang="scss">

</style>
