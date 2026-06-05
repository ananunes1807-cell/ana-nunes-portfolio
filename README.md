# Portfólio | Ana Carolina Morais dos Reis Nunes

Este repositório contém uma página web profissional, responsiva e estática para apresentar projetos de tecnologia de Ana Carolina Morais dos Reis Nunes.

O objetivo do portfólio é reunir, em uma página única, informações sobre formação, atuação profissional, tecnologias utilizadas, projetos desenvolvidos e canais de contato. A página foi criada com HTML, CSS e JavaScript, sem frameworks pesados.

## Estrutura

- `index.html`: conteúdo principal da página.
- `style.css`: estilos visuais e responsividade.
- `script.js`: menu mobile, ano automático e links fáceis de editar.

## Como editar links

Os links dos projetos e contatos ficam no início do arquivo `script.js`, dentro do objeto `editableLinks`.

Substitua os valores `#`, e-mail e telefone pelos links reais:

```js
const editableLinks = {
  "alion-demo": "#",
  "alion-code": "#",
  linkedin: "#",
  email: "mailto:seu-email@exemplo.com",
  whatsapp: "https://wa.me/5500000000000"
};
```

## Como acessar pelo GitHub Pages

1. Envie os arquivos para o repositório no GitHub.
2. Acesse o repositório `ananunes1807-cell/ana-nunes-portfolio`.
3. Clique em **Settings**.
4. No menu lateral, clique em **Pages**.
5. Em **Build and deployment**, selecione:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
6. Clique em **Save**.

Após alguns minutos, o site ficará disponível em:

```text
https://ananunes1807-cell.github.io/ana-nunes-portfolio/
```
