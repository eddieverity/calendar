const express = require('express');
const router = express.Router();

// Item Model
const Appointment = require('../../models/Appointment');

// @route   GET api/items
// @desc    Get All Items
// @access  Public

router.get('/', (req, res) => {
  Appointment.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
});

// @route   POST api/items
// @desc    Create an Item
// @access  Public

router.post('/', (req, res) => {
  const newAppointment = new Appointment({
    title: req.body.title,
    date: req.body.date,
    description: req.body.description
  });
  newAppointment.save()
    .then(appointment => res.json(appointment));
});

// @route   DELETE api/items/:id
// @desc    Delete an Item
// @access  Public

router
  .delete('/:id', (req, res) => {
    Appointment.findById(req.params.id)
      .then(appointment => appointment.remove().then(() => res.json({success: true})))
      .catch(err => res.status(404).json({success: false}));  
  });


module.exports = router;