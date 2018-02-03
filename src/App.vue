<template>
  <div>
    <h1>Hello Vue!</h1>
    <alert>
      <b>This is</b> {{message}}
    </alert>
  </div>

</template>

<script>
import alert from './Alert.vue'
export default {
  data () {
    return {
      message: 'our success message'
    }
  },
  components: {
    alert
  }
}
</script>

<style scoped>
  b {
    color: red;
  }
</style>
