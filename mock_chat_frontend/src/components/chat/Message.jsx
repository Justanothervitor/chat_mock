import {Bot,User} from "lucide-react";

const Message = ({ message }) => {
    const isBot = message.sender === 'bot';

    return (
        <div className={`flex gap-3 mb-4 ${isBot ? 'justify-start' : 'justify-end'}`}>
            {isBot && (
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <Bot size={20} className="text-white" />
                </div>
            )}

            <div className={`max-w-[70%] ${isBot ? 'order-1' : 'order-2'}`}>
                <div
                    className={`px-4 py-2 rounded-2xl ${
                        isBot
                            ? 'bg-gray-100 text-gray-800 rounded-tl-none'
                            : 'bg-blue-500 text-white rounded-tr-none'
                    }`}
                >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
                <span className="text-xs text-gray-400 mt-1 block px-2">
          {message.timestamp.toLocaleTimeString('pt-BR', {
              hour: '2-digit',
              minute: '2-digit'
          })}
        </span>
            </div>

            {!isBot && (
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <User size={20} className="text-white" />
                </div>
            )}
        </div>
    );
};
export default Message;