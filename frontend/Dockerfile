FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# FALHA 10: O build de produção está quebrado pois roda o servidor de desenvolvimento.
CMD ["npm", "run", "dev", "--", "--host"]