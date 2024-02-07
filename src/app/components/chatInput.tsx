"use client";

import { FC, useState } from "react";
import classes from "./chatInput.module.css";

export interface ChatInputProps {
  chatMessage: (e: any, message: string) => void;
}

const ChatInput: FC<ChatInputProps> = ({ chatMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    chatMessage(e, message);
    setMessage("");
  };

  return (
    <div className={classes.inputDiv}>
      <form action="" onSubmit={handleSubmit}>
        <div className={classes.messageInput}>
          <input
            type="text"
            name="message"
            value={message}
            autoComplete="off"
            placeholder="Enter question here...."
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
