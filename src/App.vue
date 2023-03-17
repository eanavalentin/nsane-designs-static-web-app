<template>
  <div id="app">
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: null,
    };
  },
  async mounted() {
    const response = await fetch('/api/helloworld?name=nsane-designs');
    this.message = await response.json();
  },
};
</script>
