// todo.js - 待办事项管理
const todos = [];

function add(task) {
 todos.push({ task, done: false });
 console.log('已添加:', task);
}

function list() {
 todos.forEach((t, i) => console.log(`${i+1}. ${t.done ? '✓' : '○'} ${t.task}`));
}

function done(index) {
 todos[index].done = true;
 console.log('已完成:', todos[index].task);
}

module.exports = { add, list, done };
