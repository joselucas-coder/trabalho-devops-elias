# --- Estágio 1: Instalação de Dependências ---
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
# Instala as dependências (pode incluir as de dev para rodar testes se precisar na pipeline)
RUN npm install

# --- Estágio 2: Produção ---
FROM node:20-alpine
WORKDIR /app

# Copia as dependências já instaladas no estágio anterior
COPY --from=builder /app/node_modules ./node_modules

# Copia o restante do código fonte
COPY . .

# Variável de ambiente garantindo o modo produção
ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]