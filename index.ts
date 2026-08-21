function findTaskById(tasks: Task[], id: number) : Task | undefined{
  return tasks.find((task) => task.id === id);
}

type Task = {
  id: number,
  title: string,
  completed: boolean,
  priority: number,
  description?: string
}

const tasks: Task[] = [
  {id: 1, title: "Изучить Git", completed: true, priority: 1, description: "Описание задачи 1"},
  {id: 2, title: "Задача 2", completed: true, priority: 2},
  {id: 3, title: "Задача 3", completed: true, priority: 3, description: "Описание задачи 3"}
];

const foundTask = findTaskById(tasks, 2);
const missingTask = findTaskById(tasks, 10);

foundTask ? console.log(`${foundTask.title}`) : console.log(`Задача не найдена`);
missingTask ? console.log(`${missingTask.title}`) : console.log(`Задача не найдена`);