const express = require("express");
const SlackUser = require("./slackUserModel");

const router = express.Router();

router.get("/", (req, res) => {
  SlackUser.find()
    .then(slackUser => {
      res.status(200).json(slackUser);
    })
    .catch((err) => {
      res.status(500).json({ message: "problem getting slack users", err });
    });
});

router.get('/id/:slack_user', (req, res) => {
  const {slack_username} = req.params;

  SlackUser.findByName({slack_username})
    .then(slackUsername => {
      res.status(200).json({slackUsername})
    })
    .catch(err => {
      res.status(500).json({message: "Could not find user", slack_username, err})
    })
})

router.post('/newSlackUser', (req, res) => {
  SlackUser.add()
    .then(newUser => {
      res.status(301).json({newUser})
    })
})

module.exports = router;