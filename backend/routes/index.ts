import { Router } from "express"
import Song from '../models/Song'
const router = Router()


router.get('/', (req, res) => {
    res.send("REST API is working!")
})

// Songs routes
router.get('/songs', async (req, res) => {
    const songs = await Song.find()
    res.send(songs)
})

router.post('/songs', async (req, res) => {
    const {title, lyrics} = req.body
    const song = new Song({title, lyrics})
    await song.save()
    res.json(song)
})

router.patch('/songs', async (req, res) => {
    const songs = await Song.find()
    res.send(songs)
})

router.get('/songs/:id', (req, res) => {
    res.send("Displaying one song")
})
export default router