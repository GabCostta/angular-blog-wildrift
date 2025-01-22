# Angular Blog

## Desafio de Blog Angular da DIO
Clique em [Angular-Blog](https://angular-blog-wildrift.vercel.app/angular-blog-wildrift/) para visualizar o projeto.

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 15.2.5.

## Configuração e Execução

### 1. Instale o Angular CLI Globalmente
Certifique-se de que o Angular CLI está instalado globalmente:
```bash
npm install -g @angular/cli
```
Após a instalação, verifique se está disponível:
```bash
ng version
```

### 2. Adicione o Angular CLI Localmente (opcional)
Se necessário, instale o Angular CLI localmente no projeto:
```bash
npm install @angular/cli --save-dev
```
Para usar a versão local do Angular CLI:
```bash
npx ng version
```

### 3. Verifique o Caminho do Node.js
Certifique-se de que o Node.js e o npm estão configurados corretamente:
```bash
which node
which npm
```
Se necessário, ajuste o PATH ou utilize o NVM para gerenciar versões do Node.js:
```bash
nvm install 18
nvm use 18
```

### 4. Atualize o Angular CLI e Core
Antes de prosseguir, atualize para as versões recomendadas:
```bash
ng update @angular/core@15.2.5 @angular/cli@15.2.5
```

### 5. Resolva Alterações Pendentes no Git
Se o repositório apresentar mudanças não commitadas:
Para salvar as alterações:
```bash
git add .
git commit -m "Salvando mudanças antes de atualizar o Angular"
```
Ou guarde-as temporariamente:
```bash
git stash
```

### 6. Build da Aplicação
Para construir o projeto para produção:
```bash
ng build --configuration production --base-href /angular-blog-wildrift/
```
Os artefatos serão gerados no diretório dist/angular-blog-wildrift.

### 7. Executando o Servidor de Desenvolvimento
Execute o seguinte comando para iniciar o servidor de desenvolvimento:
```bash
ng serve
```
Acesse no navegador: [http://localhost:4200/](http://localhost:4200/).

### 8. Configuração de Produção com http-server
Após o build, sirva os arquivos estáticos com http-server:
```bash
npm install -g http-server
http-server ./dist/angular-blog-wildrift -p 8080
```
Acesse no navegador: [http://localhost:8080/](http://localhost:8080/).

## Testes e Scaffold

### Criar Componentes
Use o comando abaixo para gerar novos componentes:
```bash
ng generate component component-name
```

### Executar Testes Unitários
Execute os testes unitários via Karma:
```bash
ng test
```

### Testes de ponta a ponta (E2E)
Para testes end-to-end, adicione e execute as ferramentas necessárias:
```bash
ng e2e
```

## Problemas Conhecidos e Soluções

### Erro: "bash: ng: command not found"
Certifique-se de que o Angular CLI está instalado globalmente.
Verifique se o Node.js está no PATH ou utilize o NVM para ajustar.

### Erro: "Failed to load resource: the server responded with a status of 404"
Verifique o `<base href>` no arquivo `index.html`:
```html
<base href="/angular-blog-wildrift/">
```
Sirva os arquivos da subpasta correta:
```bash
http-server ./dist/angular-blog-wildrift -p 8080
```
Confirme que o outputPath está corretamente configurado para a pasta dist para o deploy funcionar corretamente Abra o arquivo angular.json e procure por:
```bash
 "outputPath": "dist/angular-blog-wildrift",
```
### Erro: "MIME type ('') is not a supported stylesheet MIME type"
Certifique-se de que o servidor está configurado para enviar arquivos CSS com o tipo MIME correto.

## Links Úteis
- [Documentação Angular CLI](https://angular.io/cli)
- [Karma Runner](https://karma-runner.github.io)
```
