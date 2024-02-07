"use client";

import { FC } from 'react';
import { ChatDefinition } from '../interface/chatDefinition';
import classes from './chatHistory.module.css'

interface ChatHistoryProps {
    chats: ChatDefinition[];
}


const ChatHistory: FC<ChatHistoryProps> = ({
    chats,
  }) => {
    console.log(classes);

    return (
        <div className={classes.chatHistory}>
          {chats && chats.length
            ? chats.map((chat, index) => (
                <p key={index} className={chat.role === "user" ? classes.usermsg : classes.systemmsg}>
                  <span>{chat.content}</span>
                </p>
              ))
            : ""}
          </div>
        );
    
  };
  
  export default ChatHistory;