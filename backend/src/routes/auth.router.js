const router = require('express').Router();
const AuthController = require('../controllers/user.controller');
const { userUpload } = require('../Middlewares/user.image');


//post methods

 router.route('/register').post(AuthController.register);
router.route('/login').post(AuthController.Login);
router.route('/forgot').post(AuthController.forgotPassword);
router.route('/reset/:token').post(AuthController.resetPassword);

//Get methods
router.route('/logout').get(AuthController.Logout);
router.route('/users').get(AuthController.GetUsers);

//Put methods
router.route('/user/:id/update').put(userUpload,AuthController.UpdateProfile);

//Delete methods
router.route('/user/:id').delete(AuthController.DeleteUser); 



module.exports = router;