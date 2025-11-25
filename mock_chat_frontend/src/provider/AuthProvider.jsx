import {useEffect, useState} from "react";
import authService from "../services/authService.js";
import {AuthContext} from "../context/AuthContext.jsx";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       initAuth();
    }, []);

    const initAuth = async () => {
        try {
            if (!authService.isAuthenticated()) {
                setUser(null);
                setLoading(false);
                return;
            }

            let currentUser = authService.getCurrentUser();
            setUser(currentUser);
        } catch (error) {
            console.error('Erro ao inicializar autenticação:', error);
        } finally {
            setLoading(false);
        }
    };


    const login = async (username, password) => {
        const result = await authService.login(username, password);
        if (result.success) {
           setUser(result.user);
           setLoading(false);
        }
        return result;
    };

    const register = async (username, email, password,password2) => {
        const result = await authService.register(username, email, password,password2);
        if (result.success) {
            setUser(result.user);
        }
        return result;
    };

    const logout = async () => {
        await authService.logout();
        setUser(null);
    };


    const isAuthenticated = () => {
        return !!user && authService.isAuthenticated();
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                register,
                logout,
                loading,
                isAuthenticated
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider