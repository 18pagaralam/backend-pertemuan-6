const express = require('express');
const app = express();
const port = 5000;
const routerMahasiswa =  require('./routes/mahasiswa')

app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(routerMahasiswa)


const mongoose = require('mongoose')
require('dotenv').config
mongoose.connect('mongodb://localhost:27017/siakad',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("sukses terkoneksi dengan mongodb");
})





app.listen(port, () => {
    console.log(`server berjalan dengan localhost:${[port]}`)
});

// const routerMhs = require('./routes/mahasiswa')
// const routerMk = require('./routes/matakuliah')
// const routerNilai = require('./routes/nilai')
// app.use(routerMhs)
// app.use(routerMk)
// app.use(routerNilai)