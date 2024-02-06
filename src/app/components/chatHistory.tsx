"use client";

import { FC } from 'react';
import { ChatDefinition } from '../interface/chatDefinition';
import './ChatHistory.css'

interface ChatHistoryProps {
    chats: ChatDefinition[];
}


const ChatHistory: FC<ChatHistoryProps> = ({
    chats,
  }) => {

    return (
        <div className='ChatHistory'>
          {chats && chats.length
            ? chats.map((chat, index) => (
                <p key={index} className={chat.role === "user" ? "user_msg" : "system_msg"}>
                  <span>{chat.content}</span>
                </p>
              ))
            : ""}
          </div>
        );
    
  };
  
  export default ChatHistory;