// src/stores/memberStore.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useMemberStore = defineStore("member", () => {
  const member_id = ref("kimmulti");
  const member_pw = ref("1234");
  const member_name = ref("kim");
  const member_addr = ref("kangnam");
  const member_tel = ref("010");

  const updateAddress = (newAddress) => {
    member_addr.value = newAddress;
  };

  const updateTelephone = (newTelephone) => {
    member_tel.value = newTelephone;
  };

  return {
    member_id,
    member_pw,
    member_name,
    member_addr,
    member_tel,
    updateAddress,
    updateTelephone,
  };
});
