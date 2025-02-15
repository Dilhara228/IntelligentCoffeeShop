const UserModel = require('../models/user.model');
// const AuthService = require('../Helpers/AuthService');
// const {sendMail} = require('../Helpers/MailService');
// const fs = require('fs');
// const cloudinary = require('../utils/Cloudinary');
// const {validateFirstName,validateLastName,validateEmail,validatePassword} = require('../Validations/auth.validator');
// const{userUpload} = require('../Middlewares/User.Image');





//post method
exports.register = async(req,res) => {
    try{
        const {firstName,lastName,email,password} = req.body;
        
        //validate form
        validateFirstName(firstName);
        validateLastName(lastName);
        validateEmail(email);
        validatePassword(password);

        //hash user password
        const hashedPassword = await AuthService.hashPassword(password);

        //form object
        const user = new UserModel({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password: hashedPassword
        });

        //save to the database
        const savedUser = await user.save();

    /*     //send mail
        await sendMail({
            from: process.env.MAIL,
            to: user.email,
            subject: 'Registration Successful',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                    <img src="https://example.com/path/to/your/logo.png" alt="Envough Textiles Logo" style="display: block; margin: 0 auto; max-width: 200px; height: auto; margin-bottom: 20px;">
                    <h1 style="color: #333333; font-size: 24px; margin-bottom: 20px;">Hey ${firstName}, Welcome to Envough Textiles</h1>
                    <p style="color: #666666; font-size: 16px; margin-bottom: 15px;">Your registration was successful. We're thrilled to have you on board!</p>
                    <p style="color: #666666; font-size: 16px; margin-bottom: 15px;">Best Regards,</p>
                    <p style="color: #666666; font-size: 16px; margin-bottom: 15px;">Envough Team</p>
                </div>
            `
        }); */

        res.status(200).json({
            message: 'Registration Successful',
            data: savedUser
        });
    }catch (err){
        res.status(500).json({
            message: err.message
        });
    }
     
};



//login user

exports.Login = async (req,res) =>{
    try {
        const {email,password} = req.body;

        //check form validate
        validateEmail(email);
        validatePassword(password);
        //get user by email from db
        const user = await UserModel.findOne({email:email});
        if(!user) throw new Error('User not found');

        //compare passwords 
        const passwordMatch = await AuthService.comparePassword(password,user.password);
        if(!passwordMatch) throw new Error('Invalid password');
        //create and return jsonwebtoken
        const token = await AuthService.generateToken(user);
        res.cookie('token', token).json(user);
        res.status(200);
        

    } catch (err) {
        res.status(500).json({message:'internel server error', err});
        console.log (err);
    }
};



//log out the user
exports.Logout=async (req,res)=>{
    try{
        res.clearCookie('token');
        res.status(200).json({message:'Logout successful'});
    }catch(err){
        res.status(500).json({message:'internal server error',err});
    }
};
