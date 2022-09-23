import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const skillsSchema = new Schema({
  text: String,
  have: Boolean,
})

const Skill = mongoose.model('Skill', skillsSchema)

export {
  Skill
}