<template>
    <div class="container">
        <form>
            <div class="my-3">
                <label for="songTitle" class="form-label">Title</label>
                <input class="form-control" id="songTitle" v-model="song.title">
            </div>
            <div class="my-3">
                <label for="songLyrics">Lyrics</label>
                <textarea class="form-control" placeholder="Write your lyrics" id="songLyrics" v-model="song.lyrics" ></textarea>
            </div>
            <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button" @click="saveSong()">Submit</button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { Song } from '@/interfaces/Song'
import { defineComponent } from 'vue'
import { createSong } from '@/services/SongService'

export default defineComponent({
    data() {
        return {
            song: {} as Song
        }
    },
    methods: {
        async saveSong() {
            try {
                const res = await createSong(this.song)
                console.log(res)
            } catch (err) {
                console.log(err)
            }
        }
    }
})
</script>

<style>
</style>