// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/userModel'); // Correct the path here

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://allanissumaya22:Allanismongopass22@cluster0.zap8277.mongodb.net/Users?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the POST route for inserting users
app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
