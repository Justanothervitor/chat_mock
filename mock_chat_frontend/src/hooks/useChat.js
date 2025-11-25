import {useState} from "react";
import chatService from "../services/chatService.js";


const useChat = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: 'Olá! Sou seu assistente virtual. Como posso ajudar?',
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);

    const sendMessage = async (text) => {
        const userMessage = {
            id: Date.now(),
            text,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setIsTyping(true);

        try {
            const botResponse = await chatService.sendMessage(text);
            setMessages(prev => [...prev, botResponse]);
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
        } finally {
            setIsTyping(false);
        }
    };

    return { messages, isTyping, sendMessage };
};
export default useChat;