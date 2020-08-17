const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'There is no team in Axe.',
    user: 'Axe',
    added: new Date()
  },
  {
    text: 'There may be many earths, but there\'s only one Earthshaker.',
    user: 'Earthshaker',
    added: new Date()
  },
  {
    text: 'Time and Tidehunter wait for no man.',
    user: 'Tidehunter',
    added: new Date()
  },
  {
    text: 'The honorable Donté Panlin, at your service.',
    user: 'Pangolier',
    added: new Date()
  },
];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Messages', messages });
});

router.get('/new', (req, res, next) => {
  res.render('form', {title: 'New Message'});
});

router.post('/new', (req, res, next) => {
  const message = {
    text: req.body.text,
    user: req.body.user,
    added: new Date()
  };
  messages.push(message);
  res.redirect('/');
});

module.exports = router;
