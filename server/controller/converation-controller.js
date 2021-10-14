// import React from 'react'
import conversation from '../model/conversation.js'

export const newConveration = async(request,response) => {

    let senderId=request.body.senderId
    let receiverId=request.body.receiverId



    try {


        const exist=await conversation.findOne({members:{$all : [receiverId,senderId]}});


        if(exist){
            response.status(200).json("conversation already exists");
            return;
        }

        const newConversation=new conversation({
            members:[senderId,receiverId]
        })

        await newConversation.save();
        response.status(200).josn("new conversation added successfully ")

    } catch (error) {
        response.status(500).json(error);
    }
}



export const getConversation=async(request,response)=>{
    try {
        const conv=await conversation.findOne({members:{$all:[request.body.sender,request.body.receiver]}})
        response.status(200).json(conv);
    } catch (error) {
        response.status(500).json(error)
    }
}