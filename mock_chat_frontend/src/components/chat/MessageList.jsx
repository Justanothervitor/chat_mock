import {useEffect, useRef} from "react";
import Message from "./Message.jsx";
import TypingIndicator from "./TypingIndicator.jsx";

const MessageList = ({ messages, isTyping }) => {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    return (
        <div className="flex-1 overflow-y-auto px-6 py-4">
            <div className="max-w-4xl mx-auto">
                {messages.map((message) => (
                    <Message key={message.id} message={message} />
                ))}

                {isTyping && <TypingIndicator />}

                <div ref={messagesEndRef} />
            </div>
        </div>
    );
};
export default MessageList;