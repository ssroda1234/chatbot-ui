import { ChatDefinition } from '@/app/interface/chatDefinition';
import axios from 'axios';


const chatEndpoint = "http://127.0.0.1:8000/chatmessage/";

const ChatCompletion = async (chatHistory: ChatDefinition[]): Promise<string> => {
    let retVal;
    const data = { ChatHistory: chatHistory };
  
    try {
      const response = await axios.post(chatEndpoint, data);
      retVal = response.data;
    } catch (error) {
      retVal = 'chatCompletion error';
      console.log(error);
    }
  
    return retVal;
  };
  
  export default ChatCompletion;