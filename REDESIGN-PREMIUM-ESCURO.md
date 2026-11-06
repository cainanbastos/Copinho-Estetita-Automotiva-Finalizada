# Copinho Estética Automotiva — Redesign premium escuro

## O que mudou
- Identidade visual completamente reformulada: preto/grafite, dourado da marca e texto de alto contraste.
- Novo hero com fotografia real de um veículo do portfólio, cuidadosamente escurecida por CSS para manter os textos legíveis.
- Seção sobre o estabelecimento com fotografia real, sem imagens de banco externo.
- Cards de serviço, diferenciais, etapas, perguntas, localização e contato reorganizados visualmente.
- Galeria editorial responsiva, com fotos originais, filtro **Todos / Carros / Motos / Interior**, contador e visualização ampliada com teclado (setas e Esc).
- Menu móvel funcional e acessível, com fechamento após seleção da seção.
- Imagens para apresentação em `public/portfolio/apresentacao/`, todas 960 × 1200 pixels com cor, contraste e nitidez ajustados. **Os arquivos reais originais em `public/portfolio/` foram preservados.** Não há manipulação que altere o veículo ou invente resultados; os detalhes originais não podem superar a resolução das fotos de entrada.
- Novas imagens de capa: `public/capa-premium.webp`, `public/capa-mobile.webp` e `public/sobre-copinho.webp`.

## O que permaneceu igual
- Preços, serviços, descrições, FAQ, horários, endereço, pagamento, número e mensagens do WhatsApp, links para mapas, SEO descritivo e informações de contato.
- Projeto e tecnologias originais, sem trocar o framework, sem novas dependências ou refazer tudo do zero.

## Executar no VS Code (Windows)

Requer Node.js 22.13+ (versão indicada no package.json):

```powershell
npm install
npm run dev
```

Abra a URL exibida pelo terminal.

## Arquivos principais alterados
- `app/globals.css` — tema escuro premium integral.
- `app/page.tsx` — menu móvel e preservação integral das informações.
- `app/layout.tsx` — imagem social da nova capa.
- `components/portfolio.tsx` — nova galeria com filtros e visualização.
- `components/mobile-menu.tsx` — navegação móvel.
- `public/portfolio/apresentacao/*.webp` — versões padronizadas.
- `public/capa-premium.webp`, `public/capa-mobile.webp`, `public/sobre-copinho.webp`.

## Validação
Foram conferidos sintaxe TSX, estrutura CSS, caminhos de imagens, âncoras e dados essenciais. A compilação com npm não pôde ser concluída no ambiente de produção do ZIP porque as dependências não estavam totalmente disponíveis no cache local. Por isso, é necessário executar `npm install` e `npm run dev` no seu PC.
