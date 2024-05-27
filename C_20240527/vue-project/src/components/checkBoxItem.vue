<template>
  <li><input type="checkbox" v-model="checked" />Option</li>
</template>

<script>
export default {
  name: "CheckBoxItem",
  data() {
    return {
      checked: false,
    };
  },
};
</script>
<style lang="scss" scoped></style>
