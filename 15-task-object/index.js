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
        let id;
        if (this.tasks.length === 0) {
            id = 1;
        } else {
            id = this.tasks[this.tasks.length - 1].id + 1;
        }
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
toDoList.addTask('задача 4', 2);


toDoList.deleteTaskById(3);
toDoList.addTask('задача 2', 3);

toDoList.addTask('задача 5', 2);

toDoList.updateTaskById(2, 'Новая задача ', 1)

toDoList.sortTasksByPriority();

console.log(toDoList.tasks);
