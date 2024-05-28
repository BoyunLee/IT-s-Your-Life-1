<template>
  <div>
    <table align="center">
      <tbody>
        <tr>
          <td class="td">name</td>
          <td class="td2">{{ babyInfo.name }}</td>
        </tr>
        <tr>
          <td class="td">age</td>
          <td class="td2">{{ babyInfo.age }}</td>
        </tr>
        <tr>
          <td class="td">gender</td>
          <td class="td2">{{ babyInfo.gender }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "BabyBox",
  data() {
    return {
      babyInfo: {
        name: "kim baby",
        gender: "woman",
        age: 1,
      },
    };
  },
};
</script>

<style scoped>
td {
  border: solid 1px black;
  width: 100px;
}

.td {
  background-color: pink;
}

.td2 {
  width: 150px;
}
</style>
