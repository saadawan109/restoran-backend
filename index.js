
const express = require('express')
const app = express()
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true); 
// Middleware
app.use(express.json());
app.use(cors());
const port = 3001

const userRouter = require('./routes/User.routes.js')
const categoryRoutes = require('./routes/Category.routes.js')
const productRoutes = require('./routes/Product.routes.js')
  


app.post('/', async (req, res) => {
  console.log(req.body);
  
  res.send('Hello World!')
})



// User Apis
app.use('/user', userRouter)

// Category Apis

app.use('/category', categoryRoutes)

// Product Apis

app.use('/product', productRoutes)

app.post("/product",(req,res)=>{
try {
  res.send("hello")
  console.log(req.body);
  
} catch (error) {
  
}
})




mongoose.connect('mongodb://127.0.0.1:27017/restoranDb').then(() => {
  app.listen(port, () => {
      console.log(`contacts app listening on port ${port}`)
  })
}).catch(err => console.log(err.message))