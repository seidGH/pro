import express from 'express'
import cors from 'cors'
import partsRouter from './routes/parts.js'  //note that partsRouters  is a variable here just a variable that represents 
// parts.js .  ......


const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())
app.use('/parts', partsRouter)   //inside partsRouter  there is parts.js name so
 // the compiler jumps to the parts.js file here .....

app.get('/', (req, res) => {
  res.send('Prog  Project API is running now 🚀')
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
