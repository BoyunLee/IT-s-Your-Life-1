<template>
  <div class="all">
    <h2>Create Post</h2>
    <br />
    <form>
      <div class="mb-3">
        <label for="exampleInputName1" class="form-label">First Name</label>
        <input
          type="text"
          class="form-control"
          v-model="first_name"
          aria-describedby="textHelp"
          required
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputName2" class="form-label">Last Name</label>
        <input
          type="text"
          class="form-control"
          v-model="last_name"
          aria-describedby="textHelp"
          required
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail" class="form-label">Email</label>
        <input type="email" class="form-control" v-model="email" />
      </div>
      <h6>Gender</h6>
      <select class="form-select" v-model="gender">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Unknown" selected>Unknown</option>
      </select>
      <br />
      <button
        type="submit"
        class="btn btn-primary"
        style="background-color: plum; border: none"
        @click.prevent="handleSubmit"
      >
        Create
      </button>
      <button
        type="button"
        class="btn btn-primary"
        style="background-color: gray; border: none"
        @click="handleCancel"
      >
        Cancel
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreatePage",
  data() {
    return {
      id: "",
      first_name: "",
      last_name: "",
      email: "",
      gender: "Unknown",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        // 현재 데이터베이스에 있는 가장 큰 아이디를 찾아 +1을 합니다.
        const response = await axios.get("http://localhost:3001/youth");
        const maxId = response.data.reduce(
          (max, current) =>
            parseInt(current.id, 10) > max ? parseInt(current.id, 10) : max,
          0
        );
        this.id = maxId + 1;

        const postData = {
          id: String(this.id), // id를 문자열로 변환
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          gender: this.gender,
        };

        // 서버로 데이터를 전송
        await axios.post("http://localhost:3001/youth", postData);

        // 리디렉션
        this.$router.push("/");
      } catch (error) {
        console.error("데이터 전송 중 오류가 발생했습니다:", error);
      }
    },
    handleCancel() {
      // 입력 내용 초기화
      this.clearForm();
    },
    clearForm() {
      this.first_name = "";
      this.last_name = "";
      this.email = "";
      this.gender = "Unknown";
    },
  },
};
</script>

<style>
.all {
  width: 500px;
  margin-left: 50px;
  border: 2px solid purple;
  padding: 20px;
  margin-top: 20px;
}
</style>
