<template>
  <q-page padding>
    <!-- content -->
    <q-input v-model="input" label="Unesi ime"></q-input>
    <q-btn @click="dodajIme()">Dodaj</q-btn>
    <div v-for="ime in imena" :key="ime">
      <p v-if="ime != 'Ivan'">
        {{ ime }}
      </p>
    </div>
    <q-btn push color="white" text-color="primary" label="Add Mail" @click="addMail()">
      <q-badge color="orange" floating v-model="addmsg"> {{ addmsg }}</q-badge>
    </q-btn>

    <q-btn dense color="purple" round icon="email" class="q-ml-md" @click="delMail()">
      <q-badge color="red" floating v-model="delmsg">{{ delmsg }}</q-badge>
    </q-btn>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
const input = ref('');
const imena = ['Pero', 'Ana', 'Iva', 'Ivan']
const addmsg = ref(22);
const delmsg =ref(4)

input.value = "";

function dodajIme() {
  imena.push(input.value);
  console.log(input.value);
  console.log(imena)
}
function addMail(){
  addmsg.value += 1;
  console.log(addmsg.value)
}
function delMail() {
  delmsg.value -= 1
  console.log(delmsg.value)
}
</script>
