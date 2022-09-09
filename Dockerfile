FROM node:18-alpine
#sets image maintenance
LABEL maintainer="claudia"
#UPDATE IMAGE WITH PACKAGES
RUN apt-get update && apt-get upgrade -y
#EXPOSE A PORT 81
EXPOSE 81
#INSTALL THE DEV DEPENDENCIES
CMD ["npm install --save-dev mocha chai mocha-junit-reporter"]
