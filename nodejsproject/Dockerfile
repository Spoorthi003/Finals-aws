FROM node:alpine
WORKDIR '/nodejsapp'

COPY package.json .
RUN npm install
COPY . .
CMD ["npm","start"]