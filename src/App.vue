<template>
  <div>
    <h1>Hello Vue!</h1>
    <alert>
      <div>
        Top default slot
      </div>
      <div slot='title'>
        <b>This is</b> {{message}}
      </div>
      <div slot='description'>
        This is our description
      </div>
      <div>
        Default slot bottom
      </div>
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
