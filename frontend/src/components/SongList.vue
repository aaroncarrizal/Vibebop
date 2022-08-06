<template>
    <h1>SongList</h1>
    <template v-for="(song, index) in songs" :key="index">
        <div>{{ song.title }}</div>
        <div>{{ song.lyrics }}</div>
    </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getSongs } from '@/services/SongService'
import { Song } from '@/interfaces/Song'

export default defineComponent({
    data(){
        return {
            songs: [] as Song[]
        }
    },
    mounted(){
        this.loadSongs()
    },
    methods:{
        async loadSongs(){
            try {
                const res = await getSongs();
                this.songs = res.data
            } catch (err) {
                console.log(err)
            }
        },
    },
})
</script>

<style>
</style>