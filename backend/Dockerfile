FROM node:20
WORKDIR /app
COPY package*.json ./
# FALHA 9: Argumento errado na instalação das dependências (pode quebrar o build em prod)
RUN npm install --production=false 
COPY . .
EXPOSE 3000
CMD ["npm", "start"]