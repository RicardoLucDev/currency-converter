<h1>💱 Conversor de Moedas Web</h1>
Um projeto simples e funcional de conversor de moedas utilizando tecnologias web (HTML, CSS, JavaScript) e integração com a AwesomeAPI para obter os valores atualizados das principais moedas.
<h2>🔗 Demonstração</h2>
https://ricardolucdev.github.io/currency-converter/

<h2>📦 Tecnologias Utilizadas </h2>
<ul>
  <li><b>HTML5</b> – Estrutura do layout</li>
  <li><b>CSS3</b> – Estilo e responsividade</li>
  <li><b>JavaScript</b> – Lógica do conversor e chamadas à API</li>
  <li><b>API AwesomeAPI</b> – Cotação em tempo real das moedas (BRL, USD, EUR, GBP, BTC)</li>
</ul>

<h2>🚀 Como usar o projeto </h2>
<ul>
  <li>Clone o repositório: git clone https://github.com/RicardoLucDev/currency-converter.git</li>
  <li>Abra o arquivo index.html no navegador: Basta clicar duas vezes ou abrir com o navegador da sua preferência.</li>
  <li>Escolha as moedas e insira um valor:</li>
  <li>Selecione a moeda de origem e destino.</li>
  <li>Clique em "Converter" para ver o resultado com base na cotação atual.</li>
</ul>

<h2>📊 Estrutura da aplicação </h2>

<ul>
  <li>index.html – Estrutura principal do layout</li>
  <li>style.css – Estilização visual da página</li>
  <li>script.js – Lógica de conversão e requisição à API</li>
</ul>

<h2>📡 Exemplo de chamada à API </h2>

```javascript
fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
  .then(res => res.json())
  .then(data => {
    const dolar = data.USDBRL.bid;
    console.log("Valor do dólar:", dolar);
  .catch(err => console.error("Erro ao buscar dados da API:", err));
  });
```

<h2>💡 Funcionalidades </h2>
<ul>
  <li>Conversão entre múltiplas moedas</li>
  <li>Atualização dinâmica com valores reais</li>
  <li>Interface responsiva para desktop e mobile</li>
  <li>Exibição clara dos resultados</li>
</ul>

🧑‍💻 Desenvolvido por Ricardo Luciano <br>
✨ Se quiser colaborar, sugerir melhorias ou abrir uma issue, fique à vontade!
