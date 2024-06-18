<template>
  <div>
    <h1>Board List</h1>
    <router-link :to="{ name: 'CreatePage' }">
      <button type="button">Create New Post</button>
    </router-link>
    <br />
    <br />
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.first_name }}</td>
          <td>{{ item.last_name }}</td>
          <td>
            <a :href="'mailto:' + item.email">{{ item.email }}</a>
          </td>
          <td>{{ item.gender }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MainPage",
  methods: {
    getData() {
      axios
        .get("http://localhost:3001/youth")
        .then((response) => {
          console.log(response.data);
          this.data = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
table {
  width: 70%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #bd5cc295;
}

button {
  height: 30px;
  width: 150px;
  border: none;
  background-color: rgb(127, 10, 166);
  color: white;
}

div {
  margin-left: 50px;
  margin-top: 20px;
}
</style>
