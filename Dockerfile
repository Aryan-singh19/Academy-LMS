# Academy LMS — production container (Express server + static study desk + /api routes)
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --no-audit --no-fund

FROM node:20-alpine
ENV NODE_ENV=production \
    PORT=3000
WORKDIR /app
RUN addgroup -S academy && adduser -S academy -G academy
COPY --from=deps /app/node_modules ./node_modules
COPY --chown=academy:academy . .
USER academy
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget -qO- "http://127.0.0.1:${PORT}/api/app-config" >/dev/null || exit 1
CMD ["node", "server.js"]
