const generateBotResponse = (userText) => {
    const lowerText = userText.toLowerCase();

    if (lowerText.includes('olá') || lowerText.includes('oi')) {
        return 'Olá! É um prazer conversar com você. Em que posso ajudar hoje?';
    } else if (lowerText.includes('ajuda')) {
        return 'Claro! Posso ajudar com informações, responder perguntas ou apenas conversar. O que você precisa?';
    } else if (lowerText.includes('nome')) {
        return 'Sou um assistente virtual criado com React! Não tenho um nome específico, mas você pode me chamar como quiser.';
    } else if (lowerText.includes('hora') || lowerText.includes('horas')) {
        return `Agora são ${new Date().toLocaleTimeString('pt-BR')}.`;
    } else if (lowerText.includes('tchau') || lowerText.includes('adeus')) {
        return 'Até logo! Foi ótimo conversar com você. Volte sempre!';
    } else {
        return `Entendi que você disse: "${userText}". Como posso ajudar com isso?`;
    }
};

export { generateBotResponse };