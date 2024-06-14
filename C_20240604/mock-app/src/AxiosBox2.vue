<template>
  <div>
    <h2>콘솔을 확인합니다.</h2>
  </div>
</template>

<script setup>
import axios from "axios";

const listUrl = "/api/todolist_long/gdhong";
const todoUrlPrefix = "/api/todolist_long/gdhong/";

const requestAPI = async () => {
  let todoList;

  let response = await axios.get(listUrl);
  todoList = response.data;
  console.log("# TodoList :", todoList);

  response = await axios.get(todoUrlPrefix + todoList[0].id);
  console.log("## 첫번째 Todo : ", response.data);

  response = await axios.get(todoUrlPrefix + todoList[1].id);
  console.log("## 두번째 Todo : ", response.data);
};

requestAPI();
</script>
