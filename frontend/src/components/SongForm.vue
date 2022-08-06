<template>
    <form @submit.prevent="saveSong()">
        <input type="text" placeholder="Song title" v-model="song.title">
        <textarea cols="30" rows="10" placeholder="Song lyrics" v-model="song.lyrics"></textarea>
        <button>Save</button>
    </form>
</template>

<script lang="ts">
import { Song } from '@/interfaces/Song'
import { defineComponent } from 'vue'
import { createSong } from '@/services/SongService'

export default defineComponent({
    data(){
        return{
            song: {} as Song
        }
    },
    methods:{
        async saveSong(){
            try{
                const res = await createSong(this.song)
                console.log(res)
            }catch(err){
                console.log(err)
            }
        }
    }
})
</script>

<style>

</style>