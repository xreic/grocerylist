FROM node:12-stretch

RUN mkdir /usr/src/app/
WORKDIR /usr/src/app/
COPY --chown=node:node . .

ENV TZ=America/Los_Angeles
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN chmod a+rwx -R /usr/src/app/
RUN npm install
RUN npm run next:build

USER node

CMD [ "npm", "run", "docker" ]