import express from "express";

const tasks = [
  {
    id: 1,
    title: "Изучить Express",
    completed: true,
  },
  {
    id: 2,
    title: "Создать API",
    completed: false,
  },
];

const app = express();
const port = 3000;

app.get("/api/tasks", (_request, response) => {
  response.json(tasks);
});

app.listen(port, () => {
  console.log(`Сервер запущен: http://localhost:${port}`);
});
