import express from 'express';
import bodyParser from 'body-parser';
import boards from './routes/boards';

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/boards/', boards);

app.get('/', (req, res) => {
  res.send('Hey!');
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
