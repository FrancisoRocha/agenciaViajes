import express from 'express';
import router from './routes/index.js';

const app = express();

// DEFINIR PUERTO
const port = process.env.PORT || 4000;

// HABILITAR PUG
app.set('view engine', 'pug');

// OBTENER EL AÑP ACTUAL
app.use((req, res, next) => {

    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia De Viajes';

    next();
})

// DEFINIR LA CARPETA PUBLICA
app.use(express.static('public'));

// AGREGAR ROUTER
app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor esta funcionando el el purto: ${port}`)
});
