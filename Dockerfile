FROM node:20-alpine

WORKDIR /app

COPY WaterPotability-dashboard/package.json /app/package.json
RUN npm install

COPY WaterPotability-dashboard /app

EXPOSE 4200

CMD ["npm", "run", "ng", "--", "serve", "--host", "0.0.0.0", "--port", "4200", "--proxy-config", "proxy.docker.json"]
