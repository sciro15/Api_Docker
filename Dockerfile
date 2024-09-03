FROM node:18

WORKDIR /home/app

COPY . .


EXPOSE 2402

RUN npm install


CMD ["node", "server.js"]
