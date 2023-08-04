<template>
    <div class="episode-card-container">
        <div class="description">
            <div class="description__title">
                {{ episodeInfo.name }}
            </div>
            <div class="description__date">
                {{ episodeInfo.air_date }}
            </div>
        </div>
        <div v-for="character in episodeCharacters" :key="character.id" class="characters">
            <img @click="router.push(`/character/${character.id}`)" :src="character.image" alt="img" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { ICharacter } from 'interfaces/ICharacter';
import { IEpisode } from '~/interfaces/IEpisode';
import { useCharacterStore } from "~/stores/character";

const router = useRouter();

const episodeCharacters = ref<ICharacter[]>([])

const characterStore = useCharacterStore();

const props = defineProps<({episodeInfo: IEpisode})>()

onMounted(async() => {
    for await(const character of props.episodeInfo.characters) {
        const response = await characterStore.getCharacterByUrl(character)
        if(response) {
          episodeCharacters.value.push(response.data);
        }
    }
})

</script>

<style scoped lang="scss">
</style>