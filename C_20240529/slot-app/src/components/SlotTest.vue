<template>
  <div>
    <h3>
      당신이 경험한 프론트엔드 기술은? <br />
      (두번째 : Slot 기본)
    </h3>
    <CheckBox2
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :checked="item.checked"
      @check-changed="CheckBoxChanged"
    >
      <span v-if="item.checked" style="color: blue; text-decoration: underline">
        <i>{{ item.label }}</i></span
      >
      <span v-else style="color: gray">{{ item.label }}</span>
    </CheckBox2>
  </div>
</template>

<script>
import CheckBox2 from "./CheckBox2.vue";

export default {
  name: "lotTest",
  components: { CheckBox2 },
  data() {
    return {
      items: [
        { id: "V", checked: true, label: "Vue" },
        { id: "A", checked: true, label: "Angular" },
        { id: "R", checked: false, label: "React" },
        { id: "S", checked: false, label: "Svelte" },
      ],
    };
  },
  methods: {
    CheckBoxChanged(e) {
      let item = this.items.find((item) => item.id == e.id);
      item.checked = e.checked;
    },
  },
};
</script>
