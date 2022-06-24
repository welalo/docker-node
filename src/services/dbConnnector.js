const mongoose = require('mongoose');

const connectMongo = async () => {

    try {
        await mongoose.connect(process.env.MONGOURL)
        console.log('Conectado a mongodb')
    } catch (error) {
        throw new Error('Error conectando a mongo')
    }
}


module.exports = {
    connectMongo
}