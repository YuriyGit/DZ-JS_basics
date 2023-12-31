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
            priority: 1
        },
    ],

    addTask: function (title, priority) {
        let id = this.tasks.length + 1;
        this.tasks.push({title, id, priority});
    },

    delTask: function (id) {
        this.tasks.map((task, index) => {
            if (task.id === id) {
                this.tasks.splice(index, 1)
            }
        })
    },
    updateTask: function (id, newTitle, newPriority) {
        this.tasks.map((task) => {
            if (task.id === id) {
                task.title = newTitle
                task.priority = newPriority
            }
        })
    },
    sortTasks: function (){
        this.tasks.sort((a,b)=>{
            return a.priority - b.priority
        })
    }
};

toDoList.addTask('Помыть', 2)
toDoList.addTask('Помыть1', 3)
toDoList.addTask('Помыть2', 4)
toDoList.delTask(2)
toDoList.updateTask(3, '2322',2)
toDoList.sortTasks();
console.log(toDoList.tasks);
