import { Bot, LogOut} from "lucide-react"

const Header = ({ user, onLogout }) => {
    return (
        <div className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <Bot size={24} className="text-white" />
                </div>
                <div>
                    <h1 className="text-lg font-bold text-gray-800">Assistente Virtual</h1>
                    <p className="text-xs text-gray-500">Online agora</p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="text-right">
                    <p className="text-sm font-medium text-gray-800">{user?.username}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                </div>
                <button
                    onClick={onLogout}
                    className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                    <LogOut size={18} />
                    <span className="text-sm">Sair</span>
                </button>
            </div>
        </div>
    );
};
export default Header;