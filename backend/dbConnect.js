const mongoose=require('mongoose');
const url='mongodb+srv://rajveeersingh1505:VZJdDdV9B3JbTJNx@cluster0.hf6yx.mongodb.net';
mongoose.connect(url,{useUnifiedTopology: true});

const connection=mongoose.connection;

connection.on('error', err=>console.log(err));
connection.on('connected', ()=>console.log('MongoDB connected'));