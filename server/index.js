import express from 'express';
import bodyParser from 'body-parser';
import boards from './routes/boards';
import issues from './routes/issues';
import mongoose from 'mongoose';
import config from './config/config';
import cors from 'cors';
import auth from './routes/auth';
import passportSetup from './config/passport-setup';

const PORT = config.PORT;

const app = express();

mongoose.connect(
  config.mongo.connectionString,
  { useNewUrlParser: true },
  err => {
    console.log(err);
  }
);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/boards/', boards);
app.use('/issues/', issues);
app.use('/auth/', auth);

app.get('/', (req, res) => {
  res.send('Hey!');
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
