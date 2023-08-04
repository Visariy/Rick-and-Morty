<template>
  <div class="character-item-container">
    <CharacterCard
      v-for="character of characterStore.characterList"
      :key="character.id"
      :character="character"
    />
  </div>
  <div v-if="characterStore.characterList.length === 0" class="message">Ничего не найдено</div>
  <div ref="observerElement" class="observer"></div>
</template>

<script setup lang="ts">
import { useCharacterStore } from "~/stores/character";

const characterStore = useCharacterStore();

const observerElement = ref<HTMLDivElement | null>(null);

onMounted(() => {
  const option = {
    rootMargin: "0px",
    threeshold: 1.0,
  };

  const callback = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting && characterStore.dataList) {
      characterStore.loadNextPage(characterStore.dataList.next);
    }
  };

  const observer = new IntersectionObserver(callback, option);
  observer.observe(observerElement.value as HTMLDivElement);

  if (characterStore.characterList.length > 0) {
    for (const i of characterStore.characterList) {
      console.log(i);
    }
  }
});
</script>

<style scoped lang="scss">
.character-item-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.message {
  display: flex;
  justify-content: center;
  font-size: 50px;
  color: white;
}
.observer {
  height: 30px;
}
</style>
