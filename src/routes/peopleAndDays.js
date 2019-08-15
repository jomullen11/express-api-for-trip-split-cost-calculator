import { Router } from 'express'
import models from '../models'

const router = Router()

router.get('/read', async (req, res) => {
    const results = await models.peopleAndDays.find({})
    res.status(200).send(results)
})

router.get('/read/:id', async (req, res) => {
    const results = await models.peopleAndDays.findOne({_id: req.params.id})
    res.status(200).send(results)
})

router.post('/create', async (req, res) => {
    const data = req.body
    const dataToPost = await models.peopleAndDays.insert(data)
    res.status(201).send(dataToPost)
})

router.put('/update/:id', async (req, res) => {
    const data = req.body
    const updatedData = await models.peopleAndDays.findOneAndUpdate({_id: req.params.id}, { $set: {'person': data.person, 'days': data.days} }, data)
    res.status(201).send(updatedData)
})

router.delete('/delete-all', async (req, res) => {
    const dataToDelete = await models.peopleAndDays.remove({})
    res.status(200).send(dataToDelete)
})

router.delete('/delete/:id', async (req, res) => {
    const dataToDelete = await models.peopleAndDays.findOneAndDelete({_id: req.params.id})
    res.status(200).send(dataToDelete)
})

export default router