<template>
  <div>
    <h2>App 컴포넌트</h2>
    <hr />
    <ul>
      <CheckBoxItem />
      <CheckBoxItem />
      <CheckBoxItem />
      <CheckBoxItem />
    </ul>
  </div>
</template>

<script>
import CheckBoxItem from "./components/checkBoxItem.vue";
export default {
  name: "App",
  components: {
    CheckBoxItem,
  },
};
</script>

<style lang="scss" scoped></style>
