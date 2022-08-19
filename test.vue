<template>
  <div>
    {{ $t('test') }}
    
    <p>参数写法{{ $t('message.hello', ['hello']) }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: this.$t('data'),
    }
  },
}
</script>
