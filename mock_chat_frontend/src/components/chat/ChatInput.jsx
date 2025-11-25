import {useState} from "react";
import { Send} from "lucide-react";

const ChatInput = ({ onSend, disabled }) => {
    const [inputText, setInputText] = useState('');

    const handleSubmit = () => {
        if (inputText.trim()) {
            onSend(inputText);
            setInputText('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    return (
        <div className="bg-white border-t border-gray-200 px-6 py-4">
            <div className="max-w-4xl mx-auto flex gap-3">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={disabled}
                />
                <button
                    onClick={handleSubmit}
                    disabled={!inputText.trim() || disabled}
                    className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                >
                    <Send size={20} />
                </button>
            </div>
        </div>
    );
};

export default ChatInput;