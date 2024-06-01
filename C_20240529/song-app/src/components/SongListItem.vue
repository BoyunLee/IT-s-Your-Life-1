<template>
  <li>
    <input type="checkbox" v-model="checked" @change="emitCheckChange" />
    <i :class="checked ? icons.checked : icons.unchecked"></i>
    {{ song.title }}
  </li>
</template>

<script>
export default {
  name: "SongListItem",
  inject: ["icons"],
  props: {
    song: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      checked: this.song.done,
    };
  },
  methods: {
    emitCheckChange() {
      this.$emit("check-change", { id: this.song.id, checked: this.checked });
    },
  },
  watch: {
    song: {
      deep: true,
      handler(newVal) {
        this.checked = newVal.done;
      },
    },
  },
};
</script>
