# Stage 1
FROM node:alpine as preact-build
WORKDIR /src
COPY . ./
RUN npm set registry https://registry.npmjs.org/
RUN npm config delete proxy
RUN npm install
RUN npm run build

# Stage 2 - the production environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=preact-build /src/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]