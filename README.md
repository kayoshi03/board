### Capiboard

Это доска канбан, которая заменит трело и другие зарубежные доски. Цель данного проекта создания инструмента для СНГ пользователей для ведения и создания продуктов разной направленности и удобной работы в команде.

## Возможности:

Создание доски;
Добавление задач;
Редактирование задач;
Удаление задач;
Назначения людей на задачи;
Настройка ролей;
Добавление участников в проект;
Изменение доски;
Drag and drop.

## Стек технологий:
Nextjs;
React;
Axios;
Redux ToolKit;
Zod;


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