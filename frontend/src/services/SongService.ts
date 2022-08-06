import axios from './axios'
import { Song } from '@/interfaces/Song'

export const createSong = async (song: Song) => {
    return await axios.post('/songs', song)
}

export const getSongs = async () => {
    return await axios.get('/songs')
}