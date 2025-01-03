import express, { request } from 'express'
// import { products } from './productData.mjs'
import cors from 'cors'


const app = express()
const port = process.env.PORT || 3000
const products = []

app.use(cors({origin:["https://ecommerceproject.surge.sh","http://localhost:5173"]}))
app.use(express.json())

app.get('/', (request, response) => {  
  console.log('ye hy request', request.ip);
  
  response.send(`Hello World 2`)
})

app.get('/products',(request, response)=>{

  response.send({message:"All products fetched successfully",status:200, data:products})
})

app.get('/product/:id',(request, response)=>{
  const index = Number(request.params.id)-1
  
 const product = products[index]
if(!product){
  response.status(404).send({data:null,message:'Product not found'})
}
  response.status(200).json({data:product,message:"Product found successfully"})
})

app.post('/product', (request, response)=>{
  console.log("request ki body:",request.body);
  
  const product = request.body
if(!request.body.productName){
  response.status(400).send('name be tou batao product ka')
  return;
}
  products.push(product)

  response.status(201).send("product add successfully!")
})

// app.get('/product', (request, response) => {  
//    console.log('request',request);

//   // response.send({name:'Mango',price:200,quantity:'2kg'})
//   response.send(products)
// })

app.use((request, response)=>{

  response.status(404).send("on route found!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

