<template>
  <div id="all-friends">
    <h2>All Friends</h2>
    <div v-for="(friend, index) in buddies" :key="index">
      <span>{{ friend.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllFriends',
  props:['buddies'],
  data(){
    return{
      
    }
  }
}
</script>

<style>

</style>
