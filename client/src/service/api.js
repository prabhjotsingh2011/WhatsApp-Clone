import axios from 'axios';



export const addUser=async(data)=>{
    try {
       return await axios.post('http://localhost:8000/add',data)
    } catch (error) {
        console.log("error while calling api ",error);
    }
}
export const getUser=async()=>{
    try {
       let response= await axios.get('http://localhost:8000/users')
       console.log('====================================');
       console.log(response);
       console.log('====================================');
       return response.data;
    } catch (error) {
        console.log("error while calling get user api ",error);
    }
}
export const setConversation=async (data)=>{
    try {
        await axios.post('http://localhost:8000/conversation/add',data)
    } catch (error) {
        console.log("error while calling setConveration",error);
    }
}


export const getConversation=async (data)=>{
    try {
        const response=await axios.post('http://localhost:8000/conversation/get',data)
        return response.data;
    } catch (error) {
        console.log("Error while calling getConversation API",error);
    }
}


export const newMessage=async (data)=>{
    try {
        const response=await axios.post('http://localhost:8000/message/add',data)
        // return response.data;    
    } catch (error) {
        console.log("Error while calling newMessage API",error);
    }
}

export const getMessages=async (id)=>{
    try {
        return await axios.get(`http://localhost:8000/message/get/${id}`)
        // return response.data;    
    } catch (error) {
        console.log("Error while calling getMessage API",error);
    }
}