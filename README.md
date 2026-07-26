# Portfólio | Ana Carolina Morais dos Reis Nunes

Página web profissional, responsiva e estática para apresentar projetos de tecnologia desenvolvidos por Ana Carolina Morais dos Reis Nunes.

## Objetivo

O objetivo do site é reunir, em uma página única, informações profissionais, projetos publicados, tecnologias utilizadas, estatísticas do portfólio e canais de contato. A proposta é apresentar soluções web de forma clara para pessoas técnicas e não técnicas.

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- GitHub Pages
- Firebase
- Supabase
- PostgreSQL
- PWA
- SQL

## Estrutura

- `index.html`: conteúdo principal da página.
- `style.css`: identidade visual, cards, responsividade e placeholders.
- `script.js`: links editáveis, menu mobile, estatísticas e ano automático.
- `assets/favicon.svg`: favicon do site.
- `assets/images/`: pasta preparada para capturas de tela dos projetos.

## Como atualizar projetos e links

Os links ficam no início do arquivo `script.js`, dentro do objeto `editableLinks`.

```js
const editableLinks = {
  "alion-demo": "https://ananunes1807-cell.github.io/app-treino-supabase/",
  "alion-code": "https://github.com/ananunes1807-cell/app-treino-supabase",
  linkedin: "#",
  email: "mailto:seu-email@exemplo.com",
  whatsapp: "https://wa.me/5500000000000"
};
```

O LinkedIn profissional está configurado como `https://www.linkedin.com/in/anacarolina-infra-ti/`.

As estatísticas ficam no `script.js`. Projetos publicados e tecnologias são contados automaticamente pela página. O número de repositórios públicos pode ser atualizado em:

```js
const editableStats = {
  publicRepos: 3
};
```

## Como adicionar capturas de tela

Salve as imagens na pasta `assets/images` com estes nomes:

- `alion-treinos.png`
- `sistema-chamados.png`
- `central-demandas.png`

Enquanto as imagens não existirem, a página mostra um placeholder visual elegante.

## Como adicionar a foto profissional

Salve a foto na pasta `assets` com o nome:

```text
profile.jpg
```

Use uma imagem vertical ou quadrada, com boa iluminação, fundo simples e resolução mínima de 800 × 800 pixels.
Enquanto a foto não for adicionada, o site mostra o monograma `AN` no mesmo espaço.

## Como publicar no GitHub Pages

1. Envie os arquivos para o repositório `ananunes1807-cell/ana-nunes-portfolio`.
2. No GitHub, acesse **Settings**.
3. Clique em **Pages**.
4. Em **Build and deployment**, selecione:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
5. Clique em **Save**.

Após a publicação, o site ficará disponível em:

```text
https://ananunes1807-cell.github.io/ana-nunes-portfolio/
```
