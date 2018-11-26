FROM node:8
RUN npm i -g @adonisjs/cli
RUN adonis new blog --api-only
WORKDIR /blog
COPY ./blog .
EXPOSE 3333
CMD ["adonis", "serve", "--dev", "--polling"]
