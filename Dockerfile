FROM node:8
RUN npm i -g @adonisjs/cli
RUN adonis new app --api-only
WORKDIR /app
COPY ./app .
EXPOSE 3333
CMD ["adonis", "serve", "--dev"]
