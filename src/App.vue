<template>
  <div>
    <!-- <h1 v-if="show">Hide me when value is true</h1>
    <button @click="show = !show">Click Me</button> -->
    <!-- <h1>This is the value : {{10 + 20 }}</h1>
    <h1>{{"hello".length }}</h1>
    <h1 class="">{{myName}} : {{team}}</h1>
    <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld v-if="showthis" :name="myName" :getName="getMyName"/>
    <button @click="showthis = false">Destroy</button> -->
    <!-- <button v-on:click="increment()">+</button>
    <h1>{{counter}}</h1>
    <button v-on:click.once="decrement()">-</button> -->
    <!-- <h1>Hello this is me </h1>
    KiloMeter: <input type="text" v-model="kilo"/>
    Meter: <input type="text" v-model="meter"/>
    My Name : {{getNameReverse}}
    {{myName}} -->
    <router-link to='/home'>About Me</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data () {
    return {
      myName: 'Hari Prasad',
      team: 'Digital',
      counter : 0,
      show: true,
      kilo: 0,
      meter: 0
    }
  },
  computed : {
    getNameReverse() {
      return this.myName.split('').reverse().join('')
    }
  },
  watch: {
    kilo (val) {
     this.meter = val * 1000 
    },
    meter (val) {
     this.kilo = val / 1000 
    }
  },
  methods : {
    getMyName() {
      console.log("Function is called")
    },
    increment() {
      this.counter++
    },
    decrement(){
      this.counter--
    }
  }
}
</script>

<style>
h1 {
  color: red;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
