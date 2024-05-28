<template>
  <div id="center">
    <hr />
    <br />
    <table align="center">
      <tr>
        <td class="td">제품 번호</td>
        <td class="td2">100</td>
      </tr>
      <tr>
        <td class="td">제품 이름</td>
        <td class="td2"><a href="product?no=100">shoes1</a></td>
      </tr>
      <tr>
        <td class="td">제품 설명</td>
        <td class="td2">fun shoes1</td>
      </tr>
      <tr>
        <td class="td">제품 가격</td>
        <td class="td2">1000</td>
      </tr>
      <tr>
        <td class="td">제품 회사</td>
        <td class="td2">c100</td>
      </tr>
      <tr>
        <td class="td">제품 이미지</td>
        <td class="td2">
          <img
            src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width="100px"
            height="100px"
          />
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <img
            src="https://plus.unsplash.com/premium_photo-1677852356095-51e64184cf25?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0"
            width="300px"
            height="200px"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
td {
  width: 200px;
}
.td {
  background: #0dcaf0;
}
.td2 {
  background: #badbcc;
}
</style>
