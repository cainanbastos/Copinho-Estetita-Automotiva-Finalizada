# Copinho Estética Automotiva — Atualização de serviços e horários

Esta atualização foi aplicada sobre a última versão final do site, preservando sua identidade visual, galeria, navegação e endereços de WhatsApp e Google Maps.

## Novo serviço

- **Lavagem completa de moto + cera — R$ 50**.
- O botão **AGENDAR** utiliza o mesmo número de WhatsApp existente e inclui automaticamente nome e valor do serviço na mensagem.

## Novos horários

- **Segunda a sexta:** 08:00 às 18:00.
- **Sábado:** 08:00 às 17:00.
- **Domingo:** Fechado.

O quadro de horários é utilizado pela interface e pelo JSON-LD de negócio local, evitando divergência com mecanismos de busca.

## Testar e publicar

```bash
npm install
npm run dev
npm run build
```

Confira a grade de seis serviços, o botão de agendamento para moto, a seção de horários e a experiência em celular. Para refletir alterações no site já publicado, é preciso enviar esta versão para o GitHub e executar a nova implantação na hospedagem.

**Aviso:** um ZIP atualizado não altera automaticamente o repositório remoto nem o site que já estiver online.
