const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { connectDB } = require('./config/database');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
    res.send('API is running');
    }   
);

app.use('/api', require('./routes/main'));
const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})

