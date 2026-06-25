import { useEffect, useState } from 'react'
#comment 
type Part = {
    id: number 
  name: string
  price:number
  stock:number
  model:string
}

function App() {
  const [parts, setParts] = useState<Part[]>([])

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [model, setModel] = useState('')
  // GET parts
  const fetchParts = () => {       
    fetch('http://localhost:5000/parts')
      .then((res) => res.json())
      .then((data) => {
        setParts(data)  
      })
  }
  useEffect(() => {
   fetchParts()
  }, [])      

  // POST part
  const addPart = async () => {
    const newPart = {
      name,
      price,
      stock,
      model
    }

    await fetch('http://localhost:5000/parts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPart),
    })

    // refresh data
    fetchParts()

    // clear form
    setName('')
    setPrice('')
    setStock('')
    setModel('')
   
  }

  return (
    <div style={{ padding: '50px' }}>
      <h1>Parts Inventory</h1>

      <div>
        <input
          type="float"
          placeholder="Part name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <input
          type="float"
          placeholder="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />

        <br />
        <br />

        <input
          type="float"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <br />
        <br />

        <input
          type="float"
          placeholder="stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />

        <br />
        <br />

        <button onClick={addPart}>Add Part</button>
      </div>

      <hr />

      {parts.map((part) => (
        <div key={part.id}>
          <h3>{part.name}</h3>
          <p>{part.model}</p>
          <p>{part.price}</p>
          <p>{part.stock}</p>
        </div>
      ))}
    </div>
  )
}

export default App
