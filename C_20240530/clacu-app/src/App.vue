<template>
  <div>
    <CalculBox />
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import CalculBox from "./components/CalculBox.vue";

export default {
  name: "App",
  components: { CalculBox },
  setup() {
    const state = reactive({ x: 10, y: 20 });
    const result = computed(() => {
      return state.x + state.y;
    });
    console.log("computed에서 생성된 계산 결과값>>>", result.value);
    return { state, result };
  },
};
</script>
