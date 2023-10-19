const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.202owzh.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        const brandNameCollection = client.db('brandShopDB').collection('brandName');
        const cartCollection = client.db('brandShopDB').collection('cart');

        const appleCollection = client.db('brandShopDB').collection('apple');
        const samsungCollection = client.db('brandShopDB').collection('samsung');
        const asusCollection = client.db('brandShopDB').collection('asus');
        const xiaomiCollection = client.db('brandShopDB').collection('xiaomi');
        const sonyCollection = client.db('brandShopDB').collection('sony');
        const googleCollection = client.db('brandShopDB').collection('google');



        ////////////////////////////////////////////// Apple
        app.post('/apple', async (req, res) => {
            const apple = req.body;
            const result = await appleCollection.insertOne(apple);
            res.send(result);
        });
        ///////////////
        app.get('/apple', async (req, res) => {
            const cursor = appleCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });
        ///////////////
        app.get('/apple/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await appleCollection.findOne(query);
            res.send(result);
        });
        //////////////////////////////////////////////

        ////////////////////////////////////////////// Samsung
        app.post('/samsung', async (req, res) => {
            const samsung = req.body;
            const result = await samsungCollection.insertOne(samsung);
            res.send(result);
        });
        ///////////////
        app.get('/samsung', async (req, res) => {
            const cursor = samsungCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });
        ///////////////
        app.get('/samsung/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await samsungCollection.findOne(query);
            res.send(result);
        });
        //////////////////////////////////////////////

        ////////////////////////////////////////////// Asus
        app.post('/asus', async (req, res) => {
            const asus = req.body;
            const result = await asusCollection.insertOne(asus);
            res.send(result);
        });
        ///////////////
        app.get('/asus', async (req, res) => {
            const cursor = asusCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });
        ///////////////
        app.get('/asus/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await asusCollection.findOne(query);
            res.send(result);
        });
        //////////////////////////////////////////////

        ////////////////////////////////////////////// Xiaomi
        app.post('/xiaomi', async (req, res) => {
            const xiaomi = req.body;
            const result = await xiaomiCollection.insertOne(xiaomi);
            res.send(result);
        });
        ///////////////
        app.get('/xiaomi', async (req, res) => {
            const cursor = xiaomiCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });
        ///////////////
        app.get('/xiaomi/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await xiaomiCollection.findOne(query);
            res.send(result);
        });
        //////////////////////////////////////////////

        ////////////////////////////////////////////// Sony
        app.post('/sony', async (req, res) => {
            const sony = req.body;
            const result = await sonyCollection.insertOne(sony);
            res.send(result);
        });
        ///////////////
        app.get('/sony', async (req, res) => {
            const cursor = sonyCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });
        ///////////////
        app.get('/sony/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await sonyCollection.findOne(query);
            res.send(result);
        });
        //////////////////////////////////////////////

        ////////////////////////////////////////////// Google
        app.post('/google', async (req, res) => {
            const google = req.body;
            const result = await googleCollection.insertOne(google);
            res.send(result);
        });
        ///////////////
        app.get('/google', async (req, res) => {
            const cursor = googleCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });
        ///////////////
        app.get('/google/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await googleCollection.findOne(query);
            res.send(result);
        });
        //////////////////////////////////////////////





        ////////////////////////////////////////////// Cart
        app.post('/cart', async (req, res) => {
            const cart = req.body;
            const result = await cartCollection.insertOne(cart);
            res.send(result);
        });
        ///////////////
        app.get('cart', async (req, res) => {
            const cursor = cartCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })
        //////////////////////////////////////////////







        //////////////////////////////////////////////
        app.get('/brands', async (req, res) => {
            const cursor = brandNameCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });
        //////////////////////////////////////////////






        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Coffee Server is running');
});
app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});