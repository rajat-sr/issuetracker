import express from 'express';
import Issue from '../model/issue-model';
import Board from '../model/board-model';

const app = express();

app.post('/', (req, res) => {
  const issueBody = req.body;
  new Issue(issueBody)
    .save()
    .then(newIssue =>
      updateBoardIssues(newIssue._id, newIssue.boardId, newIssue.lifeCycleId)
    )
    .then(updatedBoard => res.status(200).send(updatedBoard))
    .catch(err => res.status(500).send('Something went wrong!' + err));
  //   if (updatedBoard) return res.status(200).send(updatedBoard);
});

app.get('/:issueId', async (req, res) => {
  const { issueId } = req.query;
  let issue;
  try {
    issue = await Issue.find({ _id: issueId });
  } catch (err) {
    return res.status(503).send(err);
  }
  return res.send(issue);
});

app.get(
  '/changeStatus/issueId/:issueId/lifeCycle/:lifeCycle',
  async (req, res) => {
    const { issueId } = req.query;
    const { lifeCycle } = req.query;
    let issue;
    try {
      issue = await Issue.find({ _id: issueId });
    } catch (err) {
      return res.status(503).send(err);
    }
    return res.send(issue);
  }
);

async function updateBoardIssues(issueId, boardId, lifeCycleId) {
  let updatedBoard = await Board.findOneAndUpdate(
    { _id: boardId, lifeCycles: { $elemMatch: { _id: lifeCycleId } } },
    { $push: { 'lifeCycles.0.issues': issueId } },
    { new: true, useFindAndModify: false }
  );
  return updatedBoard;
}

module.exports = app;
//doc.array.addToSet(4,5)
