<template>
  <div id="app">
    <app-Header>{{message}}}</app-Header>
    <app-Block v-for="block in form_info" :mess="block.mess" :info="block.info"></app-Block>
    <!-- <app-Example></app-Example> -->
    <!-- <app-Field></app-Field> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      form_info: [
        {
          mess: 'Digital Content & Devices',
          info: 'Amazon Music, Kindle, Appstore for Android'
        },
        { mess: 'Shop By Department', info: 'Electronics, Computers, Smart Home, Arts & Crafts' },
        { mess: 'Programs & Features', info: 'Gift Cards, #FoundItOnAmazon, Amazon Live, International Shopping' },
      ],
      message: 'list'
    }
  }
}
</script>

<style >

</style>
