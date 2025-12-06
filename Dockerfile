# ---------- STAGE 1: Build ----------
FROM node:20.19.0-alpine AS builder

WORKDIR /app

# копируем файлы зависимостей
COPY package*.json yarn.lock ./

# УСТАНАВЛИВАЕМ ЗАВИСИМОСТИ (yarn уже есть)
RUN yarn install --frozen-lockfile

# копируем весь проект
COPY . .

# сборка Nuxt
RUN yarn build


# ---------- STAGE 2: Production ----------
FROM node:20.19.0-alpine AS runner

WORKDIR /app

COPY --from=builder /app/.output ./.output

ENV PORT=3000
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
