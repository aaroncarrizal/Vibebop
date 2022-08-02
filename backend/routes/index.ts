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

router.patch('/songs/:id', async (req, res) => {
    const updatedSong = await Song.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.send(updatedSong)
})

router.get('/songs/:id', async (req, res) => {
    try {
        const song = await Song.findById(req.params.id)
        res.send(song)
    } catch (error) {
        res.status(404).send(error)
    }
})

router.delete('/songs/:id', async (req, res) => {
    try {
        const song = await Song.findByIdAndDelete(req.params.id)
        res.send(song)
    } catch (error) {
        res.status(404).send(error)
    }
})
export default router