import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const home = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8');
const meta = readFileSync(new URL('../app/layout.tsx', import.meta.url), 'utf8');
const css = readFileSync(new URL('../app/globals.css', import.meta.url), 'utf8');

test('mantém os cinco serviços anteriores e adiciona lavagem de moto por R$ 50', () => {
  for (const price of ['R$ 80', 'R$ 130', 'R$ 150', 'R$ 200', 'R$ 400']) {
    assert.ok(home.includes(`price:"${price}"`), `Preço original ausente: ${price}`);
  }
  assert.match(home, /title:"Lavagem completa de moto \+ cera", price:"R\$ 50"/);
  assert.match(home, /services\.map\(s=>/);
  assert.match(home, /wa\(`Olá! Vim pelo site da Copinho e gostaria de saber mais sobre o serviço: \$\{s\.title\} \(\$\{s\.price\}\)\.`\)/);
  assert.equal((home.match(/\{ n:"\d\d", title:/g) || []).length, 6);
});

test('usa os novos horários na interface e no schema da empresa', () => {
  const expected = [
    ['Segunda-feira','08:00–18:00'],
    ['Terça-feira','08:00–18:00'],
    ['Quarta-feira','08:00–18:00'],
    ['Quinta-feira','08:00–18:00'],
    ['Sexta-feira','08:00–18:00'],
    ['Sábado','08:00–17:00'],
    ['Domingo','Fechado'],
  ];
  for (const [day, hours] of expected) {
    assert.ok(home.includes(`["${day}","${hours}"]`), `${day} deveria ser ${hours}`);
  }
  assert.match(home, /hours\.map\(h=>/);
  assert.match(home, /openingHoursSpecification: hours\.filter/);
});

test('preserva o WhatsApp, o endereço e inclui a nova oferta no SEO', () => {
  assert.match(home, /const phone = "5512997976793"/);
  assert.match(home, /streetAddress: "R\. José Antônio Almeida Gonzaga, 395"/);
  assert.match(meta, /lavagem completa de moto com cera/i);
  assert.match(css, /Atualização comercial — grade equilibrada para seis serviços/);
});
