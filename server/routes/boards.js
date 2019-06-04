import express from 'express';
import Board from '../model/board-model';

const app = express();

app.post('/', (req, res) => {
  const boardBody = req.body;
  new Board(boardBody)
    .save()
    .then(newBoard => res.status(200).send(newBoard))
    .catch(err => res.status(500).send('Something went wrong!' + err));
});

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
  } catch (err) {
    return res.status(503).send(err);
  }
  return res.send(boards);
});

app.get('/:boardId/issues', async (req, res) => {
  const boardID = req.params.boardId;
  try {
    Board.findById(boardID)
    .populate('lifeCycles.$.issues')
    .exec((err, board) => {
      if (err) return res.status(503).send(err);
      return res.send(board);
    });
  } catch (e) {
    return res.status(503).send(e);
  }
});

module.exports = app;
