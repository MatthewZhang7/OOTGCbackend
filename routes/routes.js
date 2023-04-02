const express = require('express')
const router = express.Router()
const Model = require('../models/event')

// // Getting all
// router.get('/', async (req, res) => {
//   try {
//     console.log("We hereML M MM LM L")
//     const events = await event.find()
//     res.json(events)
//     console.log(events)
//   } catch (err) {
//     res.status(500).json({ message: err.message })
//   }
// })
// router.post('/post', async (req, res) => {
//     const data = new Model({
//         name: req.body.name,
//         age: req.body.age
//     })

//     try {
//         const dataToSave = await data.save();
//         res.status(200).json(dataToSave)
//     }
//     catch (error) {
//         res.status(400).json({message: error.message})
//     }
// })

// router.post('/post', (req, res) => {
//     console.log("Attempting to POST")
//     const data = new event({
//         name: "Hassan",
//         email: "hassan@gmail.com",
//         eventName: "Party",
//         voting: true
//     })
// })

router.post('/post', async (req, res) => {
  const data = new Model({
      name: req.body.name,
      email: req.body.email,
      eventName: req.body.eventName,
      voting: req.body.voting,
      link: req.body.link
  })

  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
})

//Post Method
router.post('/post', (req, res) => {
  res.send('Post API')
})

//Get all Method
router.get('/getAll', (req, res) => {
  res.send('Get All API')
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
  res.send('Get by ID API')
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
  res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
  res.send('Delete by ID API')
})

module.exports = router