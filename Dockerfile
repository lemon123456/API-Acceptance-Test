FROM kkarczmarczyk/node-yarn

RUN mkdir -p /home/nodejs/test
WORKDIR /home/nodejs/test
COPY . /home/nodejs/test
RUN yarn
CMD ["yarn", "run", "acceptance"]
