import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(new URL('../package.json', import.meta.url)));
const get = (name) => readFile(path.join(root, name), 'utf8');

test('Informações comerciais preservadas', async () => {
  const page = await get('app/page.tsx');
  for (const price of ['R$ 80', 'R$ 130', 'R$ 150', 'R$ 200', 'R$ 400']) {
    assert.ok(page.includes(price), `Preço ${price} não encontrado`);
  }
  for (const fragment of ['5512997976793', 'José Antônio Almeida Gonzaga, 395',
    'Segunda-feira', '08:00–18:00', 'Domingo', 'Fechado', 'PIX e dinheiro']) {
    assert.ok(page.includes(fragment), `Informação ausente: ${fragment}`);
  }
  assert.match(page, /id="servicos"/);
  assert.match(page, /id="localizacao"/);
  assert.match(page, /id="contato"/);
});

test('Faixa de confiança não sobrepõe mais textos duplicados', async () => {
  const page = await get('app/page.tsx');
  const css = await get('app/globals.css');
  assert.doesNotMatch(page, /className="heroInfo"/);
  assert.match(page, /className="trustBar"/);
  assert.match(css, /\/\* Copinho FINAL[^]*?\.trustBar\s*\{\s*margin-top:\s*0;/);
});

test('Galeria reúne 8 fotos sem filtros ou fotografia interna', async () => {
  const portfolio = await get('components/portfolio.tsx');
  assert.equal((portfolio.match(/src: "\/portfolio\/resultado-/g) ?? []).length, 8);
  assert.doesNotMatch(portfolio, /interior-veiculo|portfolioFilters|portfolioCaption/);
  assert.match(portfolio, /srcSet=/);
  assert.match(portfolio, /key === "Escape"/);
  assert.match(portfolio, /aria-label="Próxima foto"/);
  for (const name of ['resultado-suv-prata.webp','resultado-suv-vermelho.webp',
    'resultado-moto-preta.webp','resultado-hatch-lateral.webp','resultado-pickup.webp',
    'resultado-moto-azul.webp','resultado-hatch-branco.webp','resultado-hatch-branco-2.webp']) {
    for (const dir of ['apresentacao', 'miniatura']) {
      const info = await stat(path.join(root, 'public/portfolio', dir, name));
      assert.ok(info.size > 10000, `Imagem inválida: ${name} (${dir})`);
    }
  }
});
