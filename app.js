import express from 'express';

const app = express();

//configuracion de puerto de la api
const PORT = process.env.PORT || 3001;

//permite usar el formato json
app.use(express.json());

app.get('/', (req, res, next) => {
     console.log(req.method);
     res.send('Hello World!');
});

app.post('/', (req, res, next) => {
    console.log(req.body);
    res.send('Hello World!');
});

//la app esta escuchando en el puerto asiganado
app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);
});