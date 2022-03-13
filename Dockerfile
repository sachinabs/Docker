FROM node:14.16.0-alpine3.13
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
# RUN npm start
CMD ["npm", "start"]