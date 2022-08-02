import { Router } from "express"
const router = Router()
router.get('/', (req, res) => {
    res.send("REST API is working!")
});

router.get('/songs', (req, res) => {
    res.send("Displaying all songs")
});
router.get('/songs/:id', (req, res) => {
    res.send("Displaying one song")
});
export default router