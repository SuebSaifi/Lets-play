const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken")
const verify = require("../verifyToken")
//REGISTER
router.post("/register",async(req,res)=>{
    const newUser =  new User({
        username:req.body.username,
        email:req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString()
    });
    try {
        const user = await newUser.save()
    res.status(201).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
    
});
//Refres Token
let refresh=[]
router.post('/refresh',(req,res)=>{
    //take the refresh token from the user
    const refreshtoken = req.body.token
    //send error id thre 
    if (!refreshtoken)return res.status(401).json("You are not Authenticated")
    if(!refresh.includes(refreshtoken)){
        return res.status(403).json("Refresh token is not valid")
    }
    jwt.verify(refreshtoken,process.env.SECRET_KEY,(err,user)=>{
        err && console.log(err)
        refresh=refresh.filter((token)=>token!==refreshtoken);

        const newAccessToken= jwt.sign(
            {id:user._id,isAdmin:user.isAdmin},
            process.env.SECRET_KEY,
            {expiresIn:"5d"}

            )
            const newRefreshToken=jwt.sign(
                {id:user._id,isAdmin:user.isAdmin},
                process.env.SECRET_KEY,
                )

                refresh.push(newRefreshToken)
                res.status(200).json({
                    accessToken:newAccessToken,
                    refreshtoken:newRefreshToken,

                })
    })
    //if anything is ok create new thoken
    
})
//LOGIN
router.post("/login",async(req,res)=>{
    try {
        const user =await User.findOne({email:req.body.email})
        !user&& res.status(401).json("Wrong Password or email");

        // Decrypt
        const bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        if(originalPassword !==req.body.password ){
        return res.status(401).json("Wrong Password or email");}
            //generate access token
        const accessToken = jwt.sign(
            {id:user._id,isAdmin:user.isAdmin},
            process.env.SECRET_KEY,
            {expiresIn:"30d"})
        const refreshTokens = jwt.sign(
            {id:user._id,isAdmin:user.isAdmin},
            process.env.SECRET_KEY,
            )
            refresh.push(refreshTokens)
        const {password,...info}=user._doc;

        res.status(200).json({...info,accessToken,refreshTokens})
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post("/logout",verify,(req,res)=>{
    const refreshToken=req.body.token;
    refresh=refresh.filter((token)=>token!==refreshToken);
    res.status(200).json("User has benn logout")
})
module.exports =router