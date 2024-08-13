<script setup>
import { ref, reactive } from "vue";
import { RouterLink, useLink, useRoute, useRouter } from "vue-router";
import axios from "axios";

const BASE = "/api/memo";

// 4.	메모 상세 보기 페이지의 스크립트 코드를 완성하세요.
//   - 돌아가기 버튼을 클릭하면 목록 보기로 이동한다.
const memo = reactive({
  title: "",
  content: "",
}); //메모 데이터를 저장할 객체

const route = useRoute(); //라우터 객체
const router = useRouter(); //라우터 객체

async function load() {
  try {
    const response = await axios.get(`${BASE}/${route.params.id}`); //서버로부터 메모 데이터를 받아옴

    if (response.status === 200) {
      memo.title = response.data.title; //받아온 데이터를 memo 객체에 저장
      memo.content = response.data.content;
    }
  } catch (error) {
    console.error(error);
  }
}

const back = () => {
  router.push("/memo");
};
//////////////////////////////////

load(); //초기 데이터 로드 함수 호출
</script>

<template>
  <div>
    <h2>제목: {{ memo.title }}</h2>
    <hr />
    {{ memo.content }}
    <div>
      <button @click="back">돌아가기</button>
    </div>
  </div>
</template>

<style scoped></style>
