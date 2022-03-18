<template>
  <div class="hello">
    <h1>{{name}}</h1>
    <button>Call Parent Method</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    name: String,
    getName: Function
  },
  data () {
    return {
      sample: ''
    }
  },
  // beforeCreate () {
  //   console.log("before created", this.name)
  // },
  // created () {
  //   console.log("created", this.name)
  // },
  // beforeMount () {
  //   console.log("before mount", this.$el)
  // },
  // mounted () {
  //   console.log("mounted", this.$el)
  // },
  // beforeUpdate () {
  //   console.log("before Update")
  // },
  // updated () {
  //   console.log('updated')
  // },
  // beforeUnmount () {
  //   console.log('before Destroy')
  // },
  // unmounted () {
  //   console.log('destroyed')
  // }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
