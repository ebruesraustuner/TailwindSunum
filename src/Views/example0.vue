<template>
  <div class="m-4 p-2 border-2">
    <div
      class="
        mx-auto
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-4
      "
    >
      <div
        v-for="(card, i) in cards"
        :key="i"
        class="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl"
      >
        <img
          class="w-full max-h-40 object-cover"
          :src="card.image"
          alt="card.imageinfo"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ card.title }}</div>
          <p class="text-gray-700 text-base line-clamp-3">
            {{ card.desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import data from '../public/data.json'
export default {
  name: 'App',
  data() {
    return {
      isOpen: false,
      cards: data.cards
    }
  }
}
</script>