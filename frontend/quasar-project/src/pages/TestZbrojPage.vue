<template>
  <q-page padding>
  <q-card>
      <q-card-section>
        <q-input v-model="broj1" label="Unesi prvi broj">
        </q-input>
        <q-input v-model="broj2" label="Unesi drugi broj">
        </q-input>
        <q-btn @click="zbroji()">Zbroji</q-btn>
      </q-card-section>
      <q-card-section>
        Rezultat je {{ rezultat }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const broj1 = ref(0);
const broj2 = ref(0);
const rezultat = ref(0);

function zbroji(){
  rezultat.value = parseInt(broj1.value) + parseInt(broj2.value);
}
</script>
