FROM node:20-alpine

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .

RUN npx prisma generate
RUN npx prisma db push --url $DATABASE_URL
RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
