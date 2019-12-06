FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN npm install config jsonwebtoken bcrypt mocha chai
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY app.js .
COPY config ./config
COPY middleware ./middleware
COPY test ./test

EXPOSE 8080
CMD [ "node", "app.js" ]
