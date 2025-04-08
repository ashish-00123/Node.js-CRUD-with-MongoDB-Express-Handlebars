const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://pandeyashish0507:1234@cluster0.xmwle.mongodb.net/book_register_db?retryWrites=true&w=majority&appName=Cluster0'


module.exports = () => mongoose.connect(dbUri)