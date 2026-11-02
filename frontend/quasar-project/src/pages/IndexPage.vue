<template>
  <q-page class="flex flex-center">
    <div class="column items-center">
      <img
        alt="Quasar logo"
        src="~@/assets/quasar-logo-vertical.svg"
        style="width: 200px; height: 200px"
      />

      <q-btn class="q-mt-md" color="primary" to="/second" label="Go to Second Page" no-caps />
    </div>

  <div class="q-pa-md q-gutter-sm">
  <q-btn color="white" text-color="black" label="Standard" />
  <q-btn color="primary" label="Primary" />
  <q-btn color="secondary" label="Secondary" />
  <q-btn color="amber" glossy label="Amber" />
  <q-btn color="brown-5" label="Brown 5" />
  <q-btn color="deep-orange" glossy label="Deep Orange" />
  <q-btn color="purple" label="Purple" />
  <q-btn color="black" label="Black" />
  </div>
  </q-page>
</template>

<script setup>
//
</script>
