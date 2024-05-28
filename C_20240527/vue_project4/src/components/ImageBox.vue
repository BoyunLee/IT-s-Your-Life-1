<template>
  <br />
  <div><img :src="imageSrc" alt="Image" /></div>
</template>

<script>
export default {
  name: "ImageBox",
  data() {
    return {
      imageSrc:
        "https://cdn.pixabay.com/photo/2015/02/04/08/03/baby-623417_1280.jpg",
    };
  },
};
</script>

<style scoped>
img {
  width: 350px;
  height: 250px;
}
</style>
