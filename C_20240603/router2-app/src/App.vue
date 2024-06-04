<template>
  <div class="container">
    <Header />
    <router-view v-slot="{ Component }">
      <Suspense timeout="0">
        <Component :is="Component"></Component>
        <template #fallback>
          <Loading />
        </template>
      </Suspense>
    </router-view>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Loading from "@/components/Loading.vue";
import { provide } from "vue";

export default {
  name: "App",
  components: { Header, Loading },
  setup() {
    provide("videos", [
      {
        id: "ft70sAYrFyY",
        title: "Bubble Gum Official MV",
        category: "official",
      },
      {
        id: "Q3K0TOvTOno",
        title: "How Sweet Official MV",
        category: "official",
      },
      {
        id: "js1CtxSY38I",
        title: "Attention Official MV",
        category: "official",
      },
      { id: "jOTfBlKSQYY", title: "ETA Official MV", category: "official" },
      {
        id: "kKsivrgoyDw",
        title: "Cool With You Official MV",
        category: "official",
      },
      {
        id: "ArmDp-zijuc",
        title: "Super Shy Official MV",
        category: "official",
      },
      {
        id: "9wUKhEgnllc",
        title: "Hype boy Official MV",
        category: "official",
      },
      {
        id: "VOmIplFAGeg",
        title: "Cookie Official MV",
        category: "official",
      },
      {
        id: "tVIXY14aJms",
        title: "Hurt Official MV",
        category: "official",
      },
    ]);
  },
};
</script>
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
.container {
  text-align: center;
  margin-top: 10px;
}
.fa {
  padding: 5px;
  width: 30px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
}
.fa-facebook {
  background: #3b5998;
  color: white;
}
.fa-youtube {
  background: #bb0000;
  color: white;
}
.fa-instagram {
  background: #125688;
  color: white;
}
</style>
