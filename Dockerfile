###### PROD
FROM node:8
COPY . .
RUN npm config set registry http://registry.npmjs.org/ && npm install
EXPOSE 80
CMD ["npm", "run", "prod"]
