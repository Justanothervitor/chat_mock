

const authService = {

    login: async (username,password) => {
    const response = await fetch('http://127.0.0.1:8000/v1/users/login',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username:username,password:password})
    })
       const data = await response.json();
        if(data.access && data.refresh)
        {
            localStorage.setItem('Authorization', "Bearer " + data.access);
            localStorage.setItem('refresh', data.refresh);
            const userResult = await fetch('http://127.0.0.1:8000/v1/users/me',{
                method: 'GET',
                headers: {'Content-Type': 'application/json','Authorization': localStorage.getItem('Authorization')},
            })
            const result = await userResult.json();
            console.log(result)
            localStorage.setItem('user', JSON.stringify(result))
            return {success: true, user:userResult.user, access_token: data.access, refresh: data.refresh};
        }
        return {success: false};
    },

    register: async (username, email, password,confirmPassword) => {
        const response = await fetch('http://127.0.0.1:8000/v1/users/register',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username:username,email:email,password:password,password2:confirmPassword})
        })
        const data = await response.json();
        if(data.status === '201')
        {
            return "Conta criada com sucesso!"
        }
        return "Falha ao criar a uma conta, por favor tente mais tarde!";
    },

    logout: async () => {
        const response = await fetch('http://127.0.0.1:8000/v1/users/logout',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({refresh_token:localStorage.getItem('refresh')}),
        })
        const data = await response.json();
        if(data.status === '205'){
            localStorage.removeItem('user');
            localStorage.removeItem('refresh');
            localStorage.removeItem('Authorization');
        }
        localStorage.removeItem('user');
        localStorage.removeItem('refresh');
        localStorage.removeItem('Authorization');
    },

    getNewAcessToken: async () =>{
        const response = await fetch('http://127.0.0.1:8000/v1/users/token/refresh',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'refresh':localStorage.getItem('Refresh')}),
        })
        const data = await response.json();
        if(data.status === '200')
        {
            localStorage.setItem('Authorization', "Bearer " + data.access);
        }
    },

    isAuthenticated(){
        return !!localStorage.getItem('Authorization');
    },

    getCurrentUser(){
        const userData = localStorage.getItem('user');
        if(userData === null){
            return;
        }
        return JSON.parse(userData);
    },


};
export default authService;