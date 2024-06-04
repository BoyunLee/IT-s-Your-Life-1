<template>
  <div style="border: solid 1px black">
    <h2 class="m-4">NewJeans 멤버</h2>
    <br />
    <br />
    <div class="container">
      <div class="row">
        <div
          v-for="m in members"
          :key="m.id"
          class="col-6 col-xs-6 col-sm-4 col-md-3 col-lg-2"
        >
          <router-link :to="{ name: 'members/id', params: { id: m.id } }">
            <img
              class="img-thumbnail"
              style="width: 130px; height: 150px"
              :src="m.photo"
              :title="m.name"
            /><br />
            <h6 class="display-7">{{ m.name }}</h6>
          </router-link>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import members from "@/members.json";

export default {
  name: "Members",
  setup() {
    return { members };
  },
};
</script>

<style>
.row {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
</style>
