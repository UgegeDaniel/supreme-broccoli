// // console.log('hello world')
// // node server.js 
// // npm init -y
// // npm install express 
// //REQUIRES
const express = require('express') //step 1
const { graphqlHTTP } = require('express-graphql'); //step 3 - gql - i
const schema = require('./schema/schema') //step 3-gql- iv - c
const mongoose = require('mongoose') //step 13 i
const cors = require('cors') //fe-step-6-1 -i
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config() //step 8 ii

// //CONSTANTS
const PORT = process.env.PORT
const CONNECTION_STRING = process.env.MONGO_DB_CONNECTION_URI
const GQL_MONGO_CONNECTION_STRING = process.env.MONGO_DB_CONNECTION_URI_GQL

const workoutRoutes = require('./routes/workoutRoutes') //step 11 iv

// //EXPRESS APP
const app = express(); //step 2

//allow cross-origin requests 
app.use(cors()) //fe-step-6-1 -ii
// const corsOpts = {
//     origin: '*',
//     credentials: true,
//     methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
//     allowedHeaders: ['Content-Type'],
//     exposedHeaders: ['Content-Type']
// };
// app.use(cors(corsOpts))

// app.use((req, res, next)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
//     next()
// })

// //MIDDLEWARES
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
}) //step 9 i
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true, //step 3 - gql - iv - b go to http://localhost:4000/graphql to access the graphiql tool and make queries eg. 
    /*{
        book(id: "1"){
            name
            genre
            id
        } 
    }*/
}))//step 3 - gql - ii


// app.use(
//     '/graphql',
//     createProxyMiddleware({
//         target: 'http://localhost:3000',
//         changeOrigin: true,
//     })
// );

app.use(express.json()); //ste 9 ii //so you can access req.body

// //ROUTES (use POSTMAN to test every route)
// // app.get('/', (req, res)=>{
// // //  res.send('welcome to the homepage')
// // res.json({msg: 'welcome to the home route'})
// // })//step 4 i 
app.use('/api/workouts', workoutRoutes) //step 11 v note that the route for this is /api/workouts/ the last / coming the endpoint in workoutRoutes

// // app.get('/admin', (req, res)=>{
// //     res.send('this is the top secret admin page')
// // })//step 4 ii 

//CONNECT TO DB //step 13 iii move app.listen into db connection callback 
mongoose.connect(CONNECTION_STRING, { useUnifiedTopology: true, useNewUrlParser: true}).then(()=>{
    //LISTEN
    app.listen(PORT, ()=>{console.log(`connected to the db successfully and sever running on port ${PORT}`)} ) //step 3
}).catch((error)=>{
    console.log(error)
}) //step 13 ii

// mongoose.connect(GQL_MONGO_CONNECTION_STRING, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
//     //LISTEN
//     app.listen(PORT, () => { console.log(`graphql connected to the db successfully and sever running on port ${PORT}`) }) //step 3
// }).catch((error) => {
//     console.log(error)
// })
// mongoose.connection.once('open', () => {
//     console.log('Connection to db verified')
// })//step 13 ii


//step 4 is just for test purposes
//graph ql step 1, 2, 3 (gql- i, gql- ii, gql- iii -- create schemas in schema folder,), 4, 5, 6, 7, 8, [9], [10], [11], 12, 13, 14, [15], 16

// node server.js //step 5
//go to localhost:4000 //step 6

//step 7 set up nodemon
//npm install -g nodemon
//create new scrript in package.json
//"dev": "nodemon server.js"

//step 8 i
// set up environment variables
//npm install dotenv
//create .env file (set and recieve)

//step 9
//setup middlewares

//step 10
//routes folder

//step 11 iii
//require routes

//step 12 go to https://cloud.mongodb.com/v2/62513487385028642e0aeecb#clusters and get connection uri

//step 13 setup Mongoose
//npm install mongoose

//step 14 setup mongoose models
//create models folder
//create workouts file

//step 15 setup controllers
//create controller folder
//create controller file for route cb functions

//step 16
// cd ..
// npx create-react-app frontend
// cd frontend

//step 17
//error handling in controller post request

//CRS-syNf-bHjm-QrSvt

//https://docs.atlas.mongodb.com/security-whitelist/
