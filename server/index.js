import express from 'express';
import boards from './routes/boards';

const PORT = 3000;

const app = express();

app.use('/boards/', boards);

app.get('/', (req, res) => {
  res.send('Hey!');
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
