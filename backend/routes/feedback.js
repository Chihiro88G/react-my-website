const router = require('express').Router();
let Feedback = require('../models/feedback');

// ***************************** endpoints ********************************//
router.route('/').get((req, res) => {

    Feedback.find()
        .then(feedback => res.json(feedback))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

    const username = req.body.username;
    const message = req.body.message;

    const newFeedback = new Feedback({
        username,
        message,
    });

    newFeedback.save()
        .then(() => res.json('Feedback added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;