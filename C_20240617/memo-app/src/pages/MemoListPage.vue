<script setup>
import MemoList from "@/components/MemoList.vue";
import { ref, reactive } from "vue";
import axios from "axios";

const BASE = "/api/memo";

// 문제2. src/pages/MemoListPage.vue에서는 메모 목록을 서버로부터 받아, MemoList 컴포넌트로 전달한다.
// 스크립트 파트를 완성하세요.
const memos = ref([]);

const load = async () => {
  try {
    const response = await axios.get(BASE);
    if (response.status === 200) {
      memos.value = response.data; //받아온 데이터를 memos 배열에 저장
    }
  } catch (error) {
    console.error(error);
  }
};
///////

load(); //초기 데이터 로드 함수 호출
</script>

<template>
  <h2>Memo 목록</h2>
  <MemoList :memos="memos" />

  <div>
    <router-link to="/memo/write">새 메모</router-link>
  </div>
</template>

<style scoped></style>
