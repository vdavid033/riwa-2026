<template>
  <q-page padding>
    <!-- content -->

    <q-card>
      <q-card-section>
        <q-input label="Unesite tekst za spremanje" v-model="tekst">

        </q-input>
        <q-btn @click="spremiTekst()">
          Spremi
        </q-btn>
      </q-card-section>
      <q-card-section v-for="t in tekstovi" :key="t">
        {{ t }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const tekst = ref('');
const tekstovi = ref([]);

function spremiTekst(){
  tekstovi.value.push(tekst.value);
}
</script>
