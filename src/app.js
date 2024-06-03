const express = require('express');
const cors = require('cors');
const dayjs = require('dayjs');



const app = express();

app.use(express.json());
app.use(cors())


app.use((req, res, next ) => {
    const currentDate = dayjs().format('DD/MM/YYYY HH:mm:ss');
    console.log(currentDate);
    req.currentDate = currentDate;
    next();

});

app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });

})

app.use('/api', require('./routes/api'));


module.exports = app;