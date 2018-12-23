<template>
  <div id="all-friends">
    <h2>All Friends</h2>
    <div v-for="(friend, index) in buddies" :key="index">
      <span @click="unfriend(friend.name)">{{ friend.name }}</span>
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
  },
  methods: {
    unfriend(name){
      this.$emit('delete', {name})
    }
  }
}
</script>

<style>

</style>
