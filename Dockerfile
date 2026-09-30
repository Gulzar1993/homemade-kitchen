# syntax=docker/dockerfile:1

# ---------- Stage 1: build the Vite app ----------
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies first to take advantage of layer caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy the source and build the production bundle
COPY . .
RUN npm run build

# ---------- Stage 2: serve with nginx ----------
FROM nginx:alpine

# Replace the default server config with our SPA-aware config
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the static build output
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
