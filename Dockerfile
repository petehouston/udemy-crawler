FROM node:10-alpine
MAINTAINER Pete Houston <contact@petehouston.com>

RUN npm install -g udemy-crawler
ENTRYPOINT ["udemy-crawler"]
