import {Schema , model} from 'mongoose'

const songSchema = new Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    lyrics:{
        type: String,
        requires: false
    }
})

export default model('Song', songSchema)