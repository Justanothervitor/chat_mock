import {useState} from "react";
import AuthProvider from "./provider/AuthProvider.jsx";
import AppRouter from "./AppRouter.jsx";

const App = () => {
    const [currentPage, setCurrentPage] = useState('login');

    return (
        <AuthProvider>
            <AppRouter currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </AuthProvider>
    );
};

export default App;