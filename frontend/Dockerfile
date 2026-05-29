# --- Estágio 1: Builder (Pesado, para compilar o código) ---
FROM node:20-alpine AS builder
WORKDIR /app

# Copia os arquivos de dependência e instala
COPY package*.json ./
RUN npm install

# Copia o resto do código e gera o build de produção
COPY . .
RUN npm run build

# --- Estágio 2: Produção (Leve e seguro) ---
FROM nginx:alpine

# Copia APENAS os arquivos finais gerados no estágio anterior
# Nota: Se o seu React gerar a pasta 'build' em vez de 'dist', troque a palavra abaixo!
COPY --from=builder /app/dist /usr/share/nginx/html

# Expõe a porta padrão do Nginx
EXPOSE 80

# Inicia o servidor
CMD ["nginx", "-g", "daemon off;"]