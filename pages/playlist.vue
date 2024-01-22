<template>
  <p>you are in the playlsit</p>
  <div v-if="pending">Loading...</div>

  <div v-else class="my-2 mx-8">
    <div
      v-for="playlist in playlists"
      :key="playlist.id"
      class="my-2 mx-8 border p-4 rounded-xl hover:bg-green-200"
    >
      {{ playlist.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: playlists, pending } = await useMyFetch<any>("playlist", {});
console.log(playlists);
</script>
