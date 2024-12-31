const gameController = require("../controllers/game-controller");
const authMiddlewate = require("../middleware/auth.middleware");

const router = require("express").Router();

// to get the game
router.post("/", authMiddlewate, gameController.getPattern);

module.exports = router;
