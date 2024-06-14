<template>
  <div class="container">
    <br />
    name :
    <input
      v-model="nameData.name"
      @input="changeName($event.target.value)"
    /><br />
    x(키) :
    <input v-model="calcData.x" @input="changeX($event.target.value)" /><br />
    y(몸무게) :
    <input v-model="calcData.y" @input="changeY($event.target.value)" /><br />
    <button class="but">정보표시</button>
    <br />

    <h5>
      {{ nameData.name }}의 키는 {{ calcData.x }}cm, 몸무게는 {{ calcData.y }}kg
      입니다.
    </h5>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from "vue";

const useName = (name = "john") => {
  const nameData = reactive({ name: "" });
  const changeName = (name) => {
    console.log(name);
    nameData.name = name.trim().length < 2 ? "" : name.trim();
  };
  onMounted(() => (nameData.name = "john"));
  return { nameData, changeName };
};

const useCalc = (x = 0, y = 0) => {
  const calcData = reactive({ x: 0, y: 0 });
  onMounted(() => {
    calcData.x = 10;
    calcData.y = 20;
  });
  const result = computed(
    () => parseInt(calcData.x, 10) + parseInt(calcData.y, 10)
  );
  const changeX = (strX) => {
    let x = parseInt(strX, 10);
    calcData.x = isNaN(x) ? 0 : x;
  };
  const changeY = (strY) => {
    let y = parseInt(strY, 10);
    calcData.y = isNaN(y) ? 0 : y;
  };
  return { calcData, result, changeX, changeY };
};

export default {
  name: "CompositionAPI",
  setup() {
    const nameObj = useName("smith");
    const calcObj = useCalc(100, 200);

    return { ...nameObj, ...calcObj };
  },
};
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* 가로 가운데 정렬 */
  align-items: center; /* 세로 가운데 정렬 */
  border: 1px solid black;
  width: 500px;
}
.but {
  border: 1px solid blue;
  background-color: pink;
  width: 200px;
  height: 30px;
}
input {
  background-color: antiquewhite;
  border: 1px solid blue;
  height: 30px;
}
</style>
