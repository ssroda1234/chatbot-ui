"use client";

import { FC, useState } from 'react';
import './ChatInput.css'

export interface ChatInputProps {
    chatMessage: (e: any, message: string) => void;
}

const ChatInput: FC<ChatInputProps> = ({ chatMessage }) => {
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      chatMessage(e, message);
      setMessage('');
    };
  
    return (
      <div className="inputDiv">
        <form action="" onSubmit={handleSubmit}>
          <div className="messageInput">
            <input
              type="text"
              name="message"
              value={message}
              autoComplete="off"
              placeholder="Enter question here"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </form>
      </div>
    );
  };
  
export default ChatInput;