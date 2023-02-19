const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

let counterDB = {}

const updateCount = (counterDB, counterId) => {
    let value = counterDB[counterId]
    if (value != null) {
        return value++
    } else {
        value = 1
        return value
    }
}

app.get('/counter/:counterId', async (req,res) => {
    const {counterId} = req.params
    let value = await updateCount(counterDB, counterId)
    res.json(value)
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})