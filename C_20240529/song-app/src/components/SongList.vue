<template>
  <ul>
    <SongListItem
      v-for="s in songs"
      :key="s.id"
      :song="s"
      @check-change="handleCheckChange"
    />
  </ul>
  <div>체크된 곡 수 : {{ doneCount }}</div>
</template>

<script>
import SongListItem from "./SongListItem.vue";
import { inject } from "vue";

export default {
  name: "SongList",
  components: { SongListItem },
  props: ["songs"],
  setup() {
    const doneCount = inject("doneCount");
    return {
      doneCount,
    };
  },
  data() {
    return {
      checkedSongs: new Set(),
    };
  },
  methods: {
    handleCheckChange({ id, checked }) {
      const song = this.songs.find((s) => s.id === id);
      if (song) {
        song.done = checked;
      }
    },
  },
};
</script>
