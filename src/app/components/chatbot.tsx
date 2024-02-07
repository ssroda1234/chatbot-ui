"use client";

import { useState } from "react";
import { ChatDefinition } from "../interface/chatDefinition";
import ChatCompletion from "@/services/chatCompletion";
import ChatInput from "./chatInput";
import ChatHistory from "./chatHistory";
import "./chatbot.css";

const Chatbot = () => {
  const [chats, setChats] = useState<ChatDefinition[]>([
    { role: "system", content: "How can I help you" },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const chat = async (e: any, message: string) => {
    e.preventDefault();

    if (!message) return;
    setIsTyping(true);
    window.scrollTo(0, 1e10);

    let msgs = chats;
    msgs.push({ role: "user", content: message });
    setChats(msgs);

    let chatCompletionResults: string = "";
    try {
      chatCompletionResults = await ChatCompletion(chats);
    } catch (err) {
      chatCompletionResults = "Error Searching Chat completion";
    }

    msgs.push({ role: "system", content: chatCompletionResults });
    setChats(msgs);
    setIsTyping(false);
  };

  return (
    <div>
      <ChatHistory chats={chats} />

      <div className={isTyping ? "" : "hide"}>
        <p>
          {" "}
          <i>{isTyping ? "Searching...." : ""}</i>{" "}
        </p>
      </div>
      <hr />
      <ChatInput chatMessage={chat} />
    </div>
  );
};

export default Chatbot;
