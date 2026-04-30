// todo.js - 待办事项管理
const todos = [];

function add(task) {
  if (!task || typeof task !== 'string') {
    console.log('错误: 任务内容不能为空');
    return;
  }
  
  todos.push({ id: Date.now(), task: task.trim(), done: false });
  console.log('✅ 已添加:', task);
}

function list() {
  if (todos.length === 0) {
    console.log('📝 暂无待办事项');
    return;
  }
  
  todos.forEach((t, i) => {
    const status = t.done ? '✅' : '⭕';
    console.log(`${i + 1}. ${status} ${t.task}`);
  });
}

function done(index) {
  // 转换为数字并验证有效性
  const idx = Number(index);
  if (isNaN(idx) || idx < 1 || idx > todos.length) {
    console.log(`错误: 无效的序号，请输入 1-${todos.length} 之间的数字`);
    return;
  }
  
  const todo = todos[idx - 1];
  if (todo.done) {
    console.log('⚠️ 任务已完成:', todo.task);
    return;
  }
  
  todo.done = true;
  console.log('🎉 已完成:', todo.task);
}

// 新增：删除任务
function remove(index) {
  const idx = Number(index);
  if (isNaN(idx) || idx < 1 || idx > todos.length) {
    console.log(`错误: 无效的序号，请输入 1-${todos.length} 之间的数字`);
    return;
  }
  
  const removed = todos.splice(idx - 1, 1)[0];
  console.log('🗑️ 已删除:', removed.task);
}

// 新增：清空所有任务
function clear() {
  todos.length = 0;
  console.log('🧹 已清空所有待办事项');
}

module.exports = { add, list, done, remove, clear };
