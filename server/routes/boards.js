import express from 'express';
import mongoose from 'mongoose';
import Board from '../model/board-model';

const app = express();

app.get('/', async (req, res) => {
  let boards;
  try {
    boards = await Board.find();
  } catch (e) {
    return res.status(503).send(e);
  }
  return res.send(boards);
});

app.get('/:boardID', async (req, res) => {
  const { boardID } = req.query;
  let boards;
  try {
    boards = await Board.find({ _id: boardID });
  } catch (e) {
    return res.status(503).send(e);
  }
  return res.send(boards);

app.post('/', (req, res) => {
  new Board({
    name: 'First Board'
  })
    .save()
    .then(newBoard => res.status(200).send(newBoard))
    .catch(err => res.status(500).send('Something went wrong!' + err));
});

module.exports = app;
