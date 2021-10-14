import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    googleId:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
    },
    email:{
        type:String,
    },
    name:{
        type:String,
    },
    givenName:{
        type:String,
    },
    familyName:{
        type:String,
    }
})


const user=mongoose.model('user',userSchema);

export default user;