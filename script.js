var todolist = [
  { id: 1, name: "reading book", status: true },
  { id: 2, name: "lunch", status: false },
  { id: 3, name: "writing", status: true },
  { id: 4, name: "sporting", status: true },
  { id: 5, name: "worker", status: false },
  { id: 6, name: "eating", status: false },
];

var menu;
var x1 = {};
menu = prompt("1: add\n2: remove\n3: doing");
console.log(menu);

if (menu === "1") {
  var name1 = prompt("نام تودو را وارد کنید");

  newTodoObject = { id: todolist.length + 1, name: name1, status: false };
  todolist.push(newTodoObject);
} else if (menu === "2") {
  var name1 = prompt("نام تودویی که میخواهید حذف شود را وارد کنید");
  var removeTodo = todolist.findIndex((item) => item.name === name1);
  todolist.splice(removeTodo, 1);
} else if (menu === "3") {
  var name1 = prompt("نام تودو را وارد کنید");
  todolist.forEach(function (item) {
    if (item.name === name1) item.status = true;
  });
} else {
  alert("گزینه انتخابی درست نیست");
}
console.log(todolist);
