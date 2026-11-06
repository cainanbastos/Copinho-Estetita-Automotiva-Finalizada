import Portfolio from "../components/portfolio";
import MobileMenu from "../components/mobile-menu";
import RevealOnScroll from "../components/reveal-on-scroll";

const phone = "5512997976793";
const wa = (message = "Olá! Vim pelo site da Copinho Estética Automotiva e gostaria de solicitar um orçamento.") =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
const maps = "https://www.google.com/maps/search/?api=1&query=R.%20Jos%C3%A9%20Ant%C3%B4nio%20Almeida%20Gonzaga%2C%20395%20-%20Cruz%2C%20Lorena%20-%20SP%2C%2012606-370";

const services = [
  { n:"01", title:"Lavagem interna e externa", price:"R$ 80", desc:"Limpeza interna e externa para manter o veículo limpo, bem cuidado e com ótima apresentação.", items:["Limpeza interna","Lavagem externa","Acabamento final"] },
  { n:"02", title:"Lavagem interna, externa e motor", price:"R$ 130", desc:"Um cuidado mais completo, incluindo a limpeza do compartimento do motor.", items:["Limpeza interna","Lavagem externa","Lavagem do motor"] },
  { n:"03", title:"Lavagem completa", price:"R$ 150", badge:"MAIS PROCURADO", desc:"Tratamento completo para renovar a limpeza, o acabamento e a apresentação do seu veículo.", items:["Cuidado completo","Detalhamento","Acabamento minucioso"] },
  { n:"04", title:"Lavagem completa e cristalização", price:"R$ 200", badge:"PROTEÇÃO + BRILHO", desc:"Lavagem completa com cristalização para realçar o brilho e ajudar a proteger a pintura.", items:["Lavagem completa","Cristalização","Realce de brilho"] },
  { n:"05", title:"Lavagem e higienização dos bancos", price:"R$ 400", badge:"CUIDADO PREMIUM", desc:"Limpeza do veículo com higienização cuidadosa dos bancos para um interior renovado.", items:["Lavagem do veículo","Higienização dos bancos","Acabamento interno"] },
  { n:"06", title:"Lavagem completa de moto + cera", price:"R$ 50", badge:"MOTOS", desc:"Lavagem completa de motocicleta com aplicação de cera para finalizar o cuidado e valorizar a apresentação.", items:["Lavagem completa da moto","Aplicação de cera","Acabamento final"] },
];


const trustPoints = [
  ["Atendimento personalizado", "Cuidado pensado para a necessidade de cada veículo."],
  ["Produtos profissionais", "Aplicação com foco em acabamento, proteção e apresentação."],
  ["Acabamento minucioso", "Atenção aos detalhes do início ao fim do serviço."],
  ["Lorena — SP", "Localização fácil para quem quer praticidade no atendimento."],
];

const hours = [
  ["Segunda-feira","08:00–18:00"],["Terça-feira","08:00–18:00"],["Quarta-feira","08:00–18:00"],
  ["Quinta-feira","08:00–18:00"],["Sexta-feira","08:00–18:00"],["Sábado","08:00–17:00"],["Domingo","Fechado"],
];

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "Copinho Estética Automotiva",
  telephone: "+55-12-99797-6793",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. José Antônio Almeida Gonzaga, 395",
    addressLocality: "Lorena",
    addressRegion: "SP",
    postalCode: "12606-370",
    addressCountry: "BR",
  },
  openingHoursSpecification: hours.filter(([, time]) => time !== "Fechado").map(([day, time]) => {
    const dayMap: Record<string, string> = {
      "Segunda-feira": "Monday", "Terça-feira": "Tuesday", "Quarta-feira": "Wednesday",
      "Quinta-feira": "Thursday", "Sexta-feira": "Friday", "Sábado": "Saturday",
    };
    const [opens, closes] = time.split("–");
    return { "@type": "OpeningHoursSpecification", dayOfWeek: dayMap[day], opens, closes };
  }),
};

