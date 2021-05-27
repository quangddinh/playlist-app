<template>
    <div class="add-song">
        <button v-if="!showForm" @click="showForm = true">Add songs</button>
        <form v-if="showForm" @submit.prevent="handleSubmit">
            <h4>Add a new song</h4>
            <input type="text" placeholder="Song title" required v-model="title" />
            <input type="text" placeholder="Artist" required v-model="artist" />
            <button>Add</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import useDocument from '../composables/useDocument';
export default {
    props: ['playlist'],
    setup(props) {
        const title = ref('');
        const artist = ref('');
        const showForm = ref(false);
        const { updateDoc } = useDocument('playlists', props.playlist.id);
        // use doc must call collection 'playlist'

        const handleSubmit = async () => {
            const newSong = {
                title: title.value,
                artist: artist.value,
                id: (Math.random() * 1000000).toString(36).substr(5, 9),
            };
            console.log(newSong);
            const res = await updateDoc({
                songs: [...props.playlist.songs, newSong],
            });
            title.value = '';
            artist.value = '';
        };

        return { title, artist, showForm, handleSubmit };
    },
};
</script>

<style></style>
