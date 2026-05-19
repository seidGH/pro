
import express from 'express'
import prisma from '../prisma.js'

const router = express.Router()

// CREATE part
router.post('/', async (req, res) => {
  const { name, model, price, stock } = req.body
  const part = await prisma.part.create({
    data: { name,
            model,
            price: parseFloat(price),
            stock: parseFloat(stock),
 }
  })

  res.json(part)
})

// GET all parts
router.get('/', async (req, res) => {
  const parts = await prisma.part.findMany()
  res.json(parts)
})


// 2. Add the GET route to fetch all parts
router.get('/parts', async (req,res) => {
  try {
    const parts = await prisma.part.findMany({
      orderBy: {
        createdAt: 'desc', // Shows newest parts at the top of the table
      },
    });
    res.status(200).json(parts);
  } catch (error) {
    console.error('Error fetching parts:', error);
    res.status(500).json({ error: 'Failed to fetch inventory items.' });
  }
});

// UPDATE part
router.put('/:id', async (req, res) => {
  const { name, model, price, stock } = req.body

  const part = await prisma.part.update({
    where: { id: Number(req.params.id) },
    data: { name, model, price, stock }
  })

  res.json(part)
})

// DELETE part
router.delete('/:id', async (req, res) => {
  const part = await prisma.part.delete({
    where: { id: Number(req.params.id) }
  })

  res.json(part)
})

export default router
