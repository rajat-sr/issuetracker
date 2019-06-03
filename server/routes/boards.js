import express from 'express';
import mongoose from 'mongoose';

import Board from './../model/board';

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
});

// app.post('/', async (req, res) => {
  // const { name, lifeCycles } = req.body;
  // const dbStatus = await Board.
// });

module.exports = app;
