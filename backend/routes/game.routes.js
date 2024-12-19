const gameController = require('../controllers/game-controller');

const router = require('express').Router();

// to get the game
router.get('/',gameController.getPattern);

module.exports = router;
