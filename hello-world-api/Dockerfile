FROM node:8.11-alpine

RUN apk --no-cache add tini
ENTRYPOINT ["/sbin/tini", "--"]

WORKDIR /opt
ENV NODE_PATH /opt
COPY src /opt/src
COPY package.json /opt
COPY package-lock.json /opt
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]
