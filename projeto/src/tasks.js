// Exercício 5 - Prioridade
let _nextId = 1;

export function createTask(title, priority = 'medium') {
  return {
    id: _nextId++,
    title: title.trim(),
    completed: false,
    priority
  };
}

export function validatePriority(priority) {
  return ['low', 'medium', 'high'].includes(priority);
}

export function filterByPriority(tasks, priority) {
  return tasks.filter(t => t.priority === priority);
}

// Exercício 6 - Duplicatas
export function isDuplicate(tasks, title) {
  const normalized = title.trim().toLowerCase();
  return tasks.some(t => t.title.toLowerCase() === normalized);
}

// Exercício 7 - Ordenação
export function sortTasks(tasks) {
  return [...tasks].sort((a, b) =>
    Number(a.completed) - Number(b.completed)
  );
}

// Exercício 8 - Busca
export function searchTasks(tasks, query) {
  const q = query.toLowerCase();
  return tasks.filter(t =>
    t.title.toLowerCase().includes(q)
  );
}
