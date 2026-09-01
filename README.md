# Portfólio de Aniversário – Prof. Eng. Bernardo

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)
![Bootstrap Icons](https://img.shields.io/badge/Bootstrap_Icons-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Yes-06b6d4?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

---

## Sobre o Projeto

Uma página web moderna e imersiva criada para homenagear o **Professor Engenheiro Bernardo Kinavuidi Paulo Lukoki** no seu aniversário. O design combina tecnologia de ponta com uma identidade visual sofisticada, refletindo a sua carreira nas áreas de **Engenharia de Software**, **Docência** e **Administração de Redes**.

### Características

- **Cena 3D interativa** com Three.js – partículas e estrelas em tons de azul e ciano que reagem ao movimento do rato
- **Paleta "Tech Blue"** – azul vibrante, ciano e roxo, com efeitos de brilho e glassmorphism
- **Layout responsivo** – adapta-se perfeitamente a telemóveis, tablets e ecrãs grandes
- **Cards de portfólio** – destacam as áreas de atuação do homenageado
- **Ícones sociais** – Facebook, Instagram e GitHub no rodapé com animação hover
- **Mensagem personalizada** – com aspas decorativas e fundo com efeito sutil
- **Código autossuficiente** – todo o CSS e JavaScript estão num único ficheiro HTML

---

## Captura de Tela

![Pré-visualização](https://placehold.co/600x400/080c1a/3b82f6?text=Tech+Blue+Portfolio)

> *Substitua pela imagem real do projeto quando possível.*

---

## Tecnologias Utilizadas

| Tecnologia         | Descrição                                       |
|--------------------|-------------------------------------------------|
| **HTML5**          | Estrutura semântica e acessível                 |
| **CSS3**           | Glassmorphism, animações, grid flexível        |
| **JavaScript**     | Lógica 3D, interações e efeitos                |
| **Three.js**       | Renderização 3D em tempo real                  |
| **Bootstrap Icons**| Ícones leves e escaláveis para redes sociais   |

---

## Estrutura dos Arquivos

```
/
├── index.html              # Página principal (CSS e JS embutidos)
├── 1786890436475.jpg       # Foto do homenageado
└── README.md               # Este ficheiro
```

> **Nota:** Todo o CSS e JavaScript estão embutidos no `index.html` para facilitar a distribuição e o uso.

---

## Como Utilizar

1. **Clone o repositório** (ou faça download do ficheiro):
   ```bash
   git clone https://github.com/seu-usuario/portfolio-aniversario.git
   ```

2. **Adicione a foto do professor**:
   - Coloque a imagem (ex: `1786890436475.jpg`) na mesma pasta do `index.html`.
   - No código, localize a linha:
     ```html
     <img src="1786890436475.jpg" alt="Professor Bernardo" />
     ```
   - Altere o `src` para o caminho correto da sua foto.

3. **Configure os links das redes sociais** (opcional, mas recomendado):
   - No rodapé, substitua os `href` pelos seus perfis reais:
     ```html
     <a href="https://facebook.com/seudominio" target="_blank">...</a>
     <a href="https://instagram.com/seudominio" target="_blank">...</a>
     <a href="https://github.com/seudominio" target="_blank">...</a>
     ```

4. **Abra o `index.html`** no seu navegador preferido (Chrome, Edge, Firefox, etc.).

> **Atenção:** A cena 3D necessita de ligação à Internet para carregar a biblioteca Three.js via CDN.

---

## Personalização

### Cores
O tema utiliza a paleta **Tech Blue**:
- Primária: `#3b82f6` (azul vibrante)
- Secundária: `#06b6d4` (ciano)
- Destaque: `#8b5cf6` (roxo)
- Fundo: `#080c1a` (azul muito escuro)

Para alterar, basta procurar e substituir estes valores nos estilos (dentro da tag `<style>` no `index.html`).

### Conteúdo
- **Nome e título**: modifique no `<header>` (`.nome` e `.subtitulo`).
- **Cards do portfólio**: edite os textos dentro da secção `#portfolio`.
- **Mensagem**: atualize o `<blockquote class="mensagem">`.
- **Ícones sociais**: altere os links ou adicione/remova ícones no rodapé.

### Fundo 3D
- **Número de partículas**: ajuste a variável `particlesCount` (atualmente 1800).
- **Cores**: mude os valores de `color` nos materiais `PointsMaterial`.
- **Velocidade**: modifique os incrementos de rotação (`rotation.x += 0.00015`).

---

## Dependências

- [Three.js r128](https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js)
- [Bootstrap Icons 1.11.3](https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css)

---

## Contribuição

Contribuições são bem-vindas! Se tiver sugestões para melhorar o design, a acessibilidade ou o desempenho:

1. Faça um **fork** do projeto
2. Crie uma **branch** para a sua feature:
   ```bash
   git checkout -b feature/minha-melhoria
   ```
3. Faça o **commit** das alterações:
   ```bash
   git commit -m 'Adiciona nova funcionalidade X'
   ```
4. Faça o **push** para a branch:
   ```bash
   git push origin feature/minha-melhoria
   ```
5. Abra um **Pull Request** com uma descrição clara das alterações.

---

## Licença

Este projeto está licenciado sob a **MIT License**. Consulte o ficheiro [LICENSE](LICENSE) para mais detalhes.

---

## Créditos

- **Desenvolvido para** – Prof. Eng. Bernardo Kinavuidi Paulo Lukoki
- **Ícones** – [Bootstrap Icons](https://icons.getbootstrap.com/)
- **Biblioteca 3D** – [Three.js](https://threejs.org/)

---

> *"O melhor professor não é o que ensina a programar, mas o que inspira a criar soluções."*  
> — Prof. Bernardo Kinavuidi Paulo Lukoki
```
