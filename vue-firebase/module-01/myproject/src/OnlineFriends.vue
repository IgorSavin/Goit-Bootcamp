<template>
  <div id="online-friends">
    <h2>Online Friends</h2>
    <div v-for="(friend, index) in buddies" :key="index">
      <span v-if="friend.online">{{ friend.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OnlineFriends',
    props:['buddies'],
  data(){
    return{
      
    }
  }
}
</script>

<style>

</style>
