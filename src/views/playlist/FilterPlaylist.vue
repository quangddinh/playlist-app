<template>
    <div class="user-playlists">
        <h2>Filter</h2>
        <div v-if="search !== null">
            <form>
                <input type="text" placeholder="search" v-model="search" @keypress.enter.prevent="handleSubmit" />
            </form>
        </div>
        <div v-if="playlists">
            <ListView :playlists="playlists" />
        </div>
        <p>{{ search }}</p>
    </div>
</template>

<script>
import getCollection from '@/composables/getCollection';
import ListView from '@/components/ListView.vue';
import { ref } from 'vue';

export default {
    components: { ListView },

    setup() {
        const search = ref('Gundam OP');
        const filter = 'Inferno';

        const handleSubmit = () => {
            if (search.value) {
                console.log(filter);
                console.log(search.value);
            }
        };
        const { documents: playlists } = getCollection('playlists', ['title', '==', search.value]);

        console.log(playlists);
        return { playlists, search, handleSubmit };
    },
};
</script>

<style scoped>
h2 {
    padding-bottom: 10px;
    margin-bottom: 30px;
    border-bottom: 1px solid var(--secondary);
}
</style>
