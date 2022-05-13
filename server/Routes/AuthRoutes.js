const { checkUser } = require("../middlewares/authMiddleware");
const {register ,login } = require("../Controllers/AuthControllers");

const router= require ("express").Router();
router.post('/',checkUser);
router.post("/register",register)
router.post("/login",login);



module.exports = router;