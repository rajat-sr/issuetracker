import express from 'express';
import bodyParser from 'body-parser';
import boards from './routes/boards';
import mongoose from 'mongoose';
import config from './config/config';

const PORT = config.PORT;

const app = express();

mongoose.connect(
  config.mongo.connectionString,
  { useNewUrlParser: true },
  err => {
    console.log(err);
  }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/boards/', boards);

app.get('/', (req, res) => {
  res.send('Hey!');
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
