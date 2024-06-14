<template>
  <div class="main">
    <br />
    X : <input type="text" v-model.number="state.x" /><br />
    Y : <input type="text" v-model.number="state.y" /><br /><br />
    <button @click="calcAdd">계산</button><br />
    <div>결과 : {{ state.result }}</div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "CalculBox",
  setup() {
    const state = reactive({ x: 10, y: 20, result: 30 });

    const calcAdd = () => {
      state.result = state.x + state.y;
    };
    return { state, calcAdd };
  },
};
</script>
<style>
.main {
  border: 1px solid black;
  width: 250px;
  height: 150px;
  text-align: center;
  background-color: rgb(240, 116, 213);
}
</style>
