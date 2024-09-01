const mongoose=require('mongoose');
const url='mongodb+srv://21je0759:NrQzhxiYedbrYVF9@cluster0.8cjir.mongodb.net';
mongoose.connect(url,{useUnifiedTopology: true});

const connection=mongoose.connection;

connection.on('error', err=>console.log(err));
connection.on('connected', ()=>console.log('MongoDB connected'));
