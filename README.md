

## Начало использования

Запуск developement-среду

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Окрыть [http://localhost:3000](http://localhost:3000) и увидеть результат.

## Types

User:
```bash
id: number
username: string
email: string
password: string
checked: boolean
```

Dashboards:
```bash
id: number
name: string
user_id: number
```