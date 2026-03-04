'use strict';

const mongoose = require('mongoose');

const dbURI = 'mongodb://<username>:<password>@localhost:27017/<your_database_name>';

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;