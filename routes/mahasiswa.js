const express = require("express")
const routerMahasiswa = express.Router()

const controllersMahasiswa = require('../controllers/mahasiswa')

routerMahasiswa.route('/mahasiswa')
    .post(controllersMahasiswa.insert)
    .get(controllersMahasiswa.getMahasiswa)

routerMahasiswa.route('/mahasiswa/:nim')
    .get(controllersMahasiswa.getMahasiswaByNim)
    .put(controllersMahasiswa.update)
    .delete(controllersMahasiswa.delete)

module.exports = routerMahasiswa
// const express = require('express');
// const routerMhs = express.Router();
// const connection = require('../db/db')
// const ctrMhsm = require('../controllers/mahasiswa')

// routerMhs.post('/belajar', ctrMhsm.create)

// routerMhs.get('/belajar', ctrMhsm.getMhs)

// routerMhs.get('/belajar/:nim', ctrMhsm.getMhsBynim)

// routerMhs.put('/belajar/:nim', ctrMhsm.update)

// routerMhs.delete('/belajar/:nim', ctrMhsm.delete)

// module.exports = routerMhs
