# Plus One — Primeira versão React para testes

## O que mudou
- Um único `src/components/layout/Header.tsx` usado pelo institucional, English Profile, FAQ e Área do aluno
- English Profile convertido em componentes React, sem iframe: `EnglishProfile.tsx`, `ChatWindow.tsx`, `AnswerInput.tsx`, `ProfileHub.tsx`
- 25 perguntas e mapeamento de seções extraídos do script do backup para `src/data/questions.ts`
- Mesma chave de respostas no localStorage (`plusOneEnglishProfileWebV2`), mesma condição para Q11 e mesmo endpoint/protocolo de envio
- As páginas legadas foram movidas para `archive/legacy-original` como referência; não são usadas na aplicação
- Rotas `/app` e `/app/faq` redirecionam para as páginas React responsivas

## Instalação sem tocar no backup
1. Extraia este ZIP em uma NOVA pasta, por exemplo `plus-one-react-teste`
2. No VS Code abra a pasta que contém `package.json`
3. No terminal execute `npm.cmd install`
4. Execute `npm.cmd run dev`
5. Abra o endereço mostrado pelo Vite, normalmente `http://localhost:5173/plus-one-english/`
6. Compare `/` e `/english-profile` e teste introdução, hub, 25 perguntas, condição Q11, botão Anterior, light/dark, FAQ e navegação

## Atenção ao teste de envio
O envio final usa o endpoint REAL do Google Apps Script existente no backup. Não finalize uma entrevista fictícia sem querer criar um registro real. Teste primeiro as perguntas sem concluir o envio.

## Status da validação
- Confirmado: 25 perguntas extraídas do backup, sintaxe TS/TSX transpilada sem erros de parsing
- NÃO confirmado neste ambiente: `npm run build` (instalação de dependências indisponível), aparência no navegador, navegação ponta a ponta e confirmação de envio
- Esta é uma versão de teste, NÃO substitua o projeto principal antes de validar

## Próximas correções
A versão React é uma migração funcional inicial; detalhes de fidelidade visual ao layout legado (chat, hub, FAQ, mobile) precisam ser aprovados no navegador. O FAQ usa o conteúdo do HTML legado, agora renderizado pelo React sem iframe.
