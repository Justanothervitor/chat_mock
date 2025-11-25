import React, { useState } from 'react';
import { Bot, Lock, Mail } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import authService from "../../services/authService.js";

const RegisterPage = ({ onSwitchToLogin }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const { register } = useAuth();

    const handleSubmit = async () => {
        setError('');
        setSuccessMessage('');


        setLoading(true);

        try {
            const result = await register(username, email, password,confirmPassword);

            if (result.success) {
                setSuccessMessage('Conta criada! Redirecionando para login...');

                // Aguarda 2 segundos e vai para tela de login
                setTimeout(() => {
                    onSwitchToLogin();
                }, 2000);
            } else {
                setError(result.error);
            }
        } catch (err) {
            setError('Erro inesperado ao criar conta '+err);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !loading) {
            handleSubmit();
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Bot size={32} className="text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800">Criar Conta</h1>
                    <p className="text-gray-600 mt-2">Cadastre-se para começar</p>
                </div>

                {/* Mensagem de erro */}
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
                        <p className="text-sm">{error}</p>
                    </div>
                )}

                {/* Mensagem de sucesso */}
                {successMessage && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4">
                        <p className="text-sm">{successMessage}</p>
                    </div>
                )}

                <div className="space-y-4">
                    {/* Campo Nome */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="John Doe"
                            disabled={loading}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                        />
                    </div>

                    {/* Campo Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <div className="relative">
                            <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="seu@email.com"
                                disabled={loading}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                            />
                        </div>
                    </div>

                    {/* Campo Senha */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Senha
                        </label>
                        <div className="relative">
                            <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Mínimo 6 caracteres"
                                disabled={loading}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                            />
                        </div>
                    </div>

                    {/* Campo Confirmar Senha */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirmar Senha
                        </label>
                        <div className="relative">
                            <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Digite a senha novamente"
                                disabled={loading}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                            />
                        </div>
                    </div>

                    {/* Botão Cadastrar */}
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition-colors font-medium disabled:bg-indigo-300 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                        {loading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Criando conta...
                            </>
                        ) : (
                            'Cadastrar'
                        )}
                    </button>

                    {/* Link para Login */}
                    <div className="text-center mt-4">
                        <span className="text-gray-600">Já tem uma conta? </span>
                        <button
                            onClick={onSwitchToLogin}
                            disabled={loading}
                            className="text-indigo-500 hover:text-indigo-600 font-medium disabled:text-indigo-300"
                        >
                            Faça login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;