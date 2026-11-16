<template>
  <q-page padding>
    <!-- content -->
    <p v-html="msgHtml"></p>
    {{ msgHtml }}
    {{ msg }}
    <p v-text="msg"></p>

    <p v-for="item in days" :key="item">
      <button v-if="item == 'Ponedjeljak'">
        {{ item }} *
      </button>
      <button v-else v-show="false">
        {{ item }}
      </button>
    </p>
    <a :href="link.url" :target="link.target"> {{ link.text }} </a>
    <q-input v-model="input" label="Unesi ime"></q-input>

    <q-card>
      <q-card-section v-model="items">
        Number of items: {{ items }}
      </q-card-section>
    </q-card>
    <q-btn @click="uvecaj()">Uvećaj</q-btn>
    <q-btn @click="items = 0">Delete items</q-btn>
  </q-page>

</template>

<script setup>
import { ref } from 'vue';
let items = ref(0);
const msg = "Pozdrav";
const msgHtml = "<h1>Naslov</h1>";
const days = ['Ponedjeljak', 'Utorak', 'Srijeda'];
const link = {
  url: 'http://www.google.com',
  target: '_blank',
  text: 'Google'
}
const input = ref('');
input.value = "Pero";

function uvecaj(){
  items.value++;
  console.log(items);
}
</script>
