<template>
    <div class="profile-card-container">
        <div class="name">
            {{ character.name }}
        </div>
        <div class="species">
            {{ character.species }}
        </div>
        <div class="location">
            {{ character.location.name }}
        </div>
        <div class="image-container">
            <img class="image" :src="character.image" alt="img" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ICharacter } from '~/interfaces/ICharacter';


defineProps<({character: ICharacter})>()

</script>