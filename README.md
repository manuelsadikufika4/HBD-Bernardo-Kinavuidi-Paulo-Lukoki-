# Portfólio de Aniversário – Professor Bernardo

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)
![Bootstrap Icons](https://img.shields.io/badge/Bootstrap_Icons-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

---

## Sobre o projeto

Uma página web moderna e imersiva criada para homenagear o **Professor Engenheiro Bernardo Kinavuidi Paulo Lukoki** no seu aniversário. O design combina:

- **Cena 3D interativa** com Three.js (icosaedro dourado, partículas e anéis orbitantes)
- **Layout responsivo** e sofisticado em tons de azul escuro com detalhes dourados
- **Espaço dedicado** para a foto do homenageado (moldura circular com efeito glow)
- **Portfólio** em cards que destacam as áreas de atuação: Docência, Engenharia, Investigação e Liderança
- **Mensagem personalizada** com aspas decorativas e fundo tipo papel

O objetivo é oferecer uma experiência visual única, com animações suaves e uma identidade visual que foge do comum – **feita à mão**, com atenção aos detalhes.

---

## Captura de tela

![Pré-visualização](https://placehold.co/600x400/0b111f/f6d365?text=Pré-visualização+do+Portfólio)

> *Substitua por uma imagem real do projeto quando possível.*

---

## Tecnologias utilizadas

| Tecnologia       | Descrição                                 |
|------------------|-------------------------------------------|
| **HTML5**        | Estrutura semântica da página             |
| **CSS3**         | Estilização avançada com glassmorphism, animações e grid |
| **JavaScript**   | Lógica da cena 3D e interações           |
| **Three.js**     | Renderização 3D em tempo real             |
| **Bootstrap Icons** | Ícones vetoriais leves e escaláveis    |

---

## Estrutura dos arquivos

```
/
├── index.html          # Estrutura principal
├── style.css           # Todos os estilos
├── script.js           # Lógica Three.js e animações
├── README.md           # Este arquivo
└── (imagens)           # Pasta para fotos (ex: 1786890436475.jpg)
```

---

## Como usar

1. **Clone o repositório** (ou baixe os arquivos)
   ```bash
   git clone https://github.com/seu-usuario/portfolio-aniversario.git
   ```

2. **Adicione a foto do professor**  
   - Coloque a imagem na mesma pasta do `index.html`.  
     ```html
     <img src="1786890436475.jpg" alt="Professor Bernardo" />
     ```

3. **Abra o `index.html`** no navegador preferido (Chrome, Firefox, Edge, etc.)

> **Nota:** A cena 3D requer conexão com a internet para carregar a biblioteca Three.js via CDN.

---

## Personalização

### Cores
O tema principal utiliza azul profundo (`#070b12`) e dourado envelhecido (`#f6d365`). Para alterar a paleta, edite as variáveis no início do `style.css` (se houver) ou substitua os valores diretamente nas regras.

### Conteúdo
- **Nome e título:** modifique os textos no `<header>` do `index.html`.
- **Cards do portfólio:** altere os títulos e descrições na seção `#portfolio`.
- **Mensagem:** atualize o texto dentro do `<blockquote class="mensagem">`.

---

## Dependências

- [Three.js r128](https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js)
- [Bootstrap Icons 1.11.3](https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css)

---

## Contribuição

Contribuições são bem-vindas! Se você tem sugestões para melhorar o design, a acessibilidade ou o desempenho:

1. Faça um **fork** do projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/nova-feature`)
3. Faça o **commit** das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça o **push** para a branch (`git push origin feature/nova-feature`)
5. Abra um **Pull Request**

---

## Licença

Este projeto está sob a licença **MIT**. Consulte o arquivo [LICENSE](LICENSE) para mais informações.

---

## Créditos

- Desenvolvido Para o Bernardo Kinavuidi Lukoki**.
- Ícones: [Bootstrap Icons](https://icons.getbootstrap.com/)
- Biblioteca 3D: [Three.js](https://threejs.org/)

---

> *“O melhor professor não é aquele que ensina, mas aquele que inspira.”*  
> — Professor Bernardo Kinavuidi Paulo Lukoki 
