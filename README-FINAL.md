# COPINHO ESTÉTICA AUTOMOTIVA — VERSÃO FINAL 1.0

Projeto mantido sobre a base V6, com revisão estética, responsiva e de acessibilidade.

## Executar no VS Code (Windows)

1. Extraia este ZIP para uma pasta (não execute diretamente de dentro do arquivo compactado).
2. Abra a pasta extraída no VS Code.
3. No terminal integrado, execute:

```powershell
node --version
npm install
npm run dev
```

4. Abra o endereço local informado no terminal (normalmente `http://localhost:5173`).

Para preparar uma versão de produção no ambiente de desenvolvimento configurado para este projeto:

```powershell
npm run build
```

O projeto usa Vite/Vinext e o plugin Cloudflare, portanto a publicação depende das configurações de hospedagem existentes.

## O que foi corrigido nesta versão

- Eliminado o texto duplicado que ficava visível atrás dos quatro cards de confiança.
- Faixa de confiança separada da abertura, sem sobreposição, com contraste aprimorado.
- Adaptados os espaços e alturas em telas menores.
- Mantidas as oito imagens reais da galeria, sem nomes, filtros ou fotografia do interior.
- Adicionadas miniaturas WebP responsivas à galeria, conservando as imagens maiores para ampliação.
- Aprimorados foco por teclado, fechamento do menu mobile e navegação do visualizador de fotos.
- Ajustada a preferência do usuário por movimento reduzido.
- Pré-carregamento da imagem principal para reduzir atrasos perceptíveis.

## Informações preservadas

Os valores e serviços originais, WhatsApp, endereço, textos e links externos foram preservados. Esta atualização acrescenta lavagem completa de moto com cera por R$ 50 e modifica os horários de funcionamento para segunda a sexta, das 08:00 às 18:00, e sábado, das 08:00 às 17:00.

## Checklist antes de publicar

- [ ] Verificar `npm run dev` no computador e visualizar a página em celular e desktop.
- [ ] Confirmar abertura dos links de WhatsApp e Google Maps.
- [ ] Conferir a galeria: abrir, avançar, voltar, fechar com Escape e clicar fora.
- [ ] Verificar agendamento de cada serviço e todos os preços apresentados.
- [ ] Executar `npm run build` no ambiente configurado e corrigir eventual erro de instalação.
- [ ] Confirmar domínio final e metadados antes de publicar em endereço definitivo.

## Limite da validação

A verificação automatizada de integridade de arquivos e regras comerciais é independente da instalação de pacotes. A compilação final em produção e os testes no navegador exigem ambiente com dependências instaladas.
