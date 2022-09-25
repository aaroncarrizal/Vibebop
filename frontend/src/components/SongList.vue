<template>
    <div class="container">
        <div class="row">
            <template v-for="(song, index) in songs" :key="index">
                <div class="col-4-sm-12 my-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{{ song.title }}</h5>
                            <p class="card-text">{{ song.lyrics }}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
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