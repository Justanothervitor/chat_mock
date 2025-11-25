import {useAuth} from './hooks/useAuth';
import RegisterPage from "./components/auth/RegisterPage.jsx";
import LoginPage from "./components/auth/LoginPage.jsx";
import LoadingSpinner from "./components/common/LoadingSpinner.jsx";
import ChatPage from "./components/chat/ChatPage.jsx";


const AppRouter = ({ currentPage, setCurrentPage }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <LoadingSpinner />;
    }

    if (user) {
        return <ChatPage />;
    }

    if (currentPage === 'register') {
        return <RegisterPage onSwitchToLogin={() => setCurrentPage('login')} />;
    }

    return <LoginPage onSwitchToRegister={() => setCurrentPage('register')} />;
};
export default AppRouter;