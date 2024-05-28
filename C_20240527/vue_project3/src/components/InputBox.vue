<template>
  <div id="total">
    <div style="border: solid 1px gray; padding: 5px">
      이름 : <input type="text" v-model="name" />
      <button @click="nameChanged()" id="b1">이름입력 전송</button>
    </div>
    <div id="result">{{ hot }}이 인기 짱이야!</div>
  </div>
</template>

<script>
export default {
  name: "InputBox",
  methods: {
    nameChanged: function () {
      this.hot = this.name + "님";
    },
  },
  data() {
    return {
      name: "",
      hot: "",
    };
  },
};
</script>

<style scoped>
#result {
  width: 400px;
  height: 200px;
  background-color: yellow;
}
#b1 {
  background: red;
  color: white;
}
input {
  background-color: black;
  color: white;
}
</style>
