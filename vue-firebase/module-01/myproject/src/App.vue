<template>
  <div id="app">
    <h1>{{title}}</h1>
    <Navbar/>
    <AllFriends :buddies="friends"/>
    <OnlineFriends :buddies="friends"/>
  </div>
</template>

<script>
import Navbar from './Navbar'
import AllFriends from './AllFriends'
import OnlineFriends from './OnlineFriends'

export default {
  name: 'app',
  components:{
    Navbar,
    OnlineFriends,
    AllFriends
  },
  data () {
    return {
      title: 'My first Vue App, woo ;)',
          friends:[
        { name: 'Mario', online: true },
        { name: 'Luigi', online: false },
        { name: 'Toad', online: true },
        { name: 'Bowser', online: false }
      ]
    }
  }
}
</script>

<style>
h1{
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>
