
import mongoose from 'mongoose'
const Connection=async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@chatapp.mv4sm.mongodb.net/WHATSAPPCLONE?retryWrites=true&w=majority`

    try {
     await mongoose.connect(URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            // useFindAndModify: false
        })

        console.log('====================================');
        console.log("connection successfuly established ");
        console.log('====================================');

    } catch (error) {
        console.log("error while connecting mongoDB",error);
    }
}


export default Connection;