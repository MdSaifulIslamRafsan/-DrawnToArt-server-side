const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.edk1eij.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    const craftItemsCollection = client.db("craftDB").collection('craftItems');

    app.get('/craftItems', async(req , res)=>{
      const cursor = craftItemsCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.post('/craftItems', async(req , res)=>{
        const newCraftItems = req.body;
        const result = await craftItemsCollection.insertOne(newCraftItems);
        res.send(result);
    })

    app.put("/craftItems/:id" , async(req , res ) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const options = {upsert : true}
      const updateCraftItems = req.body;
      const craftItems = {
        $set:{
          name: updateCraftItems.name,
          email: updateCraftItems.email,
          customization: updateCraftItems.customization,
          description: updateCraftItems.description,
          image: updateCraftItems.image,
          item_name: updateCraftItems.item_name,
          price: updateCraftItems.price,
          processing_time: updateCraftItems.processing_time,
          rating: updateCraftItems.rating,
          stockStatus: updateCraftItems.stockStatus,
          subcategory_Name: updateCraftItems.subcategory_Name,
        }
      }
      const result = await craftItemsCollection.updateOne(filter , craftItems , options);
      res.send(result);
    
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   
  }
}
run().catch(console.dir);


 app.get("/" , (req , res) =>{
    res.send("this is home page")
 });

 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })