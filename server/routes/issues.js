import express from 'express';
import Issue from '../model/issue-model';
import Board from '../model/board-model';

const app = express();

app.post('/', (req, res) => {
  const issueBody = req.body;
  new Issue()
    .save()
    .then(newIssue => res.status(200).send(newIssue))
    .catch(err => res.status(500).send('Something went wrong!' + err));
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

function updateBoardIssues(issueId, boardId) {
  Board.findByIdAndUpdate(boardId, { 'lifeCycles.issures': issueId }, function(
    err,
    doc
  ) {
    console.log(doc);
    console.log(err, 'err');
  });
}

module.exports = app;
