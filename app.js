const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

let counterDB = {}

const updateCount = (counterDB, counterId) => {
    if (counterDB[counterId] != null) {
        return ++counterDB[counterId]
    } else {
        counterDB[counterId] = 1
        return 1
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

module.exports = app