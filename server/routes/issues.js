import express from 'express';
import Issue from '../model/issue-model';
import Board from '../model/board-model';

const app = express();

app.post('/', (req, res) => {
  const issueBody = req.body;
  new Issue(issueBody)
    .save()
    .then(newIssue => updateBoardIssues(newIssue._id, newIssue.boardId))
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
  Board.findByIdAndUpdate(
    boardId,
    { lifeCycles: { $push: { issues: issueId } } },
    { new: true, useFindAndModify: false },
    function(err, doc) {
      if (doc) {
        return res.status(200).send(doc);
      }
      console.log(err);
    }
  );
}

module.exports = app;
//doc.array.addToSet(4,5)
