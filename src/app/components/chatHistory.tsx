"use client";

import { FC } from "react";
import { ChatDefinition } from "../interface/chatDefinition";
import classes from "./chatHistory.module.css";
import { BotIcon } from "./botIcon";

interface ChatHistoryProps {
  chats: ChatDefinition[];
}

const ChatHistory: FC<ChatHistoryProps> = ({ chats }) => {
  return (
    <div className={classes.chatHistory}>
      {chats && chats.length
        ? chats.map((chat, index) => (
            <>
              {chat.role === "system" ? (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignContent: "center",
                  }}
                >
                  <BotIcon />
                  <p className={classes.systemmsg}>
                    <span>{chat.content}</span>
                  </p>
                </div>
              ) : (
                <div style={{ width: "100%", textAlign: "right" }}>
                  <p className={classes.usermsg}>
                    <span>{chat.content}</span>
                  </p>
                </div>
              )}
            </>
          ))
        : ""}
    </div>
  );
};

export default ChatHistory;
