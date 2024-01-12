/* Написать объект ToDoList, который хранит в себе задачи {title: 'Помыть посуду', id: 1, priority: 1}
и имеет методы:
- Добавить задачу
- Удалить задачу по id
- Обновить имя или приоритет по id
- Отсортировать задачи по приоритету
*/


const toDoList = {

    tasks: [
        {
            title: 'Помыть посуду',
            id: 1,
            priority: 3
        },
    ],

    addTask: function (title, priority) {
        const id = this.tasks[this.tasks.length - 1].id + 1
        this.tasks.push({title, id, priority});
    },

    deleteTaskById: function (id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    },

    updateTaskById: function (id, newTitle, newPriority) {
        this.tasks.map((task) => {
            if (task.id === id) {
                task.title = newTitle;
                task.priority = newPriority;
            }
        })
    },

    sortTasksByPriority: function () {
        if (this.length <= 1) return
        this.tasks.sort((a, b) => {
            return a.priority - b.priority;
        })
    },
};


toDoList.addTask('задача 2', 3);
toDoList.addTask('задача 3', 3);

toDoList.deleteTaskById(2);

toDoList.addTask('задача 4', 2);

toDoList.updateTaskById(3, 'Новая задача ', 1)

toDoList.sortTasksByPriority();

console.log(toDoList.tasks);
