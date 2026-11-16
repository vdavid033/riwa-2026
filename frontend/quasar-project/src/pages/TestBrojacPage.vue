<template>
  <q-page padding>
    <!-- content -->
    <q-card>
      <q-card-section>
        {{ brojac }}
      </q-card-section>
      <q-btn @click="uvecaj()">Uvećaj</q-btn>
      <q-btn @click="resetiraj()">Resetiraj</q-btn>

    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const brojac = ref(0);

function uvecaj() {
  console.log("uvećaj");
  brojac.value++;
}
function resetiraj() {
  console.log("resetiraj");
  brojac.value = 0;
}
</script>
