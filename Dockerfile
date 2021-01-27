# This dockerfile is meant for in-container development
FROM node:14.15.1
# Create and define the application's working directory.
WORKDIR /usr/src/app

# Install the application's dependencies into the node_modules's cache directory.
COPY [ "package.json", "yarn.lock", "./" ]
# RUN yarn global add @vue/cli
RUN yarn 

COPY . .
EXPOSE 8080

CMD [ "yarn", "run", "serve" ]