

const chatService = {

    sendMessage: async (message) => {
        const user = localStorage.getItem('user');
        const response = await fetch('http://127.0.0.1:8000/v1/chat/send',{
            method: 'POST',
            headers: {'Content-Type': 'application/json','Authorization':localStorage.getItem('Authorization')},
            body: JSON.stringify(message,user.username,user.id),
        })
        const data = await response.json();
        if(data.status === 201) {
            return data;
        }
    },

    getMessageHistory: async () => {

        const response = await fetch('http:127.0.0.1:8000/v1/chat/history',{
            method: 'GET',
            headers: {'Content-Type': 'application/json','Authorization':localStorage.getItem('Authorization')}
        })
        const data = await response.json();
        if(data.status === 201) {
            return JSON.parse(data.body)
        }
    }

};
export default chatService;