export default function Home(){return <main>
  <RevealOnScroll />
  <a className="skipLink" href="#conteudo">Pular para o conteúdo</a>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
  <div id="conteudo" />
  <header>
    <a className="brand" href="#inicio"><img src="/logo-copinho.png" alt="Copinho Estética Automotiva"/></a>
    <nav aria-label="Navegação principal"><a href="#servicos">Serviços</a><a href="#resultados">Resultados</a><a href="#diferenciais">Diferenciais</a><a href="#faq">Dúvidas</a><a href="#localizacao">Localização</a></nav>
    <MobileMenu />
    <a className="btn mini" href={wa()} target="_blank" rel="noreferrer">Agendar agora ↗</a>
  </header>

  <section className="hero" id="inicio"><div className="heroVisual" aria-hidden="true"><div className="heroVisualFrame"/><span className="heroVisualIndex">COPINHO / ESTÉTICA AUTOMOTIVA</span></div><div className="shade"/><div className="heroCopy">
    <p className="eyebrow">— Estética automotiva em Lorena — SP</p><h1>Seu carro merece<br/><i>outro nível</i> de cuidado.</h1>
    <p>Cuidado técnico, atenção aos detalhes e acabamento profissional para renovar, proteger e valorizar o seu veículo.</p>
    <div className="actions"><a className="btn" href={wa()} target="_blank" rel="noreferrer">Solicitar orçamento ↗</a><a href="#servicos">Conheça os serviços ↓</a></div>
  </div></section>

  <section className="trustBar" aria-label="Diferenciais da Copinho">
    <div className="trustBarInner">
      {trustPoints.map(point => <article key={point[0]} className="trustItem"><small>{point[0]}</small><p>{point[1]}</p></article>)}
    </div>
  </section>

  <section className="section" id="servicos"><div className="heading"><div><p className="eyebrow red">— Nossos serviços</p><h2>Cuidado completo.<br/><i>Resultado visível.</i></h2></div><p>Da manutenção do dia a dia aos tratamentos mais detalhados, cada serviço é executado com técnica e atenção.</p></div>
    <div className="grid">{services.map(s=><article key={s.n} className={s.badge?"premiumService":""}><div className="serviceTop"><small>{s.n}</small>{s.badge?<span className="serviceBadge">{s.badge}</span>:<em>↗</em>}</div><h3>{s.title}</h3><p>{s.desc}</p><ul className="serviceList">{s.items.map(i=><li key={i}>✓ {i}</li>)}</ul><div className="serviceBottom"><strong>{s.price}</strong><a href={wa(`Olá! Vim pelo site da Copinho e gostaria de saber mais sobre o serviço: ${s.title} (${s.price}).`)} target="_blank" rel="noreferrer">AGENDAR ↗</a></div></article>)}</div>
  </section>

  <section className="about" id="sobre"><div className="aboutPic"><div><strong>100%</strong><small>ATENÇÃO AOS<br/>DETALHES</small></div></div><div className="aboutText"><p className="eyebrow">— Sobre a Copinho</p><h2>Mais que limpeza.<br/><i>É cuidado de verdade.</i></h2><p>Na Copinho Estética Automotiva, cada veículo recebe atendimento cuidadoso e uma solução adequada à sua necessidade. O foco está em limpeza, proteção e acabamento de qualidade.</p>{[["01","Transparência","Você sabe o que será feito antes do serviço começar."],["02","Capricho","Cada detalhe é tratado com atenção do início ao fim."],["03","Confiança","Seu veículo é cuidado com respeito e responsabilidade."]].map(v=><div className="value" key={v[0]}><b>{v[0]}</b><span><strong>{v[1]}</strong>{v[2]}</span></div>)}</div></section>

  <Portfolio />

  <section className="section why" id="diferenciais"><div className="heading"><div><p className="eyebrow red">— Por que escolher a Copinho?</p><h2>Detalhes que fazem<br/><i>a diferença.</i></h2></div><p>Um atendimento pensado para quem valoriza cuidado, boa apresentação e atenção em cada etapa do serviço.</p></div><div className="whyGrid">
    <article><b>01</b><h3>Cuidado nos detalhes</h3><p>Atenção do início ao acabamento para entregar um veículo bem cuidado.</p></article>
    <article><b>02</b><h3>Produtos de alta performance</h3><p>Trabalhamos com produtos profissionais de alta performance, incluindo produtos Vonixx.</p></article>
    <article><b>03</b><h3>Atendimento personalizado</h3><p>O serviço é orientado conforme a necessidade e as condições de cada veículo.</p></article>
    <article><b>04</b><h3>Foco no acabamento</h3><p>O objetivo é entregar limpeza, apresentação e acabamento que você percebe ao buscar o carro.</p></article>
  </div></section>

  <section className="section process"><p className="eyebrow red">— Como funciona</p><h2>Simples para você.<br/><i>Completo para o seu carro.</i></h2><div className="steps">
    <div><b>01</b><h3>Fale com a Copinho</h3><p>Chame pelo WhatsApp ou venha até a estética. O agendamento é recomendado, mas também atendemos conforme disponibilidade.</p></div>
    <div><b>02</b><h3>Escolha o cuidado</h3><p>Avaliamos sua necessidade e indicamos o serviço adequado para o veículo.</p></div>
    <div><b>03</b><h3>Deixe com a gente</h3><p>Você pode deixar o veículo e buscar depois, após a conclusão do serviço.</p></div>
    <div><b>04</b><h3>Retire seu carro</h3><p>Receba o veículo finalizado e pronto para voltar às ruas com outra apresentação.</p></div>
  </div></section>

  <section className="faq section" id="faq"><div className="faqIntro"><p className="eyebrow red">— Dúvidas frequentes</p><h2>Antes de vir,<br/><i>saiba tudo.</i></h2><p>As principais informações para facilitar seu atendimento na Copinho.</p></div><div className="faqList">
    <details><summary>Preciso agendar antes de ir?<span>+</span></summary><p>Não obrigatoriamente. Você pode ir diretamente, mas o agendamento é recomendado para garantir disponibilidade no melhor horário.</p></details>
    <details><summary>Posso deixar o carro e buscar depois?<span>+</span></summary><p>Sim. O veículo pode ficar na estética durante a realização do serviço e ser retirado após a conclusão.</p></details>
    <details><summary>Quanto tempo demora o serviço?<span>+</span></summary><p>O tempo varia conforme o serviço e as condições do veículo. Consulte pelo WhatsApp para receber uma orientação.</p></details>
    <details><summary>Quais formas de pagamento são aceitas?<span>+</span></summary><p>Atualmente, a Copinho aceita PIX e dinheiro.</p></details>
    <details><summary>Quais produtos são utilizados?<span>+</span></summary><p>São utilizados produtos profissionais de alta performance, incluindo produtos Vonixx, de acordo com a necessidade do serviço.</p></details>
  </div></section>

  <section className="location section" id="localizacao"><div className="locationIntro"><p className="eyebrow red">— Localização e funcionamento</p><h2>Fácil de chegar.<br/><i>Pronto para cuidar.</i></h2><p className="locationLead">Estamos no bairro Cruz, em Lorena — SP. Você pode vir diretamente ou falar antes pelo WhatsApp para consultar a disponibilidade.</p><div className="locationDetails"><div><small>ENDEREÇO</small><strong>R. José Antônio Almeida Gonzaga, 395</strong><span>Cruz, Lorena — SP • CEP 12606-370</span></div><div><small>PAGAMENTO</small><strong>PIX e dinheiro</strong><span>Consulte o atendimento pelo WhatsApp.</span></div></div><div className="hours"><small>HORÁRIOS</small>{hours.map(h=><div key={h[0]}><span>{h[0]}</span><strong>{h[1]}</strong></div>)}</div><div className="locationActions"><a className="btn" href={maps} target="_blank" rel="noreferrer">Abrir no Google Maps ↗</a><a className="textLink" href={wa("Olá! Gostaria de consultar a disponibilidade de atendimento na Copinho.")} target="_blank" rel="noreferrer">Consultar horário →</a></div></div>
    <a className="mapCard" href={maps} target="_blank" rel="noreferrer" aria-label="Abrir localização da Copinho no Google Maps"><div className="mapGrid"/><div className="mapPin">C</div><div className="mapLabel"><small>COPINHO ESTÉTICA AUTOMOTIVA</small><strong>Lorena — SP</strong><span>R. José Antônio Almeida Gonzaga, 395 • Ver rota ↗</span></div></a></section>

  <section className="contact" id="contato"><div><p className="eyebrow">— Agende seu atendimento</p><h2>Pronto para renovar<br/>o seu carro?</h2><p>Fale com a Copinho e consulte a disponibilidade.</p><a className="btn white" href={wa()} target="_blank" rel="noreferrer">Falar pelo WhatsApp ↗</a></div><aside><small>TELEFONE / WHATSAPP</small><a href="tel:+5512997976793">(12) 99797-6793</a><small>ENDEREÇO</small><a href={maps} target="_blank" rel="noreferrer">R. José Antônio Almeida Gonzaga, 395<br/>Cruz, Lorena — SP</a><small>PAGAMENTO</small><p>PIX e dinheiro</p><a className="route" href={maps} target="_blank" rel="noreferrer">COMO CHEGAR ↗</a></aside></section>

  <footer><div className="footerBrand"><a className="brand" href="#inicio"><img src="/logo-copinho.png" alt="Copinho Estética Automotiva"/></a><p>Estética automotiva em Lorena — SP.</p></div><div className="footerNav"><strong>NAVEGAÇÃO</strong><a href="#servicos">Serviços</a><a href="#resultados">Resultados</a><a href="#diferenciais">Diferenciais</a><a href="#faq">Dúvidas frequentes</a><a href="#localizacao">Localização</a></div><div className="footerContact"><strong>CONTATO</strong><a href="tel:+5512997976793">(12) 99797-6793</a><a href={wa()} target="_blank" rel="noreferrer">WhatsApp ↗</a><a href={maps} target="_blank" rel="noreferrer">Como chegar ↗</a></div><div className="footerBottom"><p>© 2026 Copinho Estética Automotiva.</p><a href="#inicio">Voltar ao topo ↑</a></div></footer>

  <a className="float" href={wa()} target="_blank" rel="noreferrer" aria-label="Falar com a Copinho pelo WhatsApp"><svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.04 3C9.39 3 4 8.24 4 14.7c0 2.29.68 4.52 1.97 6.42L4.1 27.8l7.03-1.79a12.3 12.3 0 0 0 4.9 1.01h.01C22.68 27.02 28 21.78 28 15.32 28 8.86 22.69 3 16.04 3Zm0 21.9c-1.65 0-3.27-.43-4.68-1.24l-.34-.2-4.17 1.06 1.11-3.94-.22-.35a9.5 9.5 0 0 1-1.5-5.12c0-5.23 4.4-9.49 9.81-9.49 5.4 0 9.8 4.26 9.8 9.49s-4.4 9.79-9.81 9.79Zm5.38-7.12c-.29-.14-1.74-.83-2.01-.93-.27-.09-.47-.14-.66.14-.2.28-.76.93-.93 1.12-.17.19-.34.21-.64.07-.29-.14-1.24-.44-2.36-1.41a8.72 8.72 0 0 1-1.64-1.98c-.17-.28-.02-.43.13-.57.13-.13.29-.33.44-.5.15-.16.2-.28.29-.47.1-.19.05-.35-.02-.5-.08-.14-.66-1.54-.91-2.11-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.51.07-.78.35-.27.28-1.03 1-1.03 2.42 0 1.43 1.07 2.8 1.22 3 .15.19 2.1 3.11 5.09 4.36.71.3 1.27.48 1.7.62.72.22 1.37.19 1.88.12.57-.08 1.74-.69 1.99-1.36.24-.66.24-1.23.17-1.35-.08-.11-.27-.18-.57-.32Z"/></svg><span>Agendar</span></a>
</main>}
