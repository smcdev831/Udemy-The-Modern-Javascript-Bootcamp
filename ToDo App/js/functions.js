let getSavedTodos = function () {
  let todosJSON = localStorage.getItem("todos");

  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
};

let saveTodos = function (todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
};

let renderTodos = function (todos, filters) {
  let filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.serarchText.toLowerCase());
  });

  filteredTodos = filteredTodos.filter(function (todo) {
    return !filters.hideCompleted || !todo.completed;
  });

  let incomplete = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });

  document.querySelector("#todos").innerHTML = "";

  document.querySelector("#todos").appendChild(generateSummaryDOM(incomplete));

  filteredTodos.forEach((todo) => {
    document.querySelector("#todos").appendChild(generateTodoDOM(todo));
  });
};

let generateTodoDOM = function (todo) {
  let listItem = document.createElement("p");
  listItem.textContent = todo.text;
  return listItem;
};

let generateSummaryDOM = function (incomplete) {
  let summary = document.createElement("h3");
  summary.textContent = `You have ${incomplete.length} items left on your list`;
  return summary;
};
