<template>
  <div>
    <h4>관심있는 그룹을 선택하고, 이름을 입력</h4>
  </div>
  <div>
    <CheckboxItem
      v-for="idol in idols"
      :key="idol.id"
      :id="idol.id"
      :name="idol.name"
      :checked="idol.checked"
    />
  </div>
  <hr />
  <InputBox />
</template>

<script>
import CheckboxItem from "./components/CheckboxItem.vue";
import InputBox from "./components/InputBox.vue";

export default {
  name: "App",
  components: { CheckboxItem, InputBox },
  data() {
    return {
      idols: [
        { id: 1, name: "BTS", checked: true },
        { id: 2, name: "Black Pink" },
        { id: 3, name: "Wanna One" },
        { id: 4, name: "Twice" },
      ],
    };
  },
};
</script>

<style scoped>
h4 {
  background-color: aqua;
  height: 100px;
  align-content: center;
}
</style>
