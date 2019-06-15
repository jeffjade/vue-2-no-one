<template>
  <div class="main-page">
    <ul class="picture-list">
      <li v-for="item in imgArray" v-bind:key="item.src">
        <img :src="item.src" @click="onItemClick(item)" :class="getClassObject(item)" alt="">
      </li>
    </ul>
    <div class="btn-area">
      <button @click="onStartCounterwork">开始对抗</button>
    </div>
    <Loading v-if="isLoading"/>
  </div>
</template>

<script>
import Loading from './Loading'

export default {
  name: 'Mainpage',
  props: {
  },
  components: {
    Loading
  },
  data() {
    return {
      isLoading: false,
      imgArray: [
        {
          active: true,
          src: require('./../assets/images/airplane00.png')
        },
        {
          active: false,
          src: require('./../assets/images/beach00.png')
        },
        {
          active: false,
          src: require('./../assets/images/buildings00.png')
        },
        {
          active: false,
          src: require('./../assets/images/forest22.png')
        },
        {
          active: false,
          src: require('./../assets/images/freeway00.png')
        },
        {
          active: false,
          src: require('./../assets/images/harbor00.png')
        },
        {
          active: false,
          src: require('./../assets/images/overpass00.png')
        },
        {
          active: false,
          src: require('./../assets/images/parkinglot00.png')
        },
        {
          active: false,
          src: require('./../assets/images/river17.png')
        },
        {
          active: false,
          src: require('./../assets/images/storagetanks00.png')
        }
      ]
    }
  },
  methods: {
    getClassObject(item) {
      return item.active ? 'active' : ''
    },
    execPyScript(command) {
      // exec python script.
    },

    // ------------Click CB Event------------
    onItemClick(item) {
      this.imgArray.map(item => { item.active = false } )
      item.active = true
    },
    onStartCounterwork() {
      this.isLoading = true
      this.execPyScript('python gem.py')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.picture-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 0;
  padding: 0;
}
.picture-list li {
  display: inline-block;
  list-style: none;
}
.picture-list li img{
  width: 100%;
}
.active{
  border-bottom: 3px solid #d71345;
  border-top: 3px solid #d71345;
}

.btn-area {
  margin-top: 20px;
}
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  transition: color 0.4s ease-in-out;
}
button::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: #3cefff;
  transform-origin: center;
  transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
  transition: transform 0.45s ease-in-out;
}

button:hover {
  cursor: pointer;
  color: #161616;
}

button:hover::before {
  transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
}
</style>
