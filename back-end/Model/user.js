const mongoose  = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    phoneNumber:{type:Number},
    password:{type:String,required:true,minLength:4},
    avatar:{
        id:{type:String},
        url:{type:String}
    },
    address:[{
        country:{type:String},
        city:{type:String},
        address1:{type:String},
        adress2:{type:String},
        pincode:{type:Number,required:true},
    }],
    role:{type:String,default:user},
    createdAt:{type:Date,default:Date.now()}
    
})

userSchema.pre('save',async function(){
    if(this.modified('password'))
        return next()

    await bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.jsonTokens = function(){
 return jwt.sign({id:this._id},process.env.JWT_TOKEN,{expriresIn:process.env.JWT_EXPIRES})
}