# Projeto ONG

Site de uma ONG fictícia feito na disciplina de Desenvolvimento Front-end (ADS - Cruzeiro do Sul Virtual). O site apresenta a ONG, os projetos de voluntariado e doação, e tem um formulário de cadastro.

## Tecnologias
- HTML5 (estrutura das páginas e formulário com validação nativa)
- CSS3 (layout com Flexbox e estilo das páginas)
- Git e GitHub (controle de versão)

## Pré-requisitos
- Um navegador atualizado (Chrome, Edge ou Firefox)
- Git instalado, para clonar o repositório

## Como rodar localmente
1. Clone o repositório:
   ```
   git clone https://github.com/FelipeTeixeir/projeto-ong.git
   ```
2. Entre na pasta:
   ```
   cd projeto-ong
   ```
3. Abra o arquivo `index.html` no navegador.

O projeto não precisa instalar dependências nem gerar build, porque usa só HTML e CSS.

## Estrutura de pastas
```
projeto-ong/
├── index.html      → página inicial
├── projetos.html   → projetos de voluntariado e doação
├── cadastro.html   → formulário de cadastro
├── estilo.css      → estilos do site
└── imagens/        → imagens em jpg, png e webp
```

## Versionamento
### Branches (GitFlow)
- `main`: versão pronta do site
- `develop`: desenvolvimento
- `feature/`: novas funcionalidades
- `hotfix/`: correções urgentes

Toda mudança é feita numa branch `feature/` e entra na `develop` por pull request.

### Commits
As mensagens seguem o padrão Conventional Commits:
- `feat:` nova funcionalidade
- `fix:` correção
- `docs:` documentação
- `style:` ajustes visuais

### Versões
As versões seguem o versionamento semântico (MAJOR.MINOR.PATCH) e são marcadas com tags. A primeira versão é a `v1.0.0`.

## Autor
Felipe Teixeira
