# mock_chat
 Um projeto de chatbot realizado como prova técnica para a 4blues

## Como executar o projeto


Para executar essa aplicação é necessário ter Python 3.13 ou alguma versão mais atualizada instalado no seu computador, e também é necessário ter o node e o NPM instalado em seu computador. 

Após realizar o git clone, execute o script install_virtual_environment.zsh via terminal.

```bash
source ./install_virtual_environment.zsh
```

Após executar esse comando ele vai instalar o ambiente virtual do Python e todas as bibliotecas necessárias.

Caso esteja usando o Windows, vá no arquivo install_virtual_environment.bat e dê permissão para executar como arquivo,use o script install_virtual_environment.bat via cmd com o seguinte comando.

```bash
install_virtual_environment.bat
```

Tendo criado o ambiente virtual é só usar o comando a seguir para executar o back-end

```bash
cd mock_chat
pyhton manage.py runserver
```

Agora para executar o front, é necessário acessar a pasta mock_chat_frontend e executar o seguinte comando via terminal.

```bash
npm install
npm run dev
```
Com isso a página do Front end vai estar funcionando.


## Atenção

Essa aplicação ainda tem erros, como por exemplo na api a função de enviar mensagens ainda não funciona. Na página ainda não tem a página de Histórico, a página não atualiza após fazer login com sucesso, a página de registro não muda para a página de login após ter feito o registro com sucesso. Esses problemas vão ser resolvidos em breve.