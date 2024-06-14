<!-- src/views/PTMemberInfo.vue -->
<template>
  <div class="container">
    <h1 class="bg-primary">PT 이용 회원정보</h1>
    <p>회원 ID: {{ memberStore.member_id }}</p>
    <p>회원 PW: {{ memberStore.member_pw }}</p>
    <p>회원 이름: {{ memberStore.member_name }}</p>
    <div>
      <label>회원 주소: </label>
      <input class="bg-primary" v-model="memberStore.member_addr" />
    </div>
    <div>
      <label>회원 전화: </label>
      <input class="bg-primary" v-model="memberStore.member_tel" />
    </div>
  </div>
</template>

<script setup>
import { useMemberStore } from "../stores/memberStore";
import "bootstrap/dist/css/bootstrap.min.css";

const memberStore = useMemberStore();
</script>
