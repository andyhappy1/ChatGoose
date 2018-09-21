<template>
  <div class="home">
    <GetStarted msg="We bring formation"/>
  </div>
</template>

<script>
// @ is an alias to /src
import GetStarted from '@/components/StartedComponents/GetStartedComponent.vue'

export default {
  name: 'home',
  components: {
      GetStarted
  }
}
</script>
