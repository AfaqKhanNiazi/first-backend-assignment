import express from 'express'
import { products } from './productData.mjs'
import cors from 'cors'
const app = express()
const port = process.env.PORT || 3000

app.use(cors({origin:""}))

app.get('/', (req, response) => {  
  response.send(`Hello World`)
})

app.get('/product', (request, response) => {  
   console.log('request',request);

  // response.send({name:'Mango',price:200,quantity:'2kg'})
  response.send(products)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

