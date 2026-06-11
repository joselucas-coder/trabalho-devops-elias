# 🎓 Aluno Online - Infraestrutura e DevOps

Este repositório contém a infraestrutura e o código do projeto Aluno Online, focado na conteinerização com Docker, orquestração com Docker Compose e esteira de CI/CD.

## 🚀 Como Executar o Projeto

Para rodar a aplicação completa (Frontend, Backend e Banco de Dados) localmente, siga os passos:

1. Clone o repositório:
   `git clone https://github.com/joselucas-coder/trabalho-devops-elias.gitt`
2. Entre na pasta do projeto:
   `cd trabalho-devops-elias`
3. Suba a infraestrutura utilizando o Docker Compose:
   `docker compose up --build -d`
4. Acesse o sistema no seu navegador:
   **Frontend:** `http://localhost:5173`

## 🧪 Como Testar
O projeto conta com testes automatizados para a API. Para rodá-los localmente:
1. Acesse a pasta do backend: `cd backend`
2. Instale as dependências: `npm install`
3. Execute o comando de testes: `npm test`

## ⚙️ CI/CD (GitHub Actions)
O repositório possui uma esteira de Integração Contínua (CI) configurada via GitHub Actions. Sempre que um Pull Request é aberto para as branches principais, a pipeline executa automaticamente a instalação de dependências e a suíte de testes (`npm test`) para garantir que nenhum código quebrado seja integrado à aplicação.

## 🐛 Relatório de Correções (SRE / DevOps)
Durante o desenvolvimento, a equipe solucionou diversos gargalos de infraestrutura e bugs críticos:
- **Banco de Dados:** Implementação de volumes (`pgdata`) para persistência de dados e configuração do script `init.sql` no boot.
- **Backend:** Correção de variáveis de ambiente (`DB_HOST`, `DB_PASSWORD`) e adição de `healthcheck` e `depends_on` para garantir a ordem correta de inicialização.
- **Frontend:** Ajuste do mapeamento de portas do Nginx (`5173:80`), injeção da variável `VITE_API_URL` e correção de bugs críticos de build no Alpine Linux (arquivos corrompidos e padronização *Case Sensitive* nas importações).
