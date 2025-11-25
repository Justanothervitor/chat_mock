import {useAuth} from "../../hooks/useAuth.js";
import useChat from "../../hooks/useChat.js";
import ChatInput from "./ChatInput.jsx";
import MessageList from "./MessageList.jsx";
import Header from "../common/Header.jsx";

const ChatPage = () => {
    const { messages, isTyping, sendMessage } = useChat();
    const { user, logout } = useAuth();

    return (
        <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <Header user={user} onLogout={logout} />
            <MessageList messages={messages} isTyping={isTyping} />
            <ChatInput onSend={sendMessage} disabled={isTyping} />
        </div>
    );
};
export default ChatPage;