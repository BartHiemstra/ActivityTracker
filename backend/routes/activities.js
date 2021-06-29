const router = require('express').Router();
let Activity = require('../models/activity.model');

router.route('/').get((req, res) => {
  Activity.find()
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newActivity = new Activity({
    description,
    duration,
    date,
  });

  newActivity.save()
  .then(() => res.json('Activity added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Activity.findById(req.params.id)
    .then(activity => res.json(activity))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Activity.findByIdAndDelete(req.params.id)
    .then(() => res.json('Activity deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Activity.findById(req.params.id)
    .then(activity => {
      activity.description = req.body.description;
      activity.duration = Number(req.body.duration);
      activity.date = Date.parse(req.body.date);

      activity.save()
        .then(() => res.json('Activity updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;