const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://sonasunojk:sonasunojk@cluster0.23dc3.mongodb.net/providence?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
     